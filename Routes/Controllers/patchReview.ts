import connexion from "../..";

export default async function (reviewId:string, newComment: string, newRating: number){
    const review = await connexion.models.Review.findByPk(reviewId)
    if(!review) throw Error("Review doesn't exist")
    if(newComment && newRating){
        review.set({
            comment: newComment,
            rating: newRating
        })
        await review.save()
        return "Review changed"
    }
    else if(newComment){
        review.set({
            comment: newComment
        })
        await review.save()
        return "Comment changed"
    }
    else{
        review.set({
            rating: newRating
        })
        await review.save()
        return "Rating changed"
    }
    
}