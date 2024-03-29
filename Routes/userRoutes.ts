//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import postUser from "./Controllers/postUser";
import passwordValidator from "./Controllers/passwordValidator";
import patchActivateUser from "./Controllers/patchActivateUser";
import patchUser from "./Controllers/patchUser";
import getUser from "./Controllers/getUser";
import like from "./Controllers/like";
import unlike from "./Controllers/unlike";
import createReport from "./Controllers/createReport";
import emailFowarding from "./Controllers/emailFowarding";
import postTokenPassword from "./Controllers/postTokenPassword";
import patchPassword from "./Controllers/patchPassword";
import * as auth from "./Controllers/sessionCheck"

//import send_verificationEmail from "./utils/send_verificationEmail";
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
router.post("/validate-user", async (req, res) => {
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
router.patch("/patch-user",auth.sessionCheck, async (req, res) => {
    try {
        const {email, username} = req.body
        await patchUser(username, email)
        res.send("User has been changed")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
//This route will return an user, the id can be either the email or the id of the user
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await getUser(id)
        res.send(user)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//This route will "like" a review, it needs the userID and the reviewID from the body
router.post("/like",auth.sessionCheck, async (req, res) => {
    try {
        const {user_id, review_id} = req.body
        const response = await like(user_id, review_id)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
//Send verification email again ****WIP****
router.get("/email/:email", async (req, res) => {
    try {
        await emailFowarding(req.params.email, true)
        res.send("Email sent")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//Send code for password reset
router.post("/passcode/:email", async (req, res) => {
    try {
        await postTokenPassword(req.params.email)
        res.send("Email sent")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//Send code for password reset
router.patch("/password", async (req, res) => {
    try {
        const {token_id, newPassword} = req.body
        await patchPassword(token_id, newPassword)
        res.send("Password had been updated")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//This route will "unlike" a review, it needs the userID and the reviewID from the body
router.delete("/unlike",auth.sessionCheck, async (req, res) => {
    try {
        const {user_id, review_id} = req.body
        const response = await unlike(user_id, review_id)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error)  
    }
})
//This route will create a new report
router.post("/report", async (req, res) => {
    try {
        const {review_id, user_id, description, type } = req.body
        const response = await createReport(review_id, user_id, description, type)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error)  
    }
})

