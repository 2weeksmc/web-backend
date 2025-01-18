import express, { Request, Response } from "express";

import getRoute from "./getRoute";
import createRoute from "./createRoute";
import deleteRoute from "./deleteRoute";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send({
    message: "Hello, Express with TypeScript!",
  });
});

router.use("/get", getRoute);
router.use("/create", createRoute);
router.use("/delete", deleteRoute);

export default router;
