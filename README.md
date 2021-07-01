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

- Optionaly, provide Shipstation credentials through the options
  - apiKey (your Shipstation API Key)
  - apiSecret (your Shipstation API secret)

```js
const shipstation = new ShipStation({
  apiKey: '0000000000000000aaaaaaaaaaaaaaaa',
  apiSecret: '9999999999999999zzzzzzzzzzzzzzzz'
})
```

