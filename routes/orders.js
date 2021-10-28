const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const dbName = 'dataShop';
const url = `mongodb://localhost:27017/${dbName}`;


const datum = new Date();

MongoClient.connect(url, function (err, database) {
    if (err) {
      console.error('Connection error', err);
    }
    const db = database.db(dbName);

  router.post('/', (req, res) => {
    const { userId, produktId } = req.body;
    db.collection('orders').insertOne(
      { userId, produktId, datum },
      (err, obj) => {
        if (err) {
          res.send(err);
        } else {
          res.send(`succeful insert of object ${obj.insertedId}`);
        }
      }
    );
  });

})


module.exports = router