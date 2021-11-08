import { ObjectId } from 'mongodb';
import express from 'express';
import { getDB } from '../drivers/webdriver.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const db = await getDB();
  try {
    const users = await db.users.getAll();
    res.send(users);
  } catch (err) {
    console.error('Error GET /users', err);
    res.status(501).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const db = await getDB();
  try {
    const user = await db.users.getOne({ _id: ObjectId(id) });
    res.send(user);
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(501).send(err);
  }
});

router.post('/', async (req, res) => {
  const { firstName, lastName, address } = req.body;
  const db = await getDB();
  try {
    const response = await db.users.createOne({ firstName, lastName, address });
    console.log(`succeful insert of object ${response}`);
    res.status(201).send(response.insertedId);
  } catch (err) {
    console.error(err);
    res.status(501).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const db = await getDB();
  try {
    const response = await db.users.deleteOne({ _id: ObjectId(id) });
    console.log('deleted one');
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(501).send(err);
  }
});

export { router };
