import { getDb } from '../dbConnection.js';
import express from 'express'
const router = express.Router()

const currentDate = new Date();

router.post('/', (req, res) => {
  const { userId, productId } = req.body;
  const dbConnection = getDb()
  dbConnection.collection('orders').insertOne(
    { userId, productId, currentDate },
    (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`successful insert of Order ${obj.insertedId}`);
      }
    }
  );
  })


export { router }