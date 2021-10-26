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

  app.post('/users', (req, res) => {
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

  app.get('/users', (req, res) => {
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

  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    db.collection('users').deleteOne({ _id: ObjectId(id) }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`successful deletion of ${obj.deletedCount} documents`);
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
Mall till att posta users:
curl -d '{ "firstName": "Petter", "lastName": "Hej", "adress": "ithogskolan"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Mall till att se users lista: 
curl http://localhost:3000/users

Mall till att delete:
curl -X DELETE http://localhost:3000/users/{id}
*/
