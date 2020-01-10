import Id from "./../Id";

export default function makeParkingLotDb({ makeDb }) {
  return Object.freeze({
    insert,
    findById
  });

  async function insert({ id: _id = Id.makeId(), ...parkinglotData }) {
    const db = await makeDb();
    const result = await db
      .collection("parkinglots")
      .insertOne({ _id, ...parkinglotData });
    const { _id: id, ...insertedData } = result.ops[0];
    return { id, ...insertedData };
  }

  async function findById({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection("parkinglots").find({ _id });
    const found = await result.toArray();
    if (found.length == 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }
}
