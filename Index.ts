import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./Router/BookRoutes";
import { database } from "./Config/Database";

const port: number = 2000;
database();


const app: Application = express();

app
  .use(express.json())
  .use(cors())
  .use("/api", router)
  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on a bookstore endpoint",
      });
    } catch (error) {
      console.log(error);
    }
  })
  .listen(port, () => {
    console.log("Server is listening to port: ", port);
  });
