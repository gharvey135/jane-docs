---
sidebar_position: 4
---

# Architecture

How the client under `examples/jsonplaceholder-wrapper` is put together.

## Folder structure

```text
examples/jsonplaceholder-wrapper/
  src/index.ts     JSONPlaceholderAPI class, exported types
  test.ts          live smoke test with assertions
  package.json     axios (runtime), typescript + ts-node (dev)
  tsconfig.json    strict, commonjs, es2016 target
```

## Request flow

```text
App                      JSONPlaceholderAPI              axios instance          jsonplaceholder.typicode.com
 |  new API({userId:1})        |                              |                          |
 |----------------------------->|  axios.create(baseURL,       |                          |
 |                              |    X-User-Tracking: "1")     |                          |
 |                              |----------------------------->|                          |
 |  getPosts()                  |                              |                          |
 |----------------------------->|  GET /posts?userId=1         |                          |
 |                              |----------------------------->|  HTTPS                   |
 |                              |                              |------------------------->|
 |                              |                              |<-------------------------|
 |                              |<-----------------------------|  200 JSON                |
 |<-----------------------------|  res.data as Post[]          |                          |
```

The constructor does all the configuration once: base URL and the tracking header are baked into a single axios instance, so every method is a one-line `get` that returns `res.data` typed as the right interface.

## Components

| Piece | Responsibility |
| --- | --- |
| `JSONPlaceholderOptions` | Constructor options. Today only `userId`. |
| `axios.create(...)` | Shared instance holding `baseURL` and the `X-User-Tracking` header. |
| `getUsers()` | `GET /users`, returns `User[]`. |
| `getPosts()` | `GET /posts`, adds `?userId=` when the client has one, returns `Post[]`. |
| `getComments(postId)` | `GET /comments?postId=`, returns `Comment[]`. |
| `User`, `Post`, `Comment` | Exported interfaces; the typed contract callers compile against. |

## Testing

`test.ts` runs against the live API and uses `node:assert/strict` to check counts and foreign keys (every post has `userId === 1`, every comment has the requested `postId`). It exits non-zero on any failure. CI runs `tsc --noEmit` so type errors are caught without depending on network access.

## Design decisions

- **axios over bare `fetch`.** One dependency buys a shared instance with default headers, query-param serialisation, and typed errors (`AxiosError` with `response.status`). With `fetch` each of those is hand-written.
- **Tracking fixed at construction.** `userId` is set once and cannot be changed on an instance. That makes a client safe to share within one user's request scope and impossible to accidentally leak between users.
- **Narrow `User` type.** The interface exposes `id`, `name`, `email` only. Documenting the fields the client promises, rather than everything the upstream happens to return, keeps the contract stable if upstream adds or renames fields.
- **No error wrapping.** Rejections pass through untouched so callers can branch on status codes. A wrapper error type would hide information without adding any.
