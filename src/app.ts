import express, { Application } from "express";
import cors from "cors";
import userRouter from "./routes/UserRouter";


const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());

  //routes
  app.use("/users" , userRouter)
};



export default appConfig