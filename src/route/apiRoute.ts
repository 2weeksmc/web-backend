import express, { Request, Response } from "express";

import playerRoute from "./playerRoute";
import serverRoute from "./serverRoute";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send({
    message: "Hello, Express with TypeScript!",
  });
});

router.use("/player", playerRoute);
router.use("/server", serverRoute);

export default router;
