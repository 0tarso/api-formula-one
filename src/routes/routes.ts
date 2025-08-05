import { Router } from "express";
import * as DriverController from "../controllers/drivers-controller";

const router = Router()

router.get("/drivers/list", DriverController.getAllDrivers)
router.get("/drivers/:id", DriverController.getDriverById)
router.post("/drivers", DriverController.postDriver)

export default router