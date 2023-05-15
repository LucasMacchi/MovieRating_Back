import connexion from "../..";

export default async function(id: string){
    let user = await connexion.models.Profile.findOne({where:{email: id}})
    
    if(user){
        const userValues = user.dataValues
        const user_likes = await connexion.models.Likes.findAll({where:{user_id: userValues.id}})
        const user_reviews = await connexion.models.Review.findAll({where:{profileId: userValues.id}})
        const filteredUser = {
            username: userValues.username,
            email: userValues.email,
            dateBirth: userValues.dateBirth,
            isAdmin: userValues.isAdmin,
            isSuperAdmin: userValues.isSuperAdmin,
            id: userValues.id,
            likes: user_likes,
            reviews: user_reviews
        }
        return filteredUser
    }
    else{
        user = await connexion.models.Profile.findOne({where:{id: id}})

        if(user){
            const userValues = user.dataValues
            const user_likes = await connexion.models.Likes.findAll({where:{user_id: userValues.id}})
            const user_reviews = await connexion.models.Review.findAll({where:{profileId: userValues.id}})
            const filteredUser = {
                username: userValues.username,
                email: userValues.email,
                dateBirth: userValues.dateBirth,
                isAdmin: userValues.isAdmin,
                isSuperAdmin: userValues.isSuperAdmin,
                id: userValues.id,
                likes: user_likes,
                reviews: user_reviews
            }
            return filteredUser
        }
        else{
            throw Error("User doesn't exist")
        }
    }

}