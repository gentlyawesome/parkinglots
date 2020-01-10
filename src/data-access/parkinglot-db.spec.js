import makeFakeParkingLot from "./../../__test__/fixtures/parkinglot";
import makeParkingLotDb from "./parkinglot-db";
import makeDB from "./../../__test__/fixtures/db";

describe("parkinglot db", () => {
  let parkinglotDB;

  beforeEach(() => {
    parkinglotDB = makeParkingLotDb({ makeDB });
  });

  it("insert a parkinglot", async () => {
    const parkinglot = makeFakeParkingLot();
    const result = await parkinglotDB.insert(parkinglot);
    return expect(result).toEqual(parkinglot);
  });

  it("should find parkinglot by id", async () => {
    const parkinglot = makeFakeParkingLot();
    await parkinglotDB.insert(parkinglot);
    const found = await parkinglotDB.findById(parkinglot);
    expect(found).toEqual(parkinglot);
  });
});
