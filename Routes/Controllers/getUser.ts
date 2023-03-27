import connexion from "../..";

export default async function(id: string){
    console.log("USER = "+id)
    let user = await connexion.models.Profile.findOne({where:{email: id}})
    if(user){
        return user
    }
    else{
        user = await connexion.models.Profile.findOne({where:{id: id}})
        if(user){
            return user
        }
        else{
            throw Error("User doesn't exist")
        }
    }

}