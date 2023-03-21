//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import postUser from "./Controllers/postUser";
import passwordValidator from "./Controllers/passwordValidator";

//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})
//This route will create a new user, encrypting the password.
router.post("/create", async (req, res) => {
    try {
        const {email, password, dateofbirth, username} = req.body
        const newUser = await postUser(email, username, dateofbirth, password )
        res.send(newUser)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})
//This route will validate the password for an specific account, it will return either false or true
router.post("/pass-validate", async (req, res) => {
    const {password, email} = req.body
    res.send(await passwordValidator(email, password))
})