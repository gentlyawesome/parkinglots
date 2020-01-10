import cuid from "cuid";
import faker from "faker";
import * as sanitizer from "string-sanitizer";

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
});

const sanitize = text => {
  return sanitizer.sanitize(text);
};

export default function makeFakeParkingLot(overrides) {
  const parkingLot = {
    id: Id.makeId(),
    name: sanitize(faker.name.firstName()),
    status: "Open",
    modifiedOn: Date.now(),
    source: {
      ip: faker.internet.ip(),
      referer: faker.internet.url(),
      browser: faker.internet.userAgent()
    }
  };

  return {
    ...parkingLot,
    ...overrides
  };
}
