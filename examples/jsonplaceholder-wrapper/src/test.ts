console.log("🔧 test.ts is running");

import { JSONPlaceholderAPI } from './src/index';

const run = async () => {
  const api = new JSONPlaceholderAPI({ userId: 1 });

  try {
    const users = await api.getUsers();
    console.log('\n📋 Users:', users);

    const posts = await api.getPosts();
    console.log('\n📝 Posts for user 1:', posts);

    if (posts.length > 0) {
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


