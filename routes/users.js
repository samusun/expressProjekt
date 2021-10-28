import express from 'express'
import { getDb } from '../dbConnection.js';
import { ObjectId } from 'mongodb'

const router = express.Router()


//App Get ALL Users
router.get('/', (req, res) => {
  const db = getDb()
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

//App Get specifice Users by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const db = getDb()
  db.collection('users').findOne({ _id: ObjectId(id) }, (err, users_doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users_doc);
    }
  });
});


//App Post A User 
router.post('/', (req, res) => {
    const { firstName, lastName, adress } = req.body;
    const db = getDb()
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
  

  //App Delete Users by ID
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb()
    db.collection('users').deleteOne({ _id: ObjectId(id) }, (err, obj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`successful deletion of ${obj.deletedCount} documents`)
      }
    })
  })

  export { router }