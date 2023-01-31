//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";

//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})
