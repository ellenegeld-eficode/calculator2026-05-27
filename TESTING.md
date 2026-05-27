# Testing Guide for This Calculator

This project now has automated tests using Vitest.

## What is implemented

- Unit tests for calculation logic
- DOM integration tests for button interactions
- Test scripts in package.json

## Step-by-step: run the tests

1. Install dependencies (first time only):

   npm install

2. Run all tests once:

   npm test

3. Run tests in watch mode while coding:

   npm run test:watch

4. Run only DOM interaction tests:

   npm run test:dom

## Where tests live

- tests/calculator.logic.test.js
- tests/calculator.dom.test.js

## How to add a new test

1. Pick a behavior, for example: percent chain, decimal math, or invalid operator sequence.
2. Add a new test case in the matching test file.
3. Run npm test.
4. If it fails, update logic in calculator-logic.js or UI wiring in calculator.js.
5. Run tests again until green.

## Framework options: pros and cons

### Vitest (current setup)

Pros:
- Fast startup and execution
- Great for unit and jsdom tests in one tool
- Minimal setup for small projects

Cons:
- Smaller historical ecosystem than Jest
- Fewer legacy tutorials than Jest

### Jest

Pros:
- Very large community and tutorial base
- Mature mocking ecosystem
- Widely used in teams and interview exercises

Cons:
- Can be slower than Vitest
- Configuration can feel heavier

### Playwright

Pros:
- Runs real browser tests (high confidence)
- Excellent debugging traces and tooling
- Great for end-to-end regression coverage

Cons:
- Heavier setup than unit test tools
- Slower feedback loop
- Best used as a second layer, not first

### Cypress

Pros:
- Friendly interactive runner
- Good developer experience for browser flow tests
- Strong ecosystem for UI testing

Cons:
- Primarily browser/E2E focused
- Slower than unit tests
- More overhead for very small apps

## Recommended learning path

1. Keep Vitest for unit + DOM tests.
2. Add 5-10 more unit cases for edge cases.
3. Add Playwright later for 2-4 smoke E2E tests.
4. For each bug fix, first add a failing test, then fix the code.
