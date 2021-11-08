import { ObjectId } from "mongodb"
import express from "express"
import { getDB } from "../drivers/webdriver.js"


const router = express.Router()

const currentDate = new Date()

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const db = await getDB();
  try { 
    const order = await db.orders.getOne({ _id: ObjectId(id) });
    res.send(order);
   }
  catch (err) {
    console.error('Error getting order; ',err);
    res.status(501).send(err)
  }
})

router.get('/', async (req, res) => {
  const db = await getDB();
  try {
    const orders = await db.orders.getAll();
    res.send(orders);
  } catch (err) {
    console.error('Error GET /orders', err);
    res.status(501).send(err);
  }
});


router.post("/", async (req, res) => {
  const { userId, productId } = req.body
  const db = await getDB()
  try {
      const response = await db.orders.createOne({ userId, productId });
      console.log(`succeful insert of Order ${response}`);
      res.status(201).send(response.insertedId);
    } catch (err) {
      console.error(err);
      res.status(501).send(err);
    }
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id
  const db = await getDB()
  try {
    const response = await db.orders.deleteOne({ _id: ObjectId(id) });
    console.log('deleted one');
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(501).send(err);
  }
})

export { router }
