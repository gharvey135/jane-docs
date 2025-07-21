import React from 'react';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-4">📘 JSONPlaceholder API Wrapper</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
        A lightweight TypeScript client for interacting with the JSONPlaceholder REST API.
        Built for testing, prototyping, and technical interviews.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700"
          to="/docs/getting-started"
        >
          View Docs
        </Link>
        <Link
          className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-xl text-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          to="https://github.com/gharvey135/jane-docs"
        >
          GitHub Repo
        </Link>
      </div>
    </main>
  );
}



