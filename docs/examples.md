---
sidebar_position: 3
---

# Examples

Runnable snippets against `JSONPlaceholderAPI`. Each assumes:

```ts
import { JSONPlaceholderAPI } from './src/index';
```

## Basic usage

```ts
const api = new JSONPlaceholderAPI({ userId: 1 });

const users = await api.getUsers();
const posts = await api.getPosts(); // only user 1's posts
const comments = await api.getComments(posts[0].id);

console.log(users.length, posts.length, comments.length); // 10 10 5
```

## Fetch without tracking

Omit `userId` to send `X-User-Tracking: guest` and get every post back.

```ts
const api = new JSONPlaceholderAPI();
const allPosts = await api.getPosts(); // 100 posts
```

## Join users to their posts

The API has no embed parameter, so the join happens client-side. Two requests, one pass over the data.

```ts
const api = new JSONPlaceholderAPI();

const [users, posts] = await Promise.all([api.getUsers(), api.getPosts()]);

const postsByUser = users.map((user) => ({
  ...user,
  posts: posts.filter((post) => post.userId === user.id),
}));

console.log(postsByUser[0].posts.length); // 10
```

## Load comments for several posts in parallel

```ts
const api = new JSONPlaceholderAPI({ userId: 2 });
const posts = await api.getPosts();

const comments = await Promise.all(posts.map((p) => api.getComments(p.id)));
const total = comments.reduce((n, list) => n + list.length, 0);

console.log(total); // 50 (5 comments x 10 posts)
```

## Handling errors

The client rethrows `AxiosError`, so status codes stay available.

```ts
import axios from 'axios';

try {
  await api.getComments(-1); // JSONPlaceholder returns [] here, but a real API might 404
} catch (err) {
  if (axios.isAxiosError(err)) {
    console.error('HTTP', err.response?.status, err.message);
  } else {
    throw err;
  }
}
```

## One client per end user

Because tracking is set at construction time, create one instance per user rather than mutating a shared one.

```ts
const clients = new Map<number, JSONPlaceholderAPI>();

function clientFor(userId: number) {
  if (!clients.has(userId)) {
    clients.set(userId, new JSONPlaceholderAPI({ userId }));
  }
  return clients.get(userId)!;
}
```
