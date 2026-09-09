# jane-docs

A developer portal (Docusaurus 3.8) plus the typed TypeScript API client it documents.
Built as a client need for developer-facing documentation and what I think good SDK ergonomics look like.

Run it: `npm ci && npm start` (portal) and `cd examples/jsonplaceholder-wrapper && npm ci && npx ts-node test.ts` (client).
It proves: a docs site that builds with `onBrokenLinks: 'throw'`, a strict-TypeScript client with
a passing smoke test, and CI that checks both.

Status: July 2025. JSONPlaceholder stands in for the real API; the client
and docs are a reference implementation, not production code.

## Run

| Task | Command |
| --- | --- |
| Portal dev server | `npm ci && npm start` (opens http://localhost:3000/jane-docs/) |
| Portal production build | `npm run build` (output in `build/`) |
| Client type-check | `cd examples/jsonplaceholder-wrapper && npm ci && npx tsc --noEmit` |
| Client smoke test | `cd examples/jsonplaceholder-wrapper && npx ts-node test.ts` |

Requires Node 18+. CI runs on Node 22.

## Repo layout

```text
docs/                         Portal content (four pages, see below)
src/pages/index.tsx           Landing page with links into the docs
docusaurus.config.ts          Site config, navbar, footer (GitHub Pages under /jane-docs/)
sidebars.ts                   Doc ordering
examples/jsonplaceholder-wrapper/
  src/index.ts                JSONPlaceholderAPI class and exported types
  test.ts                     Live smoke test with assertions
.github/workflows/ci.yml      Builds the portal, type-checks the client
```

## Docs structure

| Page | What it answers |
| --- | --- |
| `docs/getting-started.md` | Install, first request, how to run the test. Under 2 minutes to a working call. |
| `docs/api-reference.md` | Every method with HTTP equivalent, curl, parameters, return type, error behaviour. |
| `docs/examples.md` | Joins, parallel fetches, error handling, one-client-per-user pattern. |
| `docs/architecture.md` | Folder layout, request-flow diagram, component table, design decisions. |

## Client API surface

| Method | Request | Returns |
| --- | --- | --- |
| `new JSONPlaceholderAPI({ userId? })` | Creates an axios instance with `X-User-Tracking: <id or guest>` | instance |
| `getUsers()` | `GET /users` | `User[]` |
| `getPosts()` | `GET /posts`, adds `?userId=` when the client has one | `Post[]` |
| `getComments(postId)` | `GET /comments?postId=<id>` | `Comment[]` |

Exported types: `User`, `Post`, `Comment`, `JSONPlaceholderOptions`. Errors are not wrapped;
callers get the `AxiosError` with `response.status` intact.

## Testing

`examples/jsonplaceholder-wrapper/test.ts` calls the live API and asserts with `node:assert/strict`:
10 users, 10 posts for user 1 (all with `userId === 1`), 5 comments on the first post (all with the
requested `postId`). It exits non-zero on failure. CI runs `tsc --noEmit` rather than the live test so
a JSONPlaceholder outage cannot fail the build.

## Design decisions

- **Docs are written against the code, not alongside it.** Every snippet in `docs/` uses the real
  class name, method signatures, and return counts from `src/index.ts`, and the build fails on any
  broken internal link. Drift between docs and SDK is the most common complaint I hear from API
  customers, so the portal is set up to make drift visible.
- **axios instead of bare `fetch`.** One dependency buys default headers, query serialisation, and
  typed errors. The tradeoff (a 30 KB dependency) is worth it for a client whose whole job is to make
  per-user tracking and filtering a one-liner.
- **Tracking is fixed at construction.** `userId` cannot be changed on an instance, so a client is
  safe to share within one user's scope and cannot leak identity between users. The cost is one
  instance per user, which the examples page shows how to cache.

## License

MIT. See [LICENSE](./LICENSE).
