console.log("🔧 test.ts is running");

import { JSONPlaceholderAPI } from './src/index';

const run = async () => {
  console.log("🔁 Starting run()...");

  const api = new JSONPlaceholderAPI({ userId: 1 });

  try {
    console.log("📡 Fetching users...");
    const users = await api.getUsers();
    console.log('\n📋 Users:', users);

    console.log("📡 Fetching posts...");
    const posts = await api.getPosts();
    console.log('\n📝 Posts for user 1:', posts);

    if (posts.length > 0) {
      console.log(`📡 Fetching comments for post ID: ${posts[0].id}`);
      const comments = await api.getComments(posts[0].id);
      console.log(`\n💬 Comments on post ${posts[0].id}:`, comments);
    } else {
      console.log('\n⚠️ No posts found for user.');
    }
  } catch (err) {
    console.error('❌ Error occurred:', err);
  }
};

run();
