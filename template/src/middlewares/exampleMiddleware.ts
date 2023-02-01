import express, { Request, Response, NextFunction } from "express";

export function exampleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["auth"];
  if (authHeader === "anna") {
    next();
  } else {
    res.status(400).send("Forbidden");
  }
}
