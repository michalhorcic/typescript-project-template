import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {
  res.send("App is running")
}