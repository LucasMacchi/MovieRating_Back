import connexion from "../..";

export default async function (user_id: string, review_id: string){
    const like = await connexion.models.Likes.findOne({where:{user_id: user_id, review_id: review_id}})
    const review = await connexion.models.Review.findByPk(review_id)
    if(like){
        await like.destroy()
        if(review) {
            const newLike = review.dataValues.likes - 1
            review.set({
                likes: newLike
            })
            await review.save()
            return "review unliked!"
        }
        else return "review doesn't exist"
    }
    else throw Error("Like doesn't exist")
}