// Smoke test against the live JSONPlaceholder API.
// Run with: npx ts-node test.ts  (or npm test)

import assert from 'node:assert/strict';
import { JSONPlaceholderAPI } from './src/index';

const run = async () => {
  const api = new JSONPlaceholderAPI({ userId: 1 });

  const users = await api.getUsers();
  assert.equal(users.length, 10, 'expected 10 users');
  assert.equal(typeof users[0].email, 'string', 'user.email should be a string');
  console.log(`getUsers: ${users.length} users`);

  const posts = await api.getPosts();
  assert.equal(posts.length, 10, 'expected 10 posts for userId 1');
  assert.ok(posts.every((p) => p.userId === 1), 'all posts should belong to userId 1');
  console.log(`getPosts: ${posts.length} posts for user 1`);

  const comments = await api.getComments(posts[0].id);
  assert.equal(comments.length, 5, 'expected 5 comments on the first post');
  assert.ok(comments.every((c) => c.postId === posts[0].id), 'comments should match postId');
  console.log(`getComments: ${comments.length} comments on post ${posts[0].id}`);

  console.log('All checks passed.');
};

run().catch((err) => {
  console.error('Test failed:', err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
