import express from 'express';
// import { EmptyObjectError } from '../entities/errors.js';
// const SERVER_ERROR = 'Server Error';
// const BAD_REQUEST = 'Bad Request';
// import { router as ordersRoute } from '../routes/orders.js';
// import { router as productsRoute } from '../routes/products.js';
// import { router as usersRoute } from '../routes/users.js';

const expressDriver = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  return app;
};

export default expressDriver;
