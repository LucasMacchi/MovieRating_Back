import connexion from "../..";

export default async function (user_id: string, review_id: string) {
    const review = await connexion.models.Review.findByPk(review_id)
    const exist = await connexion.models.Likes.findOne({where:{user_id: user_id, review_id: review_id}})
    if(exist) throw Error("User already liked the review")
    if(review){
        const newLike = review.dataValues.likes + 1
        review.set({
            likes: newLike
        })
        await review.save()
    }
    else throw Error("Review doesn't exist")
    await connexion.models.Likes.create({
        user_id: user_id,
        review_id: review_id
    })
    return "liked!"
}