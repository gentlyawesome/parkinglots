import { MongoClient } from "mongodb";

let connection, db;

export default async function makeDb() {
  connection =
    connection ||
    (await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }));
  db = db || (await connection.db(process.env.MONGO_DB));
  return db;
}

export async function closeDb() {
  await connection.close();
  await db.close();
}

export async function clearDb() {
  await db.collection("parkinglots").deleteMany({});
  return true;
}

export { connection, db };
