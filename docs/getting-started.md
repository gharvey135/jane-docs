---
sidebar_position: 1
---

# Getting Started

`JSONPlaceholderAPI` is a small, typed TypeScript client for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API. It wraps three resources (`/users`, `/posts`, `/comments`) behind async methods that return typed arrays, and it stamps every request with an `X-User-Tracking` header so calls can be attributed to an end user.

JSONPlaceholder stands in for a real partner API here. The point of this portal is the shape of the documentation and the client, not the data.

## Requirements

| Requirement | Version |
| --- | --- |
| Node.js | 18 or newer |
| TypeScript | 5.x |
| Runtime dependency | `axios` (the only one) |

## Install

The client lives in this repo under `examples/jsonplaceholder-wrapper`. Copy the folder into your project, or run it in place:

```bash
cd examples/jsonplaceholder-wrapper
npm ci
```

## First request

```ts
import { JSONPlaceholderAPI } from './src/index';

const api = new JSONPlaceholderAPI({ userId: 1 });

const users = await api.getUsers();
console.log(users[0].name); // "Leanne Graham"
```

`userId` is optional. When set, `getPosts()` filters to that user's posts and the tracking header carries the id; when omitted, the header is `guest` and `getPosts()` returns every post.

## Run the smoke test

```bash
npx ts-node test.ts
```

The test hits the live API and asserts on the returned counts (10 users, 10 posts for user 1, 5 comments on the first post). Type-check without running anything:

```bash
npx tsc --noEmit
```

## Next steps

- [API Reference](./api-reference.md): every method, its parameters, and the shape it returns.
- [Examples](./examples.md): joining users to posts, handling errors, and running without tracking.
- [Architecture](./architecture.md): how the client is put together and why.
