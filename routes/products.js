import { ObjectId } from "mongodb"
import express from "express"
import { getDB } from "../drivers/webdriver.js"

const router = express.Router()

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const db = await getDB()

  try {
    const product = await db.products.getOne({ _id: ObjectId(id) })
    res.send(product)
  } catch (err) {
    console.error("ERROR: ", err)
    res.status(501).send(err)
  }
})

router.get("/", async (req, res) => {
  const db = await getDB()
  try {
    const products = await db.products.getAll()
    res.send(products)
  } catch (err) {
    console.error("Error GET /products", err)
    res.status(501).send(err)
  }
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id
  const db = await getDB()
  try {
    const response = await db.products.deleteOne({ _id: ObjectId(id) })
    console.log("deleted one")
    res.send("deleted one")
  } catch (err) {
    console.error(err)
    res.status(501).send(err)
  }
})

router.post("/", async (req, res) => {
  const { name, cost, amount } = req.body
  const db = await getDB()

  try {
    const response = await db.products.createOne({ name, cost, amount })
    console.log(`succeful insert of product ${response}`)
    res.status(201).send(response.insertedId)
  } catch (err) {
    console.error(err)
    res.status(501).send(err)
  }
})

export { router }
