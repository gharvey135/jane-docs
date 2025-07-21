# API Reference

This wrapper provides a simple TypeScript interface to interact with [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## JsonPlaceholderClient

### `constructor(baseUrl?: string)`

Initializes the client with an optional base URL.

```ts
const client = new JsonPlaceholderClient();
const users = await client.getUsers();
const posts = await client.getPosts();
const comments = await client.getComments();
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // ...etc.
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





