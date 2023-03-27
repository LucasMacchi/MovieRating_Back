//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import postUser from "./Controllers/postUser";
import passwordValidator from "./Controllers/passwordValidator";
import patchActivateUser from "./Controllers/patchActivateUser";
import patchUser from "./Controllers/patchUser";

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
    try {
        const {password, email} = req.body
        res.send(await passwordValidator(email, password))
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
//This route will validate the user using a code sent to the email
router.patch("/validate-user", async (req, res) => {
    try {
        const {email, code} = req.body
        await patchActivateUser(email, code)
        res.send("User Activated!")  
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})
//This route will change user username and sent an email informing about the change
router.patch("/patch-user", async (req, res) => {
    try {
        const {email, username} = req.body
        await patchUser(username, email)
        res.send("User has been changed")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})