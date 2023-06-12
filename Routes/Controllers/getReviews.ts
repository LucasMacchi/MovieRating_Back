import connexion from "../..";

export default async function(id: string, type: string){
    if(type === "m"){
        const reviews = await connexion.models.Review.findAll({where:{movieId: id}})
        if(reviews.length === 0) throw Error("This movie don't have reviews")
        return reviews
    }
    else if(type === "u"){
        const reviews = await connexion.models.Review.findAll({where:{profileId: id}, raw: true})
        if(reviews.length === 0) throw Error("User doesn't have reviews")
        return reviews
    }
    else if(type === "r"){
        const review = await connexion.models.Review.findByPk(id)
        if(!review) throw Error("Review doesn't exist")
        return review
    }
    else if(type === "l"){
        const userLikes = await connexion.models.Likes.findAll({where:{user_id: id}})
        let reviews_ids: string[] = []
        userLikes.map((r) => reviews_ids.push(r.dataValues.review_id))
        let reviews: any[] = []
        for(let i = 0; i<reviews_ids.length; i++){
            const review = await connexion.models.Review.findByPk(reviews_ids[i])
            reviews.push(review)
        }
        return reviews
    }
    else{
        throw Error("Type not specified or incorrect, use m, l, u or r")
    }

}