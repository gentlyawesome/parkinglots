import makeParkingLotDb from "./parkinglot-db";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;
const client = new MongoClient(url, { useUnifiedTopology: true });

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db(dbName);
}

const parkinglotDb = makeParkingLotDb({ makeDb });

export default parkinglotDb;
