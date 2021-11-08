import { MongoClient } from 'mongodb';

class MongoCRUD {
  constructor(db, collection) {
    this.db = db;
    this.collection = this.db.collection(collection);
  }

  async getAll() {
    try {
      return await this.collection.find({}).toArray();
    } catch (err) {
      throw new Error(`${this.collection}.getAll`, err);
    }
  }

  async getOne(id) {
    try {
      return await this.collection.findOne(id);
    } catch (err) {
      throw new Error(`${this.collection}.getOne with id: ${id}`, err);
    }
  }

  async createOne(data) {
    try {
      return await this.collection.insertOne(data);
    } catch (err) {
      throw new Error(`${this.collection}.createOne`, err);
    }
  }

  async deleteOne(id) {
    try {
      return await this.collection.deleteOne(id);
    } catch (err) {
      throw new Error(`${this.collection}.deleteOne with id: ${id}`, err);
    }
  }
}

const createMongoDb = async (conn, name) => {
  const client = await MongoClient.connect(conn);
  const db = client.db(name);
  console.log('Connected successfully with MongoDb', conn, name);
  const users = new MongoCRUD(db, 'users');
  const products = new MongoCRUD(db, 'products');
  const orders = new MongoCRUD(db, 'orders');
  return { users, products, orders };
};

const mongoDriver = async (conn, name) => {
  return await createMongoDb(conn, name);
};

export { mongoDriver };
