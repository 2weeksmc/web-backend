import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
