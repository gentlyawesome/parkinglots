import makeFakeParkingLot from "../../__test__/fixtures/parkinglot";
import makeParkingLot from "./";

describe("parkinglot", () => {
  it("Should have ID", () => {
    const parkingLot = makeFakeParkingLot({ id: null });
    expect(() => makeParkingLot(parkingLot)).toThrow("Parkinglot must have ID");
  });

  it("should have name", () => {
    const parkingLot = makeFakeParkingLot({ name: null });
    expect(() => makeParkingLot(parkingLot)).toThrow(
      "Parkinglot must have Name"
    );
  });

  const sanitizedText = makeParkingLot({
    ...makeFakeParkingLot({ name: "Test!@#$" })
  });

  it("should have name sanitized", () => {
    expect(sanitizedText.getName()).toBe("Test");
  });

  it("should have a status", () => {
    const parkingLot = makeFakeParkingLot({ status: null });
    expect(() => makeParkingLot(parkingLot)).toThrow(
      "Parkinglot must have Status"
    );
  });

  it("should have source", () => {
    const parkinglot = makeFakeParkingLot({ source: null });
    expect(() => makeParkingLot(parkinglot)).toThrow(
      "Parkinglot must have Source"
    );
  });

  it("should have modifiedOn to UTC", () => {
    const noModifiedDate = makeFakeParkingLot({ modifiedOn: undefined });
    expect(noModifiedDate.modifiedOn).not.toBeDefined();
    const d = makeParkingLot(noModifiedDate).getCreatedOn();
    expect(d).toBeDefined();
    expect(new Date(d).toUTCString().substring(26)).toBe("GMT");
  });
});
