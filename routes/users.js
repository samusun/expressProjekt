import { ObjectId } from "mongodb"
import express from "express"
import { getDB } from "../drivers/webdriver.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const db = await getDB()
  try {
    const users = await db.users.getAll()
    res.send(users)
  } catch (err) {
    console.error("Error GET /users", err)
    res.status(501).send(err)
  }
})

// router.get("/:id", (req, res) => {
//   const id = req.params.id
//   const db = getDb()
//   db.collection("users").findOne({ _id: ObjectId(id) }, (err, users_doc) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(users_doc)
//     }
//   })
// })

// router.post("/", (req, res) => {
//   const { firstName, lastName, address } = req.body
//   const db = getDb()
//   db.collection("users").insertOne(
//     { firstName, lastName, address },
//     (err, obj) => {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(`succeful insert of object ${obj.insertedId}`)
//       }
//     }
//   )
// })

// router.delete("/:id", (req, res) => {
//   const id = req.params.id
//   const db = getDb()
//   db.collection("users").deleteOne({ _id: ObjectId(id) }, (err, obj) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(`successful deletion of ${obj.deletedCount} documents`)
//     }
//   })
// })

export { router }
