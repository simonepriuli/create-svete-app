import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { exampleRouter } from "./api/example";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/exampleRouter", exampleRouter);

app.get("/", (req, res) => {
  res.status(200).send("This is an example router!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

//exports
module.exports = app;
