import cuid from "cuid";

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
});

const randomLot = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function makeFakeLot(overrides) {
  const lot = {
    id: Id.makeId,
    lotNumber: randomLot(1, 50)
  };

  return {
    ...lot,
    ...overrides
  };
}
