import express from 'express';
import { router as usersRoute } from './routes/users.js';
import { router as productsRoute } from './routes/products.js';
import { router as ordersRoute } from './routes/orders.js';

const createApp = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/users', usersRoute);
  app.use('/products', productsRoute);
  app.use('/orders', ordersRoute);
  return app;
};

export { createApp };
