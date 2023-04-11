import connexion from "../.."
import { randomBytes } from "crypto"
import * as dotenv from "dotenv"
dotenv.config()

export default async function (email: string){
    const seconds: number = process.env.SESSION_EXPIRATION_SECONDS ? +process.env.SESSION_EXPIRATION_SECONDS : 3600
    const user_id = await connexion.models.Profile.findOne({where:{email: email}}).then(data => data?.dataValues.id)
    let expiration = new Date()
    expiration.setSeconds(expiration.getSeconds()+seconds)
    const session = await connexion.models.Sessions.create({
        user_id: user_id,
        session_id: randomBytes(42).toString("hex"),
        expiredAt: expiration
     })
    
    return session
}