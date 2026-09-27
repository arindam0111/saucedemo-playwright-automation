# SauceDemo Playwright Framework

[![Playwright Tests](https://github.com/arindam0111/saucedemo-playwright-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/arindam0111/saucedemo-playwright-automation/actions/workflows/playwright.yml)

A scalable **UI and API test automation framework** built with **Playwright and TypeScript**, designed for the SauceDemo application and Restful Booker API.

The framework demonstrates modern automation practices including **Page Object Model (POM), reusable fixtures, API client abstraction, environment-based configuration, multi-browser testing, failure artifacts, HTML reporting, and GitHub Actions CI/CD**.

## 🛠️ Tech Stack

| Category        | Technologies                   |
| --------------- | ------------------------------ |
| Language        | TypeScript                     |
| UI Automation   | Playwright                     |
| API Testing     | Playwright APIRequest          |
| Design Pattern  | Page Object Model (POM)        |
| Test Framework  | Playwright Test                |
| Browsers        | Chromium, Firefox, WebKit      |
| Configuration   | dotenv / Environment Variables |
| Reporting       | Playwright HTML Report         |
| CI/CD           | GitHub Actions                 |
| Version Control | Git / GitHub                   |

## 📁 Project Structure

```text
saucedemo-playwright-automation/
├── api/
│   ├── clients/
│   └── types/
├── config/
├── data/
├── fixtures/
├── pages/
├── tests/
│   ├── login/
│   ├── purchase/
│   └── api/
│       └── restful-booker/
├── .github/
│   └── workflows/
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

## 🏗️ Framework Architecture

The framework follows a layered architecture to keep test scenarios, page interactions, API operations, test data, and configuration separated and reusable.

```text
                    ┌─────────────────────────┐
                    │       Test Layer        │
                    │   UI Tests / API Tests  │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
        ┌───────▼────────┐                ┌───────▼────────┐
        │    UI Layer    │                │    API Layer   │
        │  Page Objects  │                │  API Clients   │
        └───────┬────────┘                └───────┬────────┘
                │                                 │
        ┌───────▼────────┐                ┌───────▼────────┐
        │    Fixtures    │                │   API Types    │
        │ Reusable Setup │                │  TypeScript    │
        └───────┬────────┘                │    Models     │
                │                         └────────────────┘
                │
        ┌───────▼─────────────────────────────────────────┐
        │             Test Data & Configuration            │
        │       Environment Variables / Test Data         │
        └─────────────────────────────────────────────────┘
```

### Architecture Components

| Component             | Responsibility                                                 |
| --------------------- | -------------------------------------------------------------- |
| **Tests**             | Contains UI and API test scenarios and assertions              |
| **Page Objects**      | Encapsulates UI locators and page-level actions                |
| **API Clients**       | Encapsulates REST API requests and endpoint operations         |
| **Fixtures**          | Provides reusable Playwright test dependencies                 |
| **Test Data**         | Centralizes reusable test data                                 |
| **API Types**         | Provides TypeScript interfaces for API request/response models |
| **Configuration**     | Manages environment-specific configuration                     |
| **Playwright Config** | Controls browsers, projects, retries, reporting and execution  |

### Design Principles

The framework follows these principles:

* **Separation of concerns** — test scenarios are separated from implementation details.
* **Reusability** — common UI and API operations are implemented once and reused across tests.
* **Maintainability** — locators and API operations are centralized in dedicated classes.
* **Type safety** — TypeScript interfaces are used for API data structures.
* **Environment independence** — credentials and environment-specific values are managed through environment variables.
* **Scalability** — the structure allows additional UI pages, API clients, test suites and test data to be added without restructuring the framework.

### Test Flow

#### UI Test Flow

```text
Test
 ↓
Fixture
 ↓
Page Object
 ↓
Playwright Browser
 ↓
SauceDemo Application
 ↓
Assertions
```

#### API Test Flow

```text
Test
 ↓
API Fixture
 ↓
RestfulBookerClient
 ↓
Playwright APIRequest
 ↓
Restful Booker API
 ↓
Response Validation
```

## ⚡ Why Playwright?

This project uses Playwright with TypeScript to demonstrate a modern approach to end-to-end UI and API automation.

Key reasons for using Playwright in this framework:

* **Cross-browser automation** — supports Chromium, Firefox and WebKit from a single framework.
* **Built-in auto-waiting** — reduces synchronization issues by automatically waiting for elements to become actionable.
* **Web-first assertions** — provides reliable assertions designed for browser-based testing.
* **UI and API testing in one framework** — enables validation of both application workflows and backend APIs.
* **TypeScript support** — provides type safety, better IDE support and maintainable test code.
* **Parallel execution** — supports faster test execution through parallel workers.
* **Test isolation** — provides independent browser contexts for tests.
* **Trace, screenshot and video support** — provides useful diagnostics when tests fail.
* **CI/CD integration** — integrates with GitHub Actions for automated test execution.

## 🔑 Key Framework Features

| Feature             | Implementation                          |
| ------------------- | --------------------------------------- |
| UI Automation       | Playwright                              |
| API Automation      | Playwright APIRequest                   |
| Design Pattern      | Page Object Model                       |
| Test Fixtures       | Custom UI and API fixtures              |
| Browser Coverage    | Chromium, Firefox, WebKit               |
| Language            | TypeScript                              |
| Test Data           | Centralized test data modules           |
| Configuration       | Environment variables with dotenv       |
| Assertions          | Playwright web-first assertions         |
| Reporting           | Playwright HTML Report                  |
| Failure Diagnostics | Screenshots, videos and traces on retry |
| CI/CD               | GitHub Actions                          |
| API Abstraction     | Dedicated RestfulBookerClient           |
| Type Safety         | TypeScript interfaces                   |

### What This Project Demonstrates

**UI Automation → API Automation → Framework Design → Test Data Management → Reporting → CI/CD**

The goal is to maintain a clean separation between test scenarios and automation implementation while keeping the framework easy to extend as test coverage grows.

## 🧪 Test Coverage

### UI Tests

| Area     | Scenarios                                         | Browsers                  |
| -------- | ------------------------------------------------- | ------------------------- |
| Login    | Valid login, locked-out user, invalid credentials | Chromium, Firefox, WebKit |
| Purchase | Complete purchase flow                            | Chromium, Firefox, WebKit |

### API Tests

| Area             | Scenarios                                       |
| ---------------- | ----------------------------------------------- |
| Authentication   | Valid and invalid authentication                |
| Booking          | Create and retrieve booking                     |
| Booking Update   | Update booking and verify changes               |
| Booking Delete   | Delete booking and verify 404                   |
| Negative Testing | Invalid authentication and non-existent booking |

### Test Execution

The current automation suite contains **18 test executions**:

| Test Area |   Test Scenarios | Browser / Execution       |
| --------- | ---------------: | ------------------------- |
| Login     |                3 | Chromium, Firefox, WebKit |
| Purchase  |                1 | Chromium, Firefox, WebKit |
| API       |                6 | Playwright API            |
| **Total** | **10 scenarios** | **18 executions**         |

**Execution Results**

* ✅ 18/18 passing in local execution
* ✅ 18/18 passing in GitHub Actions CI
* ✅ UI tests executed across Chromium, Firefox, and WebKit
* ✅ API tests executed using Playwright `APIRequestContext`


## 🚀 Running the Tests

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Run Complete Test Suite

```bash
npm test
```

### Run Smoke Tests

```bash
npm run test:smoke
```

### Run Regression Tests

```bash
npm run test:regression
```

### Run API Tests

```bash
npm run test:api
```

### Run Tests on a Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View HTML Report

```bash
npx playwright show-report
```

## 🔐 Environment Configuration

Create a local `.env` file using `.env.example` as a template.

Credentials and other environment-specific values are kept outside the source code and are not committed to GitHub.

For CI execution, environment values are supplied through **GitHub Actions Secrets**.

## 🔄 CI/CD

The project uses **GitHub Actions** to automatically execute the Playwright test suite on:

* Push to `main`
* Pull requests targeting `main`

The CI pipeline:

1. Installs Node.js
2. Installs project dependencies
3. Installs Playwright browsers
4. Executes UI and API tests
5. Generates Playwright reports
6. Uploads test reports and failure artifacts

### CI Artifacts

GitHub Actions stores generated artifacts for each workflow run, including:

* Playwright HTML report
* Test results
* Screenshots for failed tests
* Videos for failed tests
* Trace information when retries occur

## 📊 Reporting

Playwright HTML reports are generated after test execution.

When tests fail, the framework can capture:

* Screenshots
* Videos
* Test results
* Trace information on retries

CI reports and test artifacts are available from the corresponding GitHub Actions workflow run.

## 🎯 Project Purpose

This project demonstrates practical experience in building a maintainable **UI + API automation framework using Playwright and TypeScript**, with a focus on reusable architecture, test reliability, reporting, and CI/CD integration.
