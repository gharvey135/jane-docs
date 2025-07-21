# Architecture

This page describes the internal structure of the JSONPlaceholder API Wrapper project.

---

## Folder Structure

jsonplaceholder-wrapper/
├── src/
│   ├── index.ts        # Main client class that wraps the API
│   └── test.ts         # Sample usage and test script
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── README.md           # Overview and instructions

---

## Main Entry: `src/index.ts`

This file defines the `JsonPlaceholderClient` class which wraps REST endpoints like:

- `getUsers()`
- `getPosts()`
- `getComments()`

Each method uses `fetch` and returns typed data (e.g. `User[]`, `Post[]`, etc.).

---

## Testing: `src/test.ts`

The `test.ts` file demonstrates how to:

- Instantiate the client
- Call methods like `getUsers()`
- Log or validate the output

---

## Type Safety

The project uses TypeScript interfaces (`User`, `Post`, `Comment`) to ensure:

- Strong typing
- Better IDE autocompletion
- Fewer runtime errors

---

## Dependencies

- No external dependencies (uses built-in `fetch`)
- Pure TypeScript for maintainability and clarity

