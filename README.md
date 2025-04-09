# shipstation-node

Unofficial ShipStation API Wrapper for Node.js

This project is currently a work in progress and contributors are welcome! 👋

## Usage

- Set the following env variables for our ShipStation account:
  - SHIPSTATION_API_KEY (your ShipStation API Key)
  - SHIPSTATION_API_SECRET (your ShipStation API secret)

```ts
import ShipStation from 'shipstation-node';

// Create instance
const shipstation = new ShipStation();

// Get all orders
const orders = await shipstation.orders.list();

// Get order by id
const order = await shipstation.orders.get(1244);
```

- Optionally, set ShipStation credentials through the options:
  - `apiKey` (your ShipStation API Key)
  - `apiSecret` (your ShipStation API secret)

```ts
const shipstation = new ShipStation({
  apiKey: '<key>',
  apiSecret: '<secret>'
});
```

- Optionally, Retry ShipStation API failures via:
  - Set retry `true` to enable default options
  - OR provide an object with any options supported by [axios-retry](https://www.npmjs.com/package/axios-retry)

```ts
const shipstation = new ShipStation({
  // default retry config
  retry: true,

  // OR custom
  retry: { retries: 3 }
});
```
