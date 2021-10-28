const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')
const ordersRoute = require('./routes/orders')


const dbName = 'dataShop';
const url = `mongodb://localhost:27017/${dbName}`;

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoute)
app.use('/products', productsRoute)
app.use('/orders', ordersRoute)

MongoClient.connect(url, function (err, database) {
  if (err) {
    console.error('Connection error', err);
  }
  const db = database.db(dbName);
  console.log('Connected successfully to server');
})
  


app.listen(port, () => {
  console.log(`Example app listeningz at http://localhost:${port}`);
});

/*
Mall till att posta users:
curl -d '{ "firstName": "Janne", "lastName": "Jan", "adress": "ithogskolan"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Posta Produkter:
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Mall till att se users lista: 
curl http://localhost:3000/users

Mall till att delete:
curl -X DELETE http://localhost:3000/users/{id}
*/
