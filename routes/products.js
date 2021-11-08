// import { ObjectId } from "mongodb"
// import express from "express"
// import { getDb } from "../dbConnection.js"

// const router = express.Router()

// router.get("/:id", (req, res) => {
//   const id = req.params.id
//   const db = getDb()
//   db.collection("products").findOne(
//     { _id: ObjectId(id) },
//     (err, products_doc) => {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(products_doc)
//       }
//     }
//   )
// })

// router.get("/", (req, res) => {
//   const db = getDb()
//   db.collection("products")
//     .find({})
//     .toArray((err, products) => {
//       if (err) {
//         console.error("error GET /products", err)
//         res.send(err)
//       } else {
//         res.send(products)
//       }
//     })
// })

// router.delete("/:id", (req, res) => {
//   const db = getDb()
//   db.collection("products").deleteOne({ _id: ObjectId(id) }, (err, obj) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(`successful deletion of ${obj.deletedCount} documents`)
//     }
//   })
// })

// router.post("/", (req, res) => {
//   const { name, cost, amount } = req.body
//   const db = getDb()
//   db.collection("products").insertOne({ name, cost, amount }, (err, obj) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(`succeful insert of object ${obj.insertedId}`)
//     }
//   })
// })

// export { router }
