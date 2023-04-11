//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers
import login from "./Controllers/login";
import logout from "./Controllers/logout";



//Routes
router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body
        const response = await login(email,password)
        res.cookie("session_id",response.dataValues.session_id,{expires: response.dataValues.expiredAt})
        res.send("Session authenticated")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

router.delete("/logout", async (req, res) => {
    try {
        const {user_id} = req.body
        const response = await logout(user_id)
        res.clearCookie("session_id")
        res.send(response)
        res.end()
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})