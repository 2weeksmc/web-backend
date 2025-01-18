import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send({
    path: "/create",
  });
});

export default router;
