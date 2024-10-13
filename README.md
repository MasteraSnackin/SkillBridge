## Decentralized Freelance Marketplace
This project is a decentralized platform built on the Stellar blockchain that enables clients and freelancers to engage in trustless freelance contracts. It offers escrowed payments, dispute resolution, and automated smart contract functionality, ensuring secure transactions without intermediaries.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Features
1. Escrowed Payments
Secure Payments: Funds from the client are locked into an escrow smart contract until the work is completed.
Automated Release: Upon completion of milestones or the entire job, the payment is automatically released to the freelancer if conditions are met.
2. Dispute Resolution
On-Chain Mediation: If there is a disagreement, a third-party mediator or automated process can resolve disputes through the smart contract.
Funds Recovery: Depending on the resolution, funds are either released to the freelancer or refunded to the client.
3. Blockchain-Powered
Stellar Blockchain: All transactions and escrows are managed on Stellar’s decentralized network.
Soroban SDK: The contract is implemented using the Soroban SDK, which simplifies building decentralized applications on Stellar.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Technology Stack
Smart Contract Language: Rust
Blockchain: Stellar
Frontend: React
Wallet Integration: Stellar Freighter API
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Structure
The project is divided into two major components:
Backend: A Rust-based smart contract that handles the core logic of the freelance marketplace.
Directory: src/
Main file: lib.rs
Contract Features:
Escrow creation and payment release.
Job cancellation and refunding.
Dispute resolution.
Frontend: A React-based user interface that interacts with the smart contract deployed on Stellar.
Directory: frontend/
Main file: index.html and src/index.js
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Features:
Connect client and freelancer wallets.
Submit contract details to the blockchain.
Display contract status and initiate payments or dispute resolution.
Smart Contract Functionality (Detailed)
1. initialize()
Parameters: client (Address), freelancer (Address), amount (Int64), deadline (u64)
Description:
Initializes a new job contract between the client and freelancer.
Escrows the amount in the contract and sets a deadline for job completion.
Contract State: Stores the client’s and freelancer’s addresses, the escrowed amount, and the job deadline.
2. release_payment()
Parameters: env (Env)
Description:
Checks if the current time is within the deadline and releases the payment to the freelancer.
If the deadline has passed, the contract does not release funds.
3. resolve_dispute()
Parameters: decision (bool)
Description:
Resolves disputes. If the decision is true, the funds are transferred to the freelancer. If false, the client is refunded.
Designed to be called by a trusted mediator or smart contract logic based on preset rules.
Getting Started
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Prerequisites
- Node.js & npm: Ensure that Node.js and npm are installed for managing frontend dependencies. You can install them here.
- Rust: The backend is written in Rust. Install Rust from here.
- Stellar Account: You need a Stellar account for deploying the contract and making transactions. You can create one using the Stellar Account Viewer.
- Freighter Wallet: The frontend requires Stellar’s Freighter Wallet for blockchain transactions. Install the browser extension from here.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
## Installation
Backend (Rust)
Navigate to the src directory:
bash
Copy code
```bash
cd src/
```

Build the contract:

bash
Copy code
```bash
cargo build --release
```

Run Tests (optional):
bash
Copy code
```bash
cargo test
```

Frontend (React)
Navigate to the frontend directory:
bash
Copy code
```bash
cd frontend/
```

Install frontend dependencies:
bash
Copy code
```bash
npm install
```

Start the development server:
bash
Copy code
```bash
npm start
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Contract Deployment
Compile the Contract: Ensure the Rust contract is compiled using cargo build.
Deploy to Stellar:
Use the Stellar Soroban CLI to deploy the contract to a Stellar node.
Example command:
bash
Copy code
```bash
soroban contract deploy --wasm-path path_to_your_wasm_file --network your_stellar_network
```

Set Up the Contract: After deploying, invoke the initialize() function to set up a job contract between the client and freelancer:
bash
Copy code
```bash
soroban contract invoke --id contract_id --fn initialize --client client_address --freelancer freelancer_address --amount 100 --deadline timestamp
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Frontend Interaction
Once the backend contract is deployed, the frontend allows users to interact with the marketplace:
Connect Wallet: Use Stellar’s Freighter wallet to sign in as a client or freelancer.
Create a Job Contract: Clients can create job contracts by submitting details like freelancer address, amount, and deadline through the frontend UI.
Release Payment: Once the work is completed, the client can release the payment to the freelancer using the Release Payment button.
Resolve Dispute: If a dispute occurs, either party can initiate the dispute resolution process.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Example Workflow
Client and freelancer agree on terms: The client creates a job, locking funds in the smart contract.
Freelancer completes the job: The freelancer submits the completed work.
Client releases payment: If satisfied, the client releases the payment from the escrow.
Dispute resolution (if necessary): If there’s a dispute, it is resolved via the smart contract’s resolve_dispute function.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Known Limitations
Token Transfers: The current implementation assumes a token transfer mechanism is in place (e.g., Stellar's native token or another asset). Ensure your Stellar network is set up to handle the relevant tokens.
Mediation Logic: Dispute mediation can be automated or manual. This implementation assumes manual mediation via a resolve_dispute() function call.
## Roadmap
Token Integration: Add functionality for token transfers between users.
Automated Dispute Mediation: Implement smart contract-based rules for automated mediation.
Multisig Escrow: Add support for multisignature contracts to enhance security.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project File Structure

```bash
decentralized_freelance_marketplace/
│
├── src/                              # Backend smart contract code (Rust)
│   └── lib.rs                        # Main contract logic written in Rust
│
├── frontend/                         # Frontend code (React)
│   ├── src/                          # React source code
│   │   ├── App.js                    # Main React app component
│   │   ├── index.js                  # React app entry point
│   │   └── components/               # Reusable React components
│   │       ├── ConnectWallet.js      # Wallet connection component
│   │       ├── CreateJob.js          # Component to create a freelance job
│   │       └── JobDetails.js         # Component to view job details
│   │
│   ├── package.json                  # Frontend dependencies and scripts
│   ├── index.html                    # HTML template for the React app
│   └── public/                       # Public assets (e.g., images, icons)
│
├── Cargo.toml                        # Rust project manifest file (dependencies, metadata)
│
└── README.md                         # Project documentation
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Breakdown:
src/ (Backend):
lib.rs: The Rust-based smart contract using the Soroban SDK. This file contains all the core logic for managing freelance job contracts, escrowed payments, and dispute resolution.

frontend/ (Frontend):
src/: The React app's source code. It includes:
App.js: The main application component that ties everything together.
index.js: The entry point of the React application.

components/: A folder holding reusable components for specific functionalities:
ConnectWallet.js: Handles wallet connection through Stellar's Freighter API.
CreateJob.js: Provides the UI for clients to create a freelance job contract.
JobDetails.js: Displays the details of the job contract, including actions like releasing payment or resolving disputes.

package.json: Contains metadata about the frontend project and its dependencies (React, Stellar API, etc.), along with scripts to run and build the app.
index.html: The HTML template used by React to inject components.
public/: Holds public assets like images, icons, and static files required by the frontend.
Cargo.toml: This is the Rust project’s manifest file, specifying the project dependencies, build scripts, and metadata required to build the smart contract.
README.md: The documentation file that describes the project, installation steps, usage, and other details.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## License

This project is licensed under the MIT License.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Acknowledgments 
- **Soroswap:** DEX
    - https://github.com/soroswap
    - https://soroswap.finance/
- **Aquarius:** Liquidity Management
    - https://aqua.network/
    - https://github.com/AquaToken
- **Phoenix: DEX**
    - https://www.phoenix-hub.io/
    - https://github.com/Phoenix-Protocol-Group
- **Blend: Lending**
    - https://docs.blend.capital/
    - https://github.com/blend-capital

**Starlight:  dApp Discovery tool**

- https://stellarlight.xyz/ecosystem
- Allows you to search and filter dApps by category such as "Lending & Borrowing"


