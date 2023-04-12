//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import makeAdmin from "./Controllers/makeAdmin";
import deleteReviewAdmin from "./Controllers/deleteReviewAdmin";


//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})

//This route will make a user admin by its id
router.patch("/admin-user", async (req, res) => {
    try {
        const {user_id} = req.body
        await makeAdmin(user_id)
        res.send("User has been made admin")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//This route will delete a review only using its id
router.delete("/delete-review/:id", async (req, res) => {
    try {
        const id = req.params.id
        await deleteReviewAdmin(id)
        res.send("Review has benn deleted")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
