import makeParkingLot from "../parkinglot";

export default function makeAddParkinglot({ parkinglotDb }) {
  return async function addParkinglot(parkinglotData) {
    const parkinglot = makeParkingLot(parkinglotData);
    const exists = await parkinglotDb.findById({ _id: parkinglot.getId() });
    if (exists) {
      return exists;
    }

    return parkinglotDb.insert({
      id: parkinglot.getId(),
      name: parkinglot.getName(),
      status: parkinglot.getStatus(),
      source: parkinglot.getSource(),
      modifiedOn: parkinglot.getCreatedOn()
    });
  };
}
