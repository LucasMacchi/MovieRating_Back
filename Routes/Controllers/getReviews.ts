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
    else{
        throw Error("Type not specified or incorrect, use m, u or r")
    }

}