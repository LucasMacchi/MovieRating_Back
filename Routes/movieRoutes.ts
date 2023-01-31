//Router declaration
import { Router } from "express";
export const router = Router()
//Controllers imports
import test_route from "./utils/test_route";
import getMoviesByName from "./Controllers/getMoviesByName";

//Routes
router.get("/test", (_req, res) => {
    res.send(test_route())
})

router.get("/:name", async (req, res) => {
    try {
        const nameOfMovie = req.params.name
        const response = await getMoviesByName(nameOfMovie)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(400).send("ERROR = "+error.message) 
        else res.status(404).send("Error = " + error) 
    }

})




