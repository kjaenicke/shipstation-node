# shipstation-node
Unofficial Shipstation API Wrapper for Node.js


This project is currently a work in progress and contributors are welcome! 👋


## Usage
- Set the following env variables for our Shipstation account:
  - SS_API_KEY (your Shipstation API Key)
  - SS_API_SECRET (your Shipstation API secret)

```js
import ShipStation from 'shipstation-node'

// Create instance
const shipstation = new ShipStation()

// Get all orders
const orders = await shipstation.orders.getAll()

// Get order by id
const order = await shipstation.orders.get(1244)
```

- Optionally, set Shipstation credentials through the options:
  - apiKey (your Shipstation API Key)
  - apiSecret (your Shipstation API secret)

```js
const shipstation = new ShipStation({
  apiKey: '<key>',
  apiSecret: '<secret>'
})
```

- Optionally, Retry Shipstation API failures via:
    - Set retry `true` to enable default options
    - OR provide an object with any options supported by [axios-retry](https://www.npmjs.com/package/axios-retry)

```js
const shipstation = new ShipStation({
    // default retry config
    retry: true,

    // OR custom 
    retry: { retries: 3 }
})
```