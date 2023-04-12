import connexion from "../..";

export default async function (reviewId: string, user_id: string){
    const review = await connexion.models.Review.findByPk(reviewId)
    if(!review) throw Error("Review doesn't exist")
    if(review.dataValues.profileId === user_id) await review.destroy()
    else throw Error("The user you provide doesn't match the review")

}