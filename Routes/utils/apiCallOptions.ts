import * as dotenv from "dotenv"
dotenv.config()
import { getCall } from "../Interfaces/apiCalls"
const apiKey = process.env.RAPID_API_KEY
const apiHost = process.env.RAPID_API_HOST

export const searchMovie = (name: string): getCall => {
    const getMovie: getCall = {
        params: {query: name},
        headers:{
            "X-RapidAPI-Key": apiKey ? apiKey : "no api key available",
            "X-RapidAPI-Host": apiHost ? apiHost : "no api host available" 
        }
    }
    return getMovie
}
export const movieDetails = (id: string): getCall => {
    const getMovie: getCall = {
        params: {emsVersionId: id},
        headers:{
            "X-RapidAPI-Key": apiKey ? apiKey : "no api key available",
            "X-RapidAPI-Host": apiHost ? apiHost : "no api host available" 
        }
    }
    return getMovie
}