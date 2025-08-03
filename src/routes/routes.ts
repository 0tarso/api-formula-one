import { Router } from "express";
import { getDriver } from "../controllers/drivers-controller";

const router = Router()

router.get("/drivers", getDriver)

export default router