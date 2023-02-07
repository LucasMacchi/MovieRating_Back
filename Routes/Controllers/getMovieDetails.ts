import axios from "axios";
import * as Interface from "../Interfaces/movieData";
import { movieDetails } from "../utils/apiCallOptions";
import * as dotenv from "dotenv"
dotenv.config()

const url = process.env.API_URL_DETAIL

export default async function (id:string): Promise<Interface.MovieDetailData> {
    const movie: Interface.MovieDetailResponse = await (await axios.get(url ? url : "no  url", movieDetails(id))).data.data.movie
    const data: Interface.MovieDetailData = {
        name: movie.name,
        synopsis: movie.synopsis,
        directedBy: movie.directedBy,
        releaseDate: movie.releaseDate,
        posterImage: movie.posterImage.url,
        trailer: movie.trailer.url
    }
    return data
}