import { Router } from "express";
import * as DriverController from "../controllers/drivers-controller";

const router = Router()

router.get("/drivers/list", DriverController.getAllDrivers)
router.get("/drivers/:id", DriverController.getDriverById)
router.post("/drivers", DriverController.postDriver)

router.delete("/drivers/:id", DriverController.deleteDriverById)

router.patch("/drivers/:id", DriverController.updateDriverById)

export default router