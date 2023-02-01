import express, { Request, Response, NextFunction } from "express";

export function exampleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["joe"];
  if (authHeader === "john") {
    next();
  } else {
    res.status(400).send("Forbidden");
  }
}
