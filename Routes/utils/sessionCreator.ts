import connexion from "../.."
import { randomBytes } from "crypto"
import * as dotenv from "dotenv"
dotenv.config()

export default async function (email: string){
    const seconds: number = process.env.SESSION_EXPIRATION_SECONDS ? +process.env.SESSION_EXPIRATION_SECONDS : 3600
    const user_id = await connexion.models.Profile.findOne({where:{email: email}}).then(data => data?.dataValues.id)
    const id = randomBytes(16).toString("hex")
    let expiration = new Date()
    expiration.setSeconds(expiration.getSeconds()+seconds)
    console.log(expiration)
    const session = await connexion.models.Sessions.create({
        user_id: user_id,
        session_id: id,
        expiredAt: expiration
     })
    
    return session
}