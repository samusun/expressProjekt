import { MongoClient } from "mongodb"

const connectionString = 'mongodb://localhost:27017/dataShop';
const client = new MongoClient(connectionString);

let dbConnection;

function connectToServer() {
  client.connect(function (err, db) {
    if (err || !db) {
      return console.log(err);
    }
    dbConnection = db.db("dataShop");
    console.log('connected', dbConnection)
    console.log("Successfully connected to MongoDB.");
  });
}

function getDb(){
  return dbConnection;
}

export { connectToServer, getDb };