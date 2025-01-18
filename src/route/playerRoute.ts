import express, { Request, Response } from "express";
import mongodb from "../database/mongodb";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send({
    path: "/player",
  });
});

router.get("/get/:uniqueId", async (request: Request, response, Response) => {
  const uniqueId = request.params.uniqueId;
  await mongodb.createConnection("2weeksmc-network");
  const result = await mongodb
    .collection("players")
    .findOne({ uuid: uniqueId });
  response.send(result);
});

export default router;
