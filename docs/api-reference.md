---
sidebar_position: 2
---

# API Reference

All methods live on the `JSONPlaceholderAPI` class. Every method is `async`, returns a typed array, and rejects with an `AxiosError` on a non-2xx response or network failure.

## Constructor

```ts
new JSONPlaceholderAPI(options?: JSONPlaceholderOptions)
```

| Option | Type | Default | Effect |
| --- | --- | --- | --- |
| `userId` | `number` | `undefined` | Sets the `X-User-Tracking` header to the id (otherwise `guest`) and filters `getPosts()` to that user. |

Base URL is fixed to `https://jsonplaceholder.typicode.com`.

## getUsers()

Fetch every user.

```http
GET /users
```

```ts
const users: User[] = await api.getUsers();
```

Equivalent curl:

```bash
curl https://jsonplaceholder.typicode.com/users
```

Returns `User[]` (10 records on JSONPlaceholder).

## getPosts()

Fetch posts. If the client was created with a `userId`, the request is filtered server-side with `?userId=<id>`.

```http
GET /posts
GET /posts?userId=1
```

```ts
const posts: Post[] = await api.getPosts();
```

```bash
curl "https://jsonplaceholder.typicode.com/posts?userId=1"
```

Returns `Post[]` (100 records unfiltered, 10 per user).

## getComments(postId)

Fetch the comments on a single post.

```http
GET /comments?postId=<postId>
```

| Parameter | Type | Required |
| --- | --- | --- |
| `postId` | `number` | yes |

```ts
const comments: Comment[] = await api.getComments(1);
```

```bash
curl "https://jsonplaceholder.typicode.com/comments?postId=1"
```

Returns `Comment[]` (5 per post on JSONPlaceholder).

## Types

All types are exported from `src/index.ts`.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface JSONPlaceholderOptions {
  userId?: number;
}
```

`User` is intentionally narrower than the upstream payload (which also carries `username`, `address`, `phone`, `website`, `company`). Extra fields are still present at runtime; they are simply not part of the typed contract.

## Errors

The client does not catch errors. A 4xx/5xx response or a network failure rejects the promise with an `AxiosError`, so callers keep full access to `error.response?.status` and the response body. See [Examples](./examples.md#handling-errors).
