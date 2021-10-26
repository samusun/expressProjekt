const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const dbName = 'dataShop';
const url = `mongodb://localhost:27017/${dbName}`;

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

MongoClient.connect(url, function (err, database) {
  if (err) {
    console.error('Connection error', err);
  }
  const db = database.db(dbName);
  console.log('Connected successfully to server');
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  db.collection('users').findOne({ _id: ObjectId(id) }, (err, user_doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user_doc);
    }
  });
});

// POST /students { name: "Petter", age: 17 } => saves the student in db
app.post('/users', (req, res) => {
  const { id, firstName, lastName, adress } = req.body;
  db.collection('users').insertOne(
    { id, firstName, lastName, adress },
    (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`succeful insert of object ${obj.insertedId}`);
      }
    }
  );
});
