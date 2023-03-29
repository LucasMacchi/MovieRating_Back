import connexion from "../..";

export default async function (reviewId: string){
    const review = await connexion.models.Review.findByPk(reviewId)
    if(!review) throw Error("Review doesn't exist")
    await review.destroy()

}