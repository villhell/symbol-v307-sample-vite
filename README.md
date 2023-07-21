# symbol-v307-sample-vite
まだ動作しません。

動かしてみたい場合はルートディレクトリに.envファイルを作成してください。
必要な環境変数を設定してください。<br />
↓
``` cmd
VITE_PRIVATE_KEY=YOUR_PRIVATE_KEY
VITE_PUBLIC_KEY=YOUR_PUBLIC_KEY
VITE_RECIPIENT_ADDRESS=RECIPIENT_ADDRESS
VITE_TESTNET_NODE=NODE_URL
```

## 動作しない状況
App.jsxでトランザクションを作成しようとするとエラーになる。
``` javascript
const transaction = facade.transactionFactory.create({
    type: 'transfer_transaction_v1',
    signerPublicKey: import.meta.env.VITE_PUBLIC_KEY,
    fee: 1000000n,
    deadline: BigInt(Date.now()) - 1667250467n * 1000n + 7200000n,
    recipientAddress: import.meta.env.VITE_RECIPIENT_ADDRESS,
    mosaics: [{ mosaicId: 0x72c0212e67a08bcen, amount: 1000000n }],
  });
```

## エラーの内容
![image](https://github.com/villhell/symbol-v307-sample-vite/assets/6645392/74765b5d-0939-4ebe-b572-96ab00a9d8ea)

```
Uncaught TypeError: module2[value.constructor.name] is not a constructor
    at typeConverterFactory (RuleBasedTransactionFactory.js:43:10)
    at RuleBasedTransactionFactory.typeConverter (RuleBasedTransactionFactory.js:68:33)
    at TransactionDescriptorProcessor.lookupValue (TransactionDescriptorProcessor.js:39:11)
    at TransactionDescriptorProcessor.js:58:23
    at Array.forEach (<anonymous>)
    at TransactionDescriptorProcessor.copyTo (TransactionDescriptorProcessor.js:48:58)
    at RuleBasedTransactionFactory.createFromFactory (RuleBasedTransactionFactory.js:185:13)
    at _TransactionFactory._createAndExtend (TransactionFactory.js:23:36)
    at _TransactionFactory.create (TransactionFactory.js:51:15)
    at sendClick (App.jsx:7:49)
typeConverterFactory @ RuleBasedTransactionFactory.js:43
RuleBasedTransactionFactory.typeConverter @ RuleBasedTransactionFactory.js:68
lookupValue @ TransactionDescriptorProcessor.js:39
(anonymous) @ TransactionDescriptorProcessor.js:58
copyTo @ TransactionDescriptorProcessor.js:48
createFromFactory @ RuleBasedTransactionFactory.js:185
_createAndExtend @ TransactionFactory.js:23
create @ TransactionFactory.js:51
sendClick @ App.jsx:7
callCallback2 @ react-dom.development.js:4164
invokeGuardedCallbackDev @ react-dom.development.js:4213
invokeGuardedCallback @ react-dom.development.js:4277
invokeGuardedCallbackAndCatchFirstError @ react-dom.development.js:4291
executeDispatch @ react-dom.development.js:9041
processDispatchQueueItemsInOrder @ react-dom.development.js:9073
processDispatchQueue @ react-dom.development.js:9086
dispatchEventsForPlugins @ react-dom.development.js:9097
(anonymous) @ react-dom.development.js:9288
batchedUpdates$1 @ react-dom.development.js:26140
batchedUpdates @ react-dom.development.js:3991
dispatchEventForPluginEventSystem @ react-dom.development.js:9287
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ react-dom.development.js:6465
dispatchEvent @ react-dom.development.js:6457
dispatchDiscreteEvent @ react-dom.development.js:6430
Show 23 more frames
react-dom.development.js:4312 Uncaught TypeError: module2[value.constructor.name] is not a constructor
    at typeConverterFactory (RuleBasedTransactionFactory.js:43:10)
    at RuleBasedTransactionFactory.typeConverter (RuleBasedTransactionFactory.js:68:33)
    at TransactionDescriptorProcessor.lookupValue (TransactionDescriptorProcessor.js:39:11)
    at TransactionDescriptorProcessor.js:58:23
    at Array.forEach (<anonymous>)
    at TransactionDescriptorProcessor.copyTo (TransactionDescriptorProcessor.js:48:58)
    at RuleBasedTransactionFactory.createFromFactory (RuleBasedTransactionFactory.js:185:13)
    at _TransactionFactory._createAndExtend (TransactionFactory.js:23:36)
    at _TransactionFactory.create (TransactionFactory.js:51:15)
    at sendClick (App.jsx:7:49)
```
