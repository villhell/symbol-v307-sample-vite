import { useState } from 'react';
import './App.css';
import symbolSdk from 'symbol-sdk';
import axios from 'axios';

const sendClick = async () => {
  const facade = new symbolSdk.facade.SymbolFacade('testnet');
  const transaction = facade.transactionFactory.create({
    type: 'transfer_transaction_v1',
    signerPublicKey: import.meta.env.VITE_PUBLIC_KEY,
    fee: 1000000n,
    deadline: BigInt(Date.now()) - 1667250467n * 1000n + 7200000n,
    recipientAddress: import.meta.env.VITE_RECIPIENT_ADDRESS,
    mosaics: [{ mosaicId: 0x72c0212e67a08bcen, amount: 1000000n }],
  });
  const privateKey = new symbolSdk.PrivateKey(import.meta.env.VITE_PRIVATE_KEY);
  const signature = facade.signTransaction(
    new facade.constructor.KeyPair(privateKey),
    transaction
  );
  const jsonPayload = facade.transactionFactory.constructor.attachSignature(
    transaction,
    signature
  );
  console.log(jsonPayload);

  const hash = facade.hashTransaction(transaction).toString();
  console.log(hash);

  const header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const putRes = await axios.put(
    `${import.meta.env.VITE_NODE}/transaction`,
    jsonPayload,
    {
      headers: header,
    }
  );
  console.log(putRes.data);

  const statusRes = await axios.get(
    `${import.meta.env.VITE_NODE}/transactionStatus/${hash}`,
    {
      headers: header,
    }
  );
  console.log(statusRes.data);
};
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={sendClick}>Send</button>
      </div>
    </>
  );
}

export default App;
