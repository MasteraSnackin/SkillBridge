## Decentralized Freelance Marketplace

This is a decentralized freelance marketplace built on the Stellar blockchain, allowing clients and freelancers to engage in escrowed job contracts. The platform handles job payment, escrow, and dispute resolution through smart contracts.

## Features
Escrowed Payment: Funds are securely held in escrow until the work is completed.

Dispute Resolution: Handles disputes with a mediation function to decide if the client or freelancer is entitled to the payment.

Blockchain Integration: Uses the Stellar blockchain and Soroban SDK for decentralized contract execution.

##Technology Stack
Backend: Rust using the Soroban SDK to create a smart contract.
Frontend: React for the user interface, interacting with the Stellar blockchain using Freighter.
Smart Contract Functions

Initialize Job: Set up an escrow between a client and freelancer with a deadline.
Release Payment: Release the payment to the freelancer if the job is completed within the deadline.
Resolve Dispute: Handle disputes by either paying the freelancer or refunding the client.

Getting Started
## Prerequisites
-Install Node.js.
-Install Rust.

Backend
Navigate to the src folder.
Compile the Rust smart contract:
bash
Copy code
cargo build
Frontend
Navigate to the frontend folder.

Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
npm start
Usage
Deploy the Rust contract to a Stellar node.
Use the frontend to create and manage freelance job contracts, including escrowing funds and resolving disputes.

#License
This project is licensed under the MIT License. See the LICENSE file for more details.
