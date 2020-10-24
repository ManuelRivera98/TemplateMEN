import mongoose from 'mongoose';
// Config
import config from '../config';

// Url prod
let MONGO_URI;

// Url dev
let URI_LOCAL;

class MongoLib {
  constructor() {
    this.client = mongoose;
  }

  async connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = await this.client.connect(config.dev ? URI_LOCAL : MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log('DB connected');
    }

    return MongoLib.connection;
  }
}

export default MongoLib;
