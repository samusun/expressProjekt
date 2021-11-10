
import express from 'express';
import { router as usersRoute } from '../routes/users.js';
import { router as ordersRoute } from '../routes/orders.js';
import { router as productsRoute } from '../routes/products.js';

let database;

const expressDriver = (db) => {
  database = db;
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/users', usersRoute);
  app.use('/orders', ordersRoute);
  app.use('/products', productsRoute);

  return app;
};

function getDB() {
  return database;
}

export { expressDriver, getDB };
