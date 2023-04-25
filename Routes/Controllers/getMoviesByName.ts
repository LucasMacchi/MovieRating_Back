import axios from "axios";
import * as Interface from "../Interfaces/movieData";
import { searchMovie } from "../utils/apiCallOptions";
import * as dotenv from "dotenv"
dotenv.config()

const url = process.env.API_URL_SEARCH_NAME

export default async function(nameMovie: string): Promise<Interface.MovieDataArray[]>{
    const data:Interface.MovieDataArray[] = []
    let movies: Interface.MovieResponse[] = await (await axios.get(url ? url : "no  url", searchMovie(nameMovie))).data.data.search.movies
    movies.map(m => {
        const obj:Interface.MovieDataArray = {
            movieId: m.emsVersionId,
            name: m.name,
            imageUrl: m.posterImage.url
        }
        data.push(obj)
    })
    console.log(data)
    return data

}