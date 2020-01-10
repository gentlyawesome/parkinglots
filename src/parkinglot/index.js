import Id from "./../Id";
import * as sanitizer from "string-sanitizer";
import buildParkingLot from "./parkinglot";

const sanitize = text => {
  return sanitizer.sanitize(text);
};

const makeParkingLot = buildParkingLot({ Id, sanitize });

export default makeParkingLot;
