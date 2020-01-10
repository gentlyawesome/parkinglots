import { makeDb } from "./../src/data-access";
import dotenv from "dotenv";

dotenv.config();

(async function setupDb() {
  console.log("Setting up db....");

  const db = await makeDb();
  const result = await db.collection("parkinglots").createIndexes([
    { key: { hash: 1 }, name: "hash_idx" },
    { key: { postId: -1 }, name: "postId_idx" },
    { key: { replyToId: -1 }, name: "replyToId_idx" }
  ]);

  console.log(result);
  console.log("Database setup complete ...");
  process.exit();
})();
