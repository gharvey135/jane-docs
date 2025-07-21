import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout title="JSONPlaceholder API Wrapper" description="TypeScript client for JSONPlaceholder">
      <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>📘 JSONPlaceholder API Wrapper</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
          A lightweight TypeScript client for interacting with the JSONPlaceholder REST API.
          Built for testing, prototyping, and technical interviews.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            to="/docs/getting-started"
            style={{
              margin: '0 1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3578e5',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            View Docs
          </Link>
          <Link
            to="https://github.com/gharvey135/jane-docs"
            style={{
              margin: '0 1rem',
              padding: '0.75rem 1.5rem',
              border: '2px solid #3578e5',
              color: '#3578e5',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            GitHub Repo
          </Link>
        </div>
      </main>
    </Layout>
  );
}




