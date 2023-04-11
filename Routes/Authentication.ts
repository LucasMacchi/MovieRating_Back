//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers
import login from "./Controllers/login";
import logout from "./Controllers/logout";
import {sessionCheck} from "./Controllers/sessionCheck";


//Routes

//test authentication
router.get("/test", sessionCheck ,async (_req, res) => {
    res.send("PROTECTED")
})

//Cookies
router.get("/cookies",async (req, res) => {

    res.send(req.cookies)
})

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body        
        res.send(await login(email,password, res))
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