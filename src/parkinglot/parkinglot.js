export default function buildParkingLot({ Id, sanitize }) {
  return function makeParkingLot({
    id = Id.makeId(),
    name,
    status,
    source,
    modifiedOn = Date.now()
  }) {
    if (!Id.isValidId(id)) {
      throw new Error("Parkinglot must have ID");
    }

    if (!name) {
      throw new Error("Parkinglot must have Name");
    }

    if (!status) {
      throw new Error("Parkinglot must have Status");
    }

    if (!source) {
      throw new Error("Parkinglot must have Source");
    }
    return Object.freeze({
      getId: () => id,
      getName: () => sanitize(name),
      getStatus: () => status,
      getSource: () => source,
      getCreatedOn: () => modifiedOn
    });
  };
}
