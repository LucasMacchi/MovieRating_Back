//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import postUser from "./Controllers/postUser";
//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})

router.post("/create", async (req, res) => {
    try {
        const {email, password, dateofbirth, username} = req.body
        const newUser = await postUser(email, password, dateofbirth, username)
        res.send(newUser)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})