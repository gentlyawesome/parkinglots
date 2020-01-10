import makeAddParkinglot from "./add-parkinglot";
import makeFakeParkinglot from "./../../__test__/fixtures/parkinglot";
import makeParkingLotDb from "./../data-access/parkinglot-db";
import makeDB from "./../../__test__/fixtures/db";

describe("makeAddParkinglot -> addParkinglot ", () => {
  let parkinglotDB;

  beforeAll(() => {
    parkinglotDB = makeParkingLotDb({ makeDB });
  });

  it("it should insert to database", async () => {
    const newParkinglot = makeFakeParkinglot();
    const addParkinglot = makeAddParkinglot({ parkinglotDB });
    const inserted = await addParkinglot(newParkinglot);
    expect(inserted).toMatchObject(newParkinglot);
  });
});
