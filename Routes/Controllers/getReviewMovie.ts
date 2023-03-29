import connexion from "../..";

export default async function(movieId: string){
    const movieReviews = await connexion.models.Review.findAll({where:{movieId: movieId}})
    if(movieReviews.length === 0) throw Error("User doesn't have reviews")
    return movieReviews
}