# ExpressProjekt

We build a simple database with MongoDb and send request in Curl.

Get /users
GetOne /users/userId
Post /users
DeleteOne /users/userId

Same for /products

Get /orders
GetUserOrders /orders/userId
GetUserProducts /orders/userId/productId
Post /orders
DeleteOne /orders/orderId

## Post examples

/users

{
"firstName": "John"
"lastName": "Smith"
"address": "1 happy street"
}

/products

{
"name": "Pasta"
"amount": 5
"cost": 4
}

/orders

{
userId: "618cd8ddc09a9319d9435921"
productId: "618cd8ddc09a9319d9435921"
}

## cURL commandos to communicate with database

USER COMMANDs
Create new User:
curl -d '{ "firstName": "Hans", "lastName": "Abdullah", "address": "Sisjön"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Get ALL Users:
curl http://localhost:3000/users

Get SPECIFIC User by ID:
curl http://localhost:3000/users/%7Bid%7D

DELETE SPECIFIC User by ID:
curl -X DELETE http://localhost:3000/users/%7Bid%7D

PRODUCT COMMAND
Create new Product
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Get ALL Products:
curl http://localhost:3000/products

Get SPECIFIC Product by ID:
curl http://localhost:3000/products/%7Bid%7D

DELETE SPECIFIC Product by ID:
curl -X DELETE http://localhost:3000/products/%7Bid%7D

~ORDER COMMAND~

Create new Order (REQIURE EXIST userId AND productId):
curl -d '{ "userId": "617921aa87e97a3c1f64507d", "productId": "61793912ec33d736a0e4789d" }' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
