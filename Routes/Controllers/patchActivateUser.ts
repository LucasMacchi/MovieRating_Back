import connexion from "../..";

export default async function (email: string, code: number){
    const models = connexion.models
    const user = await models.Profile.findOne({where:{email: email}})
    
    if(user){
        if( await user.dataValues.activationCode == code){
            user.set({
                isActivated: true,
                activationCode: null
            })
            await user.save()
        }
        else throw Error("Incorrect Code")
    }
    else throw Error("User doesn't exist")
}