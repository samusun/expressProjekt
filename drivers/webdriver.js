import express from "express"
import { router as usersRoute } from "../routes/users.js"

// import { router as ordersRoute } from "../routes/orders.js"
// import { router as productsRoute } from "../routes/products.js"

// import { EmptyObjectError } from '../entities/errors.js';
// const SERVER_ERROR = 'Server Error';
// const BAD_REQUEST = 'Bad Request';
let database
const expressDriver = (db) => {
  database = db
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use("/users", usersRoute)
  // app.get("/users", async (req, res) => {
  //   try {
  //     const users = await db.users.getAll()
  //     res.send(users)
  //   } catch (err) {
  //     console.error("Error GET /users", err)
  //     res.status(501).send(err)
  //   }
  // })
  return app
}

function getDB() {
  return database
}

export { expressDriver, getDB }
