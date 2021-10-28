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

//App Get specific products by ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  db.collection('products').findOne(
    { _id: ObjectId(id) },
    (err, products_doc) => {
      if (err) {
        res.send(err);
      } else {
        res.send(products_doc);
      }
    }
  );
});

//App Get ALL products
router.get('/', (req, res) => {
    db.collection('products')
      .find({})
      .toArray((err, products) => {
        if (err) {
          console.error('error GET /products', err);
          res.send(err);
        } else {
          res.send(products);
        }
      });
  });

//App Delete Products by ID
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    db.collection('products').deleteOne({ _id: ObjectId(id) }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`successful deletion of ${obj.deletedCount} documents`);
      }
    });
  });

  //App Post A Product
router.post('/', (req, res) => {
    const { name, cost, amount } = req.body;
    db.collection('products').insertOne({ name, cost, amount }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`succeful insert of object ${obj.insertedId}`);
      }
    });
  });
})


module.exports = router