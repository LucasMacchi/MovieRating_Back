//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import getMoviesByName from "./Controllers/getMoviesByName";
import getMovieDetails from "./Controllers/getMovieDetails";

//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})

router.get("/:name/:size", async (req, res) => {
    try {
        const nameOfMovie = req.params.name
        const pagSize = req.params.size
        const response = await getMoviesByName(nameOfMovie, parseInt(pagSize))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})

router.get("/detail/:id", async (req, res) => {
    try {
        const movieID = req.params.id
        const response = await getMovieDetails(movieID)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})



