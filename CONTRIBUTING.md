# Contributing to PayShield API

Thanks for your interest in contributing to `payshield-api`! This repo is the NestJS backend for the PayShield protocol, handling escrow lifecycle, job state, authentication, and Stellar/Soroban integration.

## Project overview

The service is organized as NestJS modules:

- `src/auth` — wallet-based authentication and signature verification
- `src/escrow` — escrow controller and business logic
- `src/jobs` — job creation, retrieval, and status handling
- `src/stellar` — Stellar SDK integration and network communication
- `src/app.module.ts` — root module that wires the application together

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/payshield-labs/payshield-api.git
   cd payshield-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment template:

   ```bash
   copy .env.example .env
   ```

4. Update `.env` with your local values.

## Recommended scripts

- `npm run start:dev` — start in watch mode
- `npm run build` — build the project
- `npm run lint` — run ESLint and auto-fix issues
- `npm run test` — run unit tests
- `npm run test:e2e` — run end-to-end tests
- `npm run format` — format source files with Prettier

## Code style

- The repo uses TypeScript and NestJS conventions.
- Keep module code focused and organized by feature.
- Prefer `camelCase` for variables and `PascalCase` for classes.
- Keep controllers thin and delegate business logic to services.
- Use DTOs, validation, and type-safe interfaces when adding new endpoints.

## How to contribute

1. Fork the repository.
2. Create a descriptive branch name, for example:
   - `feature/add-escrow-status-endpoint`
   - `fix/auth-signature-validation`
3. Make your changes.
4. Run lint and tests locally.
5. Commit with a clear message.
6. Submit a pull request with a concise description of the change.

## Workflow

This repository is intended for open source collaboration and uses a clear CI-driven workflow.

1. Browse open issues or open a new issue if your work is not already tracked.
2. Request feedback on the issue when the scope is unclear or when you need a design decision.
3. Create a descriptive feature branch from `main` or `master`:
   - `feature/<short-description>`
   - `fix/<short-description>`
   - `chore/<short-description>`
4. Implement your change in a single branch to keep PRs focused.
5. Keep changes small, with one main goal per pull request.
6. Run local validation before pushing:
   - `npm run lint`
   - `npm run test`
   - `npm run format`
7. Push the branch and open a pull request against `main` or `master`.
8. Add a clear PR description with:
   - what you changed
   - why it was needed
   - any new environment variables or config updates
   - tests added or updated
9. The CI pipeline will run on every push and pull request.
10. Address review comments, update the branch, and re-run the checks as needed.
11. Once approved, the PR may be merged by a maintainer.

## CI and validation

A GitHub Actions workflow runs on `push` and `pull_request` events for `main` and `master`. It:

- checks out the repository
- installs Node.js dependencies
- runs linting
- builds the application
- executes unit tests
- verifies formatting and type-safe compilation

This ensures that all open source contributions are validated before merge.

## What to look for

Useful contribution areas include:

- Completing missing or partially implemented API endpoints
- Improving Stellar/Soroban contract integration
- Adding Prisma database models, migrations, and persistence
- Adding or improving tests for controllers and services
- Enhancing authentication, validation, or error handling
- Updating documentation and README content

## Branch and PR expectations

- Keep PRs small and focused.
- Include tests for new features or bug fixes.
- Document any new environment variables or config changes.
- Mention relevant modules and files in the PR description.

## Environment notes

The repo uses a `.env` file for runtime configuration. Example values are provided in `.env.example`.

Key env variables:

- `DATABASE_URL` — PostgreSQL connection string
- `STELLAR_NETWORK` — Stellar network name (`testnet` or `public`)
- `STELLAR_RPC_URL` — Soroban RPC endpoint
- `ESCROW_CONTRACT_ID` — deployed escrow contract ID
- `SERVER_SECRET` — server secret key
- `PORT` — local server port

## Reporting issues

If you find a bug or want to propose an improvement:

1. Create an issue with a clear title.
2. Describe the steps to reproduce.
3. Provide any relevant logs or error messages.
4. If possible, suggest a solution or the expected behavior.

## Need help?

If you are unsure where to start, look at the existing modules and open issue labels. Contributions are welcome at any level.

---

Thanks for helping improve PayShield API!
