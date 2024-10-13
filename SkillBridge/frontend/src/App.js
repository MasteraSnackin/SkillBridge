
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';

function App() {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleWalletConnection = (publicKey) => {
    setWalletConnected(true);
    console.log("Wallet connected:", publicKey);
  };

  return (
    <div className="App">
      <h1>Decentralized Freelance Marketplace</h1>
      <ConnectWallet onConnect={handleWalletConnection} />
      {isWalletConnected ? (
        <div>Wallet Connected! Ready for Transactions.</div>
      ) : (
        <div>Please connect your wallet to proceed.</div>
      )}
    </div>
  );
}

export default App;
