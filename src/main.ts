import express from "express";

import apiRoute from "./route/apiRoute";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", apiRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
