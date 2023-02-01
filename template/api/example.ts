import express, { Request, Response } from "express";

export const exampleRouter = express.Router();
exampleRouter.use(express.json());

exampleRouter.get("/", (req, res) => {
  res.status(200).send("This is an example router!");
});
