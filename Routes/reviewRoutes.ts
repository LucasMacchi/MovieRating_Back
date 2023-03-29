//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import postReview from "./Controllers/postReview";
import getReviews from "./Controllers/getReviews";
import deleteReview from "./Controllers/deleteReview";
import patchReview from "./Controllers/patchReview";


//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})
//This route will create a new Review
router.post("/create", async (req, res) => {
    try {
        const {userId, movieId, comment, rating} = req.body
        await postReview(userId, movieId, comment, rating)
        res.send("Review created!")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
//This route will return reviews, if you use type "m" use the id of a movie, "u" user id, "r" review id
router.get("/:id", async (req, res) => {
    try {
        const id: string = req.params.id
        const type = req.query.type
        if(typeof type === "string") {
            const reviews = await getReviews(id, type)
            res.send(reviews)
        }
        else {
            const reviews = await getReviews(id, "")
            res.send(reviews)
        }
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})
// This route will delete a review
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        await deleteReview(id)
        res.send("Review deleted successfully")
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})

//This route will modify the review
router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const {comment, rating} = req.body
        const response = await patchReview(id, comment, rating)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }
})