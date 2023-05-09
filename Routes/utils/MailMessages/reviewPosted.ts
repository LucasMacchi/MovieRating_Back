import mailerConfig from "../mailerConfig";
import nodemailer from "nodemailer";
import getMovieDetails from "../../Controllers/getMovieDetails";
import { Ireview } from "../../Interfaces/reviewInterface";

export default async function(email: string, movie_id: string, review: Ireview){
    const moviedata = await getMovieDetails(movie_id)
    const config = mailerConfig()
    const tranporter = nodemailer.createTransport(config)
    await tranporter.sendMail({
        from:config.auth.user,
        to: email,
        subject: "You have posted a review for "+moviedata.name,
        text:"",
        html:"<h3>You have posted a review for "+moviedata.name+"<h3/>\n<h3>Your review was: <h3/>\n<h2>Rating: "+review.rating+"<h2/>\n<h2>Comment: "+review.comment+"<h2/>"
    })

}