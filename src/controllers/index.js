import { addParkinglot } from "../use-case";

import makePostParkinglot from "./post-parkinglot";
import notFound from "./notFound";

const postParkinglot = makePostParkinglot({ addParkinglot });

const parkinglotController = Object.freeze({
  notFound,
  postParkinglot
});

export default parkinglotController;
export { postParkinglot, notFound };
