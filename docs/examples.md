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
# Usage Examples

Practical examples of how to use the `JsonPlaceholderClient`.

---

## 🧠 Basic Usage

### JavaScript

```ts
import { JsonPlaceholderClient } from './src';

const client = new JsonPlaceholderClient();

async function main() {
  const users = await client.getUsers();
  const posts = await client.getPosts();
  const comments = await client.getComments();

  console.log('Users:', users);
  console.log('Posts:', posts);
  console.log('Comments:', comments);
}

main();

const users = await client.getUsers();
const posts = await client.getPosts();

const postsByUser = users.map((user) => {
  return {
    ...user,
    posts: posts.filter((post) => post.userId === user.id),
  };
});

console.log(postsByUser);

