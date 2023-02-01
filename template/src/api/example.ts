import express, { Request, Response } from "express";
import { exampleMiddleware } from "../middlewares/exampleMiddleware";

export const exampleRouter = express.Router();
exampleRouter.use(express.json());

exampleRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is an example route.");
});

exampleRouter.get(
  "/login",
  exampleMiddleware,
  (req: Request, res: Response) => {
    res.status(200).send("This is an example route with middleware.");
  }
);
