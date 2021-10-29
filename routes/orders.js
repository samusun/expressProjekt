import { getDb } from '../dbConnection.js';
import express from 'express'
const router = express.Router()

const currentDate = new Date();

router.post('/', (req, res) => {
  const { userId, produktId } = req.body;
  const dbConnection = getDb()
  dbConnection.collection('orders').insertOne(
    { userId, produktId, currentDate },
    (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`succeful insert of object ${obj.insertedId}`);
      }
    }
  );
  })


export { router }