import express, { json, Request, Response } from "express"
import { getDriver } from "./controllers/drivers-controller"
import router from "./routes/routes"


export function createApp() {

  const app = express()


  app.use(json())


  app.use("/api/v1", router)


  return app
}

