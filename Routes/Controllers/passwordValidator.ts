import { decryptPassword } from "../utils/passwordCryter";
//import * as interfaces from "../Interfaces/userInterface"
import connexion from "../..";
export default async function(email:string, password: string): Promise<boolean> {
    const models = connexion.models
    const user = await models.Profile.findOne({where:{email: email}})
    const encrypedPassword: string = user?.dataValues.password
    if(user === null) throw Error("User doesnt exist")
    else if( await decryptPassword(encrypedPassword, password)) return true
    else return false
}