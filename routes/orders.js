// import { ObjectId } from "mongodb"
// import express from "express"
// import { getDb } from "../dbConnection.js"

// const router = express.Router()

// const currentDate = new Date()

// router.get("/:id", (req, res) => {
//   const id = req.params.id
//   const db = getDb()
//   db.collection("orders").findOne({ _id: ObjectId(id) }, (err, orders_doc) => {
//     if (err) {
//       res.status(501).send(err)
//     } else {
//       res.send(orders_doc)
//     }
//   })
// })

// router.get("/", (req, res) => {
//   const db = getDb()
//   db.collection("orders")
//     .find({})
//     .toArray((err, orders) => {
//       if (err) {
//         res.status(501).send(err)
//       } else {
//         res.send(orders)
//       }
//     })
// })

// router.post("/", (req, res) => {
//   const { userId, productId } = req.body
//   const db = getDb()
//   db.collection("orders").insertOne(
//     { userId, productId, currentDate },
//     (err, obj) => {
//       if (err) {
//         res.status(501).send(err)
//       } else {
//         res.status(201).send(`succeful insert of object ${obj.insertedId}`)
//       }
//     }
//   )
// })

// router.delete("/:id", (req, res) => {
//   const id = req.params.id
//   const db = getDb()
//   db.collection("orders").deleteOne({ _id: ObjectId(id) }, (err, obj) => {
//     if (err) {
//       res.status(501).send(err)
//     } else {
//       res.send(`successful deletion of ${obj.deletedCount} documents`)
//     }
//   })
// })

// export { router }
