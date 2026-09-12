# LearningPlaywrightFundamental3X

Basic Playwright test automation project (TypeScript).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Pratikraj211998/LearningPlaywrightFundamental3X.git
   cd LearningPlaywrightFundamental3X
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install
   ```

## Project structure

```
tests/                 # Test specs (*.spec.ts)
playwright.config.ts   # Playwright configuration
playwright-report/     # HTML report output (generated)
test-results/          # Test run artifacts (generated)
```

## Running tests

Run all tests headless:
```bash
npm test
```

Run tests in headed mode (visible browser):
```bash
npm run test:headed
```

Run tests in interactive UI mode:
```bash
npm run test:ui
```

Run a single test file:
```bash
npx playwright test tests/example.spec.ts
```

View the last HTML report:
```bash
npm run report
```

## Codegen (record tests automatically)

Playwright's codegen tool records your interactions with a page and generates test code for you.

Start codegen against a blank browser:
```bash
npm run codegen
```

Start codegen against a specific URL:
```bash
npx playwright codegen https://playwright.dev
```

Useful codegen options:
```bash
# Emulate a specific device
npx playwright codegen --device="iPhone 13" https://example.com

# Save generated code directly to a file
npx playwright codegen --output tests/generated.spec.ts https://example.com

# Choose a target language (default: JavaScript/TypeScript)
npx playwright codegen --target=python https://example.com
```

While codegen is running, interact with the app in the opened browser window — Playwright records clicks, inputs, and navigation in the Playwright Inspector window, which you can copy into your test files.

## Resources

- [Playwright documentation](https://playwright.dev/docs/intro)
- [Playwright codegen docs](https://playwright.dev/docs/codegen)
