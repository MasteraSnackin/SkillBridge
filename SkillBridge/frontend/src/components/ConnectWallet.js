
import React, { useState } from 'react';
import { isConnected, getPublicKey } from "@stellar/freighter-api";

const ConnectWallet = ({ onConnect }) => {
  const [publicKey, setPublicKey] = useState(null);

  const handleConnectWallet = async () => {
    if (await isConnected()) {
      const key = await getPublicKey();
      setPublicKey(key);
      onConnect(key);
    } else {
      alert("Please install Freighter wallet to connect.");
    }
  };

  return (
    <div>
      {!publicKey ? (
        <button onClick={handleConnectWallet}>
          Connect Freighter Wallet
        </button>
      ) : (
        <div>Connected as: {publicKey}</div>
      )}
    </div>
  );
};

export default ConnectWallet;
