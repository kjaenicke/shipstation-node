# shipstation-node
Unofficial Shipstation API Wrapper for Node.js


This project is currently a work in progress and contributors are welcome! 👋


## Usage
- Set the following env variables for our Shipstation account:
  - SS_API_KEY (your Shipstation API Key)
  - SS_API_SECRET (your Shipstation API secret)

```js
import shipstation from 'shipstation-node';

// Get all orders
const orders = await shipstation.orders.getAll()

// Get order by id
const order = await shipstation.orders.get(1244)
```