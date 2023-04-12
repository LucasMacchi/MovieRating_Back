import connexion from "../..";

export default async function(id: string){
    let user = await connexion.models.Profile.findOne({where:{email: id}})
    if(user){
        const userValues = user.dataValues
        const filteredUser = {
            id: userValues.id,
            username: userValues.username,
            email: userValues.email,
            dateBirth: userValues.dateBirth,
            isAdmin: userValues.isAdmin,
            isSuperAdmin: userValues.isSuperAdmin
        }
        return filteredUser
    }
    else{
        user = await connexion.models.Profile.findOne({where:{id: id}})
        if(user){
            const userValues = user.dataValues
            const filteredUser = {
                id: userValues.id,
                username: userValues.username,
                email: userValues.email,
                dateBirth: userValues.dateBirth,
                isAdmin: userValues.isAdmin,
                isSuperAdmin: userValues.isSuperAdmin
            }
            return filteredUser
        }
        else{
            throw Error("User doesn't exist")
        }
    }
}