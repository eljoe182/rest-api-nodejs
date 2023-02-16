const { MongoClient } = require('mongodb');
const config = require('../../../app/config');

class MongoDBClient {
  constructor() {
    this.client = new MongoClient(config.MONGO.URI);
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  async test() {
    await this.client.db(config.MONGO.DATABASE).command({ ping: 1 });
    console.log('Connected successfully to server');
    this.close();
  }

  async getDatabase() {
    return this.client.db(process.env.MONGODB_DATABASE);
  }
}

module.exports = MongoDBClient;
