import connexion from "../..";
import userNameChange from "../utils/MailMessages/userNameChange";

export default async function(username: string, email: string) {
    const userCheck = await connexion.models.Profile.findOne({where:{username: username}})
        if(userCheck) throw Error("Username already exist")
        else{
            const user = await connexion.models.Profile.findOne({where:{email: email}})
            if(user){
                if(user.dataValues.isActivated){
                    user.set({username: username})
                    await user.save()
                    await userNameChange(user.dataValues.email)
                }
                else throw Error("User hasn't been activated")
            }
            else throw Error("User doesn't exist")
        }

}