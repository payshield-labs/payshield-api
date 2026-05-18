# payshield-api

NestJS backend service for PayShield — handles job orchestration, escrow state management, and Stellar network integration.

---

## Overview

`payshield-api` is the backend layer of the PayShield protocol. It acts as the bridge between the PayShield frontend, the Soroban smart contracts, and the Stellar network.

It exposes a clean REST API that allows clients and gig workers to create jobs, track escrow status, and receive real-time payment notifications — all backed by on-chain Soroban contract calls.

---

## Responsibilities

- Job creation and lifecycle management
- Soroban contract interaction (deploy, invoke, read state)
- Stellar account and transaction handling
- Webhook and event notification system
- Authentication via Stellar wallet signatures

---

## System Architecture

```
payshield-app (Frontend)
        ↓
payshield-api (This service)
        ↓              ↓
Stellar Network    PostgreSQL DB
(Soroban RPC)     (Job state cache)
```

---

## Project Structure

```
payshield-api/
├── src/
│   ├── escrow/
│   │   ├── escrow.controller.ts    # REST endpoints for escrow actions
│   │   ├── escrow.service.ts       # Business logic and contract calls
│   │   └── escrow.module.ts        # NestJS module definition
│   ├── stellar/
│   │   ├── stellar.service.ts      # Stellar SDK integration layer
│   │   └── stellar.module.ts
│   ├── jobs/
│   │   ├── jobs.controller.ts      # Job CRUD endpoints
│   │   ├── jobs.service.ts         # Job state management
│   │   └── jobs.module.ts
│   ├── auth/
│   │   ├── auth.controller.ts      # Wallet-based auth endpoints
│   │   ├── auth.service.ts         # Signature verification logic
│   │   └── auth.module.ts
│   └── main.ts                     # Application entry point
├── .env.example
├── package.json
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| `POST` | `/escrow/create` | Create a new escrow job | 🔲 Open for contribution |
| `POST` | `/escrow/release/:id` | Release payment to worker | 🔲 Open for contribution |
| `POST` | `/escrow/cancel/:id` | Cancel escrow and refund client | 🔲 Open for contribution |
| `GET` | `/escrow/:id` | Get current escrow state | 🔲 Open for contribution |
| `POST` | `/jobs` | Create a new job listing | 🔲 Open for contribution |
| `GET` | `/jobs` | List all open jobs | 🔲 Open for contribution |
| `GET` | `/jobs/:id` | Get job details | 🔲 Open for contribution |
| `POST` | `/auth/verify` | Verify Stellar wallet signature | 🔲 Open for contribution |

---

## Tech Stack

- **NestJS** — Backend framework
- **TypeScript** — Primary language
- **Stellar SDK** (`@stellar/stellar-sdk`) — Stellar and Soroban integration
- **PostgreSQL** — Job state persistence
- **Prisma** — ORM and database migrations
- **Jest** — Testing framework

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- PostgreSQL database
- A Stellar testnet account — generate one at [laboratory.stellar.org](https://laboratory.stellar.org)

### Installation

```bash
# Clone the repository
git clone https://github.com/payshield-labs/payshield-api.git
cd payshield-api

# Install dependencies
npm install

# Copy environment variable template
cp .env.example .env
```

### Configuration

Open your `.env` file and fill in your values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/payshield
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=https://soroban-testnet.stellar.org
ESCROW_CONTRACT_ID=your_deployed_contract_id_here
SERVER_SECRET=your_stellar_secret_key_here
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### Running the Server

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

### Running Tests

```bash
npm run test
npm run test:e2e
```

---

## Current Status

| Module | Status |
|---|---|
| Project scaffolding | ✅ Done |
| Escrow controller & service | 🔲 Open for contribution |
| Stellar SDK integration | 🔲 Open for contribution |
| Job management module | 🔲 Open for contribution |
| Wallet auth module | 🔲 Open for contribution |
| Database schema (Prisma) | 🔲 Open for contribution |
| Test coverage | 🔲 Open for contribution |

---

## Contributing

We welcome contributors at all experience levels. Browse the [Issues](https://github.com/payshield-labs/payshield-api/issues) tab to find tasks that match your skill level.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Implement your changes with clear, commented code
4. Write or update tests where applicable
5. Open a Pull Request with a clear description of what you built

All PRs are reviewed within 48 hours.

---

## Related Repositories

| Repo | Description |
|---|---|
| [payshield-contracts](https://github.com/payshield-labs/payshield-contracts) | Soroban smart contracts — core escrow logic in Rust |
| [payshield-app](https://github.com/payshield-labs/payshield-app) | Next.js frontend — wallet connection and job dashboard |

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

> Built with ❤️ by [PayShield Labs](https://github.com/payshield-labs) — making gig work trustless, global, and fair.
