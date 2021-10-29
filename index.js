import express from 'express'
import { connectToDB } from './dbConnection.js'

import { router as usersRoute } from './routes/users.js'
import { router as productsRoute } from './routes/products.js'
import { router as ordersRoute } from './routes/orders.js'

connectToDB()

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoute)
app.use('/products', productsRoute)
app.use('/orders', ordersRoute)


app.listen(port, () => {
  console.log(`Example app listeningz at http://localhost:${port}`);
});

/*
Kommand kod för GET, POST, DELETE, etc

~~~~ANVANDARE COMMAND~~~~
Skicka ny Array till Users:
curl -d '{ "firstName": "Petter", "lastName": "Hej", "adress": "ithogskolan"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Hamta Lista av Users:
curl http://localhost:3000/users

Hamta specifika Users med ID:
curl http://localhost:3000/users/{id}

Tar bort specifika Users med ID:
curl -X DELETE http://localhost:3000/users/{id}


~~~~PRODUKTER COMMAND~~~~
Skicka ny Array till Produkter:
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Hamta Lista av Products:
curl http://localhost:3000/products

Hamta specifika Products med ID:
curl http://localhost:3000/products/{id}

Tar bort specifika Products med ID:
curl -X DELETE http://localhost:3000/products/{id}


Posta Produkter:
curl -d '{ "name": "Dator", "cost": "9000", "amount": "4"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products


ORDER KOMMANDO:

Posta order:
curl -d '{ "userId": "617921aa87e97a3c1f64507d", "produktId": "61793912ec33d736a0e4789d" }' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
*/
