# ExpressProjekt

We build a simple database with MongoDb and send request in Curl.

Get /users
GetOne /users/ID
Post /users
DeleteOne /users/ID

Same for /orders and /products

## Kommandon för att prata med databasen

~~~~USER COMMAND~~~~
Create new User:
curl -d '{ "firstName": "Hans", "lastName": "Abdullah", "adress": "Sisjön"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Get ALL Users:
curl http://localhost:3000/users

Get SPECIFIC User by ID:
curl http://localhost:3000/users/{id}

DELETE SPECIFIC User by ID:
curl -X DELETE http://localhost:3000/users/{id}


~~~~PRODUCT COMMAND~~~~
Create new Product
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Get ALL Products:
curl http://localhost:3000/products

Get SPECIFIC Product by ID:
curl http://localhost:3000/products/{id}

DELETE SPECIFIC Product by ID:
curl -X DELETE http://localhost:3000/products/{id}


~~~~ORDER COMMAND~~~~

Create new Order (REQIURE EXIST userId AND productId):
curl -d '{ "userId": "617921aa87e97a3c1f64507d", "productId": "61793912ec33d736a0e4789d" }' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
