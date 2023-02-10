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

Our training ground use https://reqres.in/ as fake data with real API, see available request list in the website

## Setup

1. `yarn` for install all dependencies
2. Create `.env.local` at root directory (same place with `.env`)
3. Copy this content below into your `.env.local`

```
PLAYWRIGHT_TEST_DIR=./tests-examples
```

4. Open your terminal then run `yarn test`, all test should pass properly
5. Create directory `tests` at root directory
6. Update `.env.local`, change `PLAYWRIGHT_TEST_DIR` value to `./tests`
7. Write your test in `tests` directory
8. You can follow topic section `Challenges` to learn how to test website with playwright

## Challenges

- ???
