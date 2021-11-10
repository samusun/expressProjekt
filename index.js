import dotenv from 'dotenv';
import { expressDriver } from './drivers/webdriver.js';
import { mockdbDriver } from './drivers/mockdbdriver.js';
import { mongoDriver } from './drivers/mongodriver.js';

dotenv.config();

const PORT = process.env.PORT || 3000; // 3000 or 80
const DBTYPE = 'mongo' || 'moock'; // mockormongo
const DBCONN =
  'mongodb+srv://GRUPPARBETE:GRUPPARBETE@cluster0.nao6t.mongodb.net/Cluster0?retryWrites=true&w=majority' ||
  '<default>';

const DBNAME = 'dataShop' || '<default>';

const selectDb = async (dbType, dbConn, dbName) => {
  switch (dbType) {
    case 'mock':
      return mockdbDriver();
    case 'mongo':
    default:
      return await mongoDriver(dbConn, dbName);
  }
};

const main = async (port, dbType, dbConn, dbName) => {
  try {
    const db = await selectDb(dbType, dbConn, dbName);
    const app = expressDriver(db);
    app.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `dataShop app (${dbType}) listening at http://localhost:${port}`
      );
    });
  } catch (err) {
    console.error('Error running app', err);
  }
};

main(PORT, DBTYPE, DBCONN, DBNAME);
console.log(
  'PORT: ',
  PORT,
  'DBTYPE: ',
  DBTYPE,
  'CONN: ',
  DBCONN,
  'DBNAME: ',
  DBNAME
);

/*
Shortcut Command for GET, POST, DELETE, etc

~~~~USER COMMAND~~~~
Create new Array User:
curl -d '{ "firstName": "Hans", "lastName": "Abdullah", "adress": "Sisjön"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users

Get ALL Users:
curl http://localhost:3000/users

Get SPECIFICE User by ID:
curl http://localhost:3000/users/{id}

DELETE SPECIFICE User by ID:
curl -X DELETE http://localhost:3000/users/{id}


~~~~PRODUCT COMMAND~~~~
Create new Array Product
curl -d '{ "name": "Stege", "cost": "100", "amount": "1"}' -H "Content-Type: application/json" -X POST http://localhost:3000/products

Get ALL Products:
curl http://localhost:3000/products

Get SPECIFICE Product by ID:
curl http://localhost:3000/products/{id}

DELETE SPECIFICE Product by ID:
curl -X DELETE http://localhost:3000/products/{id}


~~~~ORDER COMMAND~~~~

Create new Array Order (REQIURE EXIST userId AND productId):
curl -d '{ "userId": "617921aa87e97a3c1f64507d", "productId": "61793912ec33d736a0e4789d" }' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
*/
