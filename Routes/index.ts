//Routes imports
import * as movieRoutes from "./movieRoutes";
import * as userRoutes from "./userRoutes"
import * as reviewRoutes from "./reviewRoutes"
import * as authenticationRoutes from "./Authentication"
//Router declaration
import { Router } from "express";
export const router = Router()
//Routes
router.use("/user", userRoutes.router)
router.use("/movie", movieRoutes.router)
router.use("/review", reviewRoutes.router)
router.use("/auth", authenticationRoutes.router)

