import { connectToDB } from "./dbConnection.js"
import express from "express"
import { router as ordersRoute } from "./routes/orders.js"
import { router as productsRoute } from "./routes/products.js"
import { router as usersRoute } from "./routes/users.js"

connectToDB()

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/users", usersRoute)
app.use("/products", productsRoute)
app.use("/orders", ordersRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
Shortcut Command for GET, POST, DELETE, etc

~~~~USER COMMAND~~~~
Create new Array User:
curl -d '{ "firstName": "Hans", "lastName": "Abdullah", "adress": "Sisjön"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Get ALL Users:
curl http://localhost:3000/users

Get SPECIFICE User by ID:
curl http://localhost:3000/users/{id}

DELETE SPECIFICE User by ID:
curl -X DELETE http://localhost:3000/users/{id}


~~~~PRODUCT COMMAND~~~~
Create new Array Product
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Get ALL Products:
curl http://localhost:3000/products

Get SPECIFICE Product by ID:
curl http://localhost:3000/products/{id}

DELETE SPECIFICE Product by ID:
curl -X DELETE http://localhost:3000/products/{id}


~~~~ORDER COMMAND~~~~

Create new Array Order (REQIURE EXIST userId AND productId):
curl -d '{ "userId": "617921aa87e97a3c1f64507d", "productId": "61793912ec33d736a0e4789d" }' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
*/
