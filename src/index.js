import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import makeExpressCallback from "./express-callback";
import { postParkinglot, notFound } from "./controllers";

dotenv.config();

const apiRoot = process.env.API;
const app = express();

app.use(bodyParser.json());

app.post(`/parkinglots`, makeExpressCallback(postParkinglot));
//app.use(makeExpressCallback(notFound));

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

export default app;
