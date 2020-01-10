import makeAddParkinglot from "./add-parkinglot";
import parkinglotDb from "./../data-access";

const addParkinglot = makeAddParkinglot({ parkinglotDb });

const parkinglotService = Object.freeze({
  addParkinglot
});

export default parkinglotService;
export { addParkinglot };
