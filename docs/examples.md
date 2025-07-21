# Examples

Here are usage examples for working with the JSONPlaceholder API Wrapper.

---

## Get All Users

```ts
import { JsonPlaceholderClient } from './src';

const client = new JsonPlaceholderClient();

async function main() {
  const users = await client.

const posts = await client.getPosts();
console.log(posts);
# API Usage Examples

Real-world usage of the JSONPlaceholder API Wrapper.

---

## 🧑‍💻 Get All Users

### Request

```bash
GET /users HTTP/1.1
Host: jsonplaceholder.typicode.com
const client = new JsonPlaceholderClient();
const users = await client.getUsers();
console.log(users);
curl https://jsonplaceholder.typicode.com/users
const posts = await client.getPosts();
console.log(posts);
curl https://jsonplaceholder.typicode.com/posts
const comments = await client.getComments();
console.log(comments);
curl https://jsonplaceholder.typicode.com/comments

