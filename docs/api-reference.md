# API Reference

Easily fetch JSONPlaceholder resources using the `JsonPlaceholderClient`.

---

## 🔍 Get All Users

### Endpoint

```http
GET /users
const client = new JsonPlaceholderClient();
const users = await client.getUsers();
console.log(users);
curl https://jsonplaceholder.typicode.com/users
GET /posts
const posts = await client.getPosts();
console.log(posts);
curl https://jsonplaceholder.typicode.com/posts
GET /comments
const comments = await client.getComments();
console.log(comments);
curl https://jsonplaceholder.typicode.com/comments

