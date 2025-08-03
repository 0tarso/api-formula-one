import { Router } from "express";
import { getDriver, getAllDrivers } from "../controllers/drivers-controller";

const router = Router()

router.get("/drivers/list", getAllDrivers)
router.get("/drivers/:id", getDriver)

export default router