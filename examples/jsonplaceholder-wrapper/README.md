# jsonplaceholder-wrapper

Typed TypeScript client for the JSONPlaceholder REST API. It is the code that the
[jane-docs](../../README.md) portal documents. One runtime dependency (`axios`), three
methods, strict TypeScript.

## Run

```bash
npm ci
npx tsc --noEmit        # type-check
npx ts-node test.ts     # live smoke test against jsonplaceholder.typicode.com
```

## Usage

```ts
import { JSONPlaceholderAPI } from './src/index';

const api = new JSONPlaceholderAPI({ userId: 1 });
const posts = await api.getPosts();          // Post[] for user 1
const comments = await api.getComments(posts[0].id);
```

## API

| Method | Request | Returns |
| --- | --- | --- |
| `new JSONPlaceholderAPI({ userId? })` | sets `X-User-Tracking` header (`guest` if omitted) | instance |
| `getUsers()` | `GET /users` | `User[]` |
| `getPosts()` | `GET /posts` (`?userId=` when set) | `Post[]` |
| `getComments(postId)` | `GET /comments?postId=` | `Comment[]` |

Full reference, examples, and design notes live in the portal under `docs/`.
