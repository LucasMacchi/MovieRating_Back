//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers
import login from "./Controllers/login";
import logout from "./Controllers/logout";
import * as authentication from "./Controllers/sessionCheck";
import userFromSession from "./Controllers/userFromSession";

//Routes

//test authentication
router.get("/test", authentication.sessionSuperAdminCheck ,async (_req, res) => {
    res.send("PROTECTED")
})

//Cookies
router.get("/cookies",async (req, res) => {

    res.send(req.cookies)
})

    router.get("/:id", async (req, res) => {
        try {
            const session_id = req.params.id
            const response = await userFromSession(session_id)
            res.send(response)
        } catch (error) {
            if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
            else res.status(404).send("Error = " + error) 
        }
    })

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body 
        const response = await login(email,password, res)
        if(response) {
            res.send(response)
        }
        else{
            res.status(400).send(response)
        }
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

router.delete("/logout", async (req, res) => {
    try {
        const {session_id} = req.body
        res.send(await logout(session_id, res))
        res.end()
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

