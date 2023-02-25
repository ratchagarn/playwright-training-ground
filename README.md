# Playwright Training Ground

The place for you to learn and try about [Playwright](https://playwright.dev/)

This project use [vite-react-ts-boilerplate](https://github.com/ratchagarn/vite-react-ts-boilerplate) to initial project

## Useful Link

- https://playwright.dev/docs/getting-started-vscode
- https://playwright.dev/docs/best-practices
- https://playwright.dev/docs/test-cli
- https://playwright.dev/docs/cli
- https://playwright.dev/docs/test-assertions
- https://playwright.dev/docs/locators
- https://playwright.dev/docs/trace-viewer-intro
- https://playwright.dev/docs/trace-viewer
- https://playwright.dev/docs/auth
- https://playwright.dev/docs/mock
- https://playwright.dev/docs/mock-browser-apis


## API

This project use [mswjs/msw](https://mswjs.io/) as mocking server API and use [mswjs/data](https://github.com/mswjs/data) as data modeling

## Data Generate

THis project use [fakerjs](https://fakerjs.dev/api/) as data generate

## Setup

1. `pnpm install` for install all dependencies
2. Duplicate file `.env.example` and rename to `.env.local`
3. npx msw init public/ --save
4. Open your terminal then run `pnpm test`, all test should pass properly
5. Create directory `tests` at root directory
6. Update `.env.local`, change `PLAYWRIGHT_TEST_DIR` value to `./tests`
7. Write your test in `tests` directory
8. You can follow topic section `Challenges` to learn how to test website with playwright

## Challenges

- Coming soon...
