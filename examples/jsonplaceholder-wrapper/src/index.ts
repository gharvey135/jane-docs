// src/index.ts

import axios, { AxiosInstance } from 'axios';

// Define the shape of the data returned from the API
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

// Optional userId for tracking/filtering
export interface JSONPlaceholderOptions {
  userId?: number;
}

// Our main wrapper class
export class JSONPlaceholderAPI {
  private client: AxiosInstance;
  private userId?: number;

  constructor(options?: JSONPlaceholderOptions) {
    this.userId = options?.userId;

    console.log("📦 JSONPlaceholderAPI is being initialized...");

    // Create an axios client for requests
    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers: {
        'X-User-Tracking': this.userId?.toString() || 'guest',
      },
    });
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    const res = await this.client.get('/users');
    return res.data;
  }

  // Get posts (optionally filtered by user)
  async getPosts(): Promise<Post[]> {
    const params = this.userId ? { userId: this.userId } : {};
    const res = await this.client.get('/posts', { params });
    return res.data;
  }

  // Get comments for a specific post
  async getComments(postId: number): Promise<Comment[]> {
    console.log("📨 Inside getComments()...");
    const res = await this.client.get('/comments', { params: { postId } });
    return res.data;
  }
}
