## Offers a decentralised marketplace to help freelancers and clients solve trust, payment delays, and fees with Stellar blockchain and smart contract automation.


Skillbridge is a decentralized freelance marketplace leveraging the Stellar blockchain and Soroban smart contracts to solve key issues in the part-time labor market, such as trust, delayed payments, and high transaction fees. It enables freelancers and clients to interact in a trustless environment where payments are automated and secured by smart contracts.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Image A[Overview](https://1drv.ms/i/s!At64SwKetw4ik8hYvVKHXdYtcSOhxA?e=JHeuLE)
Image B[Condition](https://1drv.ms/i/s!At64SwKetw4ik8hW39siTSy-rE6VQg?e=7R1Iye)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
Video [Proof of Works](https://youtu.be/c2s0h9VR4OQ)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Decentralized Freelance Marketplace
This project is a decentralized platform built on the Stellar blockchain that enables clients and freelancers to engage in trustless freelance contracts. It offers escrowed payments, dispute resolution, and automated smart contract functionality, ensuring secure transactions without intermediaries.
Features

1. Escrowed Payments
Secure Payments: Funds from the client are locked into an escrow smart contract until the work is completed.
Automated Release: Upon completion of milestones or the entire job, the payment is automatically released to the freelancer if conditions are met.

3. Dispute Resolution
On-Chain Mediation: If there is a disagreement, a third-party mediator or automated process can resolve disputes through the smart contract.
Funds Recovery: Depending on the resolution, funds are either released to the freelancer or refunded to the client.

5. Blockchain-Powered
Stellar Blockchain: All transactions and escrows are managed on Stellar’s decentralized network.
Soroban SDK: The contract is implemented using the Soroban SDK, which simplifies building decentralized applications on Stellar.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Smart Contract Features: Soroban will manage:

- Escrow: Payments from clients are locked in a Stellar-based escrow and are only released once the task is completed and approved.
- Milestone-based payments: Partial payments are automatically released upon completion of agreed milestones.
- Dispute Resolution: Handling via on-chain mediation and governance models.
- Soroban SDK and CLI: Use the Soroban SDK to write and test smart contracts. We will also need the Soroban CLI for building and deploying the contracts on Stellar’s test network.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Freelancer Marketplace Workflow:

- Job Posting: Clients post jobs with defined milestones.
- Bidding: Freelancers submit bids, and the client selects the winning bid.
- Escrow Payment: Payment is locked into the smart contract at the beginning.
- Payment Release: When milestones are approved, payments are released automatically.
- Freighter Wallet Integration: Freighter wallet integration is necessary to allow users to sign transactions. It will enable users to interact with the platform via their wallet for tasks like deposits and withdrawals.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Instructions for Running the Project Locally
Prerequisites:
Rust: Make sure you have Rust installed on your machine. You can install it using:

bash
Copy code
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
Soroban CLI: Install the Soroban CLI to build and deploy smart contracts.
```
bash
Copy code
```bash
cargo install --locked --version 0.9.4 soroban-cli
Node.js and npm: Ensure that you have Node.js and npm installed. You can check this by running:
```
bash
Copy code
```bash
node -v
npm -v
```
If Node.js is not installed, you can install it from here.

Freighter Wallet: Install the Freighter Wallet extension in your browser from here.

Steps for Running the Backend (Rust Smart Contract)
Navigate to the project directory where the Rust backend resides:

bash
Copy code
```bash
cd decentralized_freelance_marketplace
Build the smart contract using the Soroban CLI:
```
bash
Copy code
soroban contract build
Deploy the smart contract on Stellar's Futurenet (test network). This will require a funded account for the source address.

bash
Copy code
```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/decentralized_freelance_marketplace.wasm \
  --source token-admin \
  --network FUTURENET
```
Steps for Running the Frontend (React Application)
Navigate to the frontend directory:

bash
Copy code
```bash
cd frontend
Install dependencies for the React application:
```
bash
Copy code
```bash
npm install
Start the React frontend:
```
bash
Copy code
```bash
npm start
```
Open your browser and navigate to:

arduino
Copy code
```bash
http://localhost:3000
```
You should be able to connect your Freighter wallet and interact with the smart contract from the frontend.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
##Steps for Deployment and Running:
Backend Setup (Rust & Soroban)

Build the smart contract:
bash
Copy code
```bash
soroban contract build
```
Deploy the smart contract to the testnet:
bash
Copy code
```bash
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/your_contract.wasm --network FUTURENET
```
Frontend Setup (React)

Install dependencies and run the React frontend:
bash
Copy code
```bash
cd frontend
npm install
npm start
```
Connect Freighter Wallet

Users can connect their Freighter wallet through the React frontend to sign transactions and interact with the Soroban smart contract.
Final Notes
Ensure you have Freighter Wallet installed to test the transaction flow.
The smart contract handles basic escrow, milestone payments, and dispute resolution.
You can extend the project by adding more robust payment handling, milestone tracking, and governance models for dispute resolution.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project Structure
bash
```bash
decentralized_freelance_marketplace/
│
├── src/
│   ├── lib.rs                 # Main smart contract code
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ConnectWallet.js   # Freighter integration component (React)
│   │   └── App.js                 # Main React frontend file
│   ├── package.json           # React frontend dependencies
│   └── index.html             # Basic HTML to load the React app
│
├── Cargo.toml                 # Rust project configuration
└── README.md                  # Documentation for the project
```

Image 1[File Structure](https://1drv.ms/i/s!At64SwKetw4ik8hZtWqQEODpYx6k7Q?e=aBxgZx)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contributors
- [Umair Ismati](https://github.com/Rappid-exe)
- [Anis Bentahar](https://github.com/anistayebM)
- [Freya Wu](https://github.com/YanniWu88)

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## License

This project is licensed under the MIT License.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
UPDATE Need to rebuild the frontend and change storage type to Persistent data storage

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


