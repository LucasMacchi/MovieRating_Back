import connexion from "../..";
import { Ireview } from "../Interfaces/reviewInterface";
import reviewPosted from "../utils/MailMessages/reviewPosted";

export default async function(userId: string, movieId: string, comment: string, rating: number){
    const user = await connexion.models.Profile.findByPk(userId)
    const exist = await connexion.models.Review.findOne({where:{profileId: userId, movieId: movieId}})
    if(!user) throw Error("User doesn't exist")
    if(user.dataValues.isActivated === false) throw Error("User isn't activated")
    if(exist) throw Error("User already reviewed the movie")
    const newReview: Ireview = {
        comment: comment,
        rating: rating,
        movieId: movieId,
        profileId: user.dataValues.id,
        username: user.dataValues.username
    }
    await connexion.models.Review.create({
        comment: newReview.comment,
        rating: newReview.rating,
        movieId: newReview.movieId,
        profileId: newReview.profileId,
        profileUser: newReview.username
    })
    await reviewPosted(user.dataValues.email, movieId, newReview)
}