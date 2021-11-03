import { MongoClient } from 'mongodb';
import { MongoCRUD } from './storage/mongocrud.js';
import { MockCRUD } from './storage/mockcrud.js';

const connectionString = 'mongodb://localhost:27017/dataShop';
const client = new MongoClient(connectionString);
const mockData = [
  { name: 'Patrik', age: 38 },
  { name: 'Petter', age: 41 },
  { name: 'Pontus', age: 12 },
  { name: 'Per', age: 57 }
];

let dbConnection;

function connectToDB() {
  client.connect(function (err, db) {
    if (err || !db) {
      return console.log(err);
    }
    dbConnection = db.db('dataShop');
    console.log('Successfully connected to MongoDB.');
    return new MongoCRUD(dbConnection, 'dataShop');
  });
}

const createMockDb = (mockData) => {
  return new MockCRUD(mockData);
};

function getDb() {
  if ((process.env.APP = 'development')) {
    return new MockCRUD(mockData);
  } else {
    return dbConnection;
  }
}

export { connectToDB, getDb, createMockDb };
