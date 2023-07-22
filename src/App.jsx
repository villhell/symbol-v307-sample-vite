import { useState } from "react";
import { Configuration, TransactionRoutesApi } from "rest";
import symbolSdk from "symbol-sdk";
import "./App.css";

const sendClick = async () => {
  const facade = new symbolSdk.facade.SymbolFacade("testnet");

  const transaction = facade.transactionFactory.create({
    type: "transfer_transaction_v1",
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
  const payload = JSON.parse(jsonPayload).payload;
  console.log(JSON.parse(jsonPayload));

  const hash = facade.hashTransaction(transaction).toString();
  console.log({ hash });

  const config = new Configuration({ basePath: import.meta.env.VITE_NODE });
  const transactionRoutes = new TransactionRoutesApi(config);

  const announceRes = await transactionRoutes.announceTransaction({
    transactionPayload: { payload },
  });
  console.log({ announced: announceRes.message });

  setTimeout(async () => {
    const statusRes = await transactionRoutes.getConfirmedTransaction({
      transactionId: hash,
    });
    console.log({ status: !!statusRes });
  }, [3000]);
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
