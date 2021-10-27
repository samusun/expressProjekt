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

  //App post new array of Users
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

  //App Get ALL Users
  app.get('/users', (req, res) => {
    db.collection('users')
      .find({})
      .toArray((err, users) => {
        if (err) {
          console.error('error GET /users', err);
          res.send(err);
        } else {
          res.send(users);
        }
      });
  });

  //App Get specifice Users by ID
  app.get('/users/:id', (req, res) => {
    const id = req.params.id
    db.collection('users')
      .findOne({ "_id": ObjectId(id) }, (err, users_doc) => {
        if (err) {
          res.send(err)
        } else {
          res.send(users_doc)
        }
      })
  })

  //App Delete Users by ID
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



  //App post new array of products
  app.post('/products', (req, res) => {
    const { name, cost, amount } = req.body;
    db.collection('products').insertOne({ name, cost, amount }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`succeful insert of object ${obj.insertedId}`);
      }
    });
  });

  //App Get ALL products
  app.get('/products', (req, res) => {
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

  //App Get specific products by ID
  app.get('/products/:id', (req, res) => {
    const id = req.params.id
    db.collection('products')
      .findOne({ "_id": ObjectId(id) }, (err, products_doc) => {
        if (err) {
          res.send(err)
        } else {
          res.send(products_doc)
        }
      })
  })

  //App Delete Products by ID
  app.delete('/products/:id', (req, res) => {
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



});

app.listen(port, () => {
  console.log(`Example app listeningz at http://localhost:${port}`);
});

/*
Kommand kod för GET, PUT, DELETE, etc

~~~~ANVANDARE COMMAND~~~~
Skicka ny Array till Users:
curl -d '{ "firstName": "Petter", "lastName": "Hej", "adress": "ithogskolan"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Hamta Lista av Users:
curl http://localhost:3000/users

Hamta specifika Users med ID:
curl http://localhost:3000/users/{id}

Tar bort specifika Users med ID:
curl -X DELETE http://localhost:3000/users/{id}


~~~~PRODUKTER COMMAND~~~~
Skicka ny Array till Produkter:
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Hamta Lista av Products:
curl http://localhost:3000/products

Hamta specifika Products med ID:
curl http://localhost:3000/products/{id}

Tar bort specifika Products med ID:
curl -X DELETE http://localhost:3000/products/{id}
*/
