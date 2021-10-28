const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const dbName = 'dataShop';
const url = `mongodb://localhost:27017/${dbName}`;


MongoClient.connect(url, function (err, database) {
  if (err) {
    console.error('Connection error', err);
  }
  const db = database.db(dbName);


router.get('/', (req, res) => {
  db.collection('users')
    .find({})
    .toArray((err, students) => {
      if (err) {
        console.error('error GET /users', err);
        res.send(err);
      } else {
        res.send(students);
      }
    });
});

router.post('/', (req, res) => {
    const { firstName, lastName, adress } = req.body;
    db.collection('users').insertOne(
      { firstName, lastName, adress },
      (err, obj) => {
        if (err) {
          res.send(err);
        } else {
          res.send(`succeful insert of object ${obj.insertedId}`);
        }
      }
    );
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    db.collection('users').deleteOne({ _id: ObjectId(id) }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`successful deletion of ${obj.deletedCount} documents`)
      }
    })
  })
})

  module.exports = router