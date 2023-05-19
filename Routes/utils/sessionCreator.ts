import connexion from "../.."
import { randomBytes } from "crypto"
import * as dotenv from "dotenv"
dotenv.config()

export default async function (email: string){
    const seconds: number = process.env.SESSION_EXPIRATION_SECONDS ? +process.env.SESSION_EXPIRATION_SECONDS : 3600
    const user_id = await connexion.models.Profile.findOne({where:{email: email}})
    if(!user_id) throw Error("User doesn' exist")
    const sessionCheck = await connexion.models.Sessions.findAll({where:{user_id: user_id.dataValues.id}})
    if(sessionCheck){
        sessionCheck.map( async (s) => await s.destroy())
        console.log("Session deleted")
    }
    let expiration = new Date()
    expiration.setSeconds(expiration.getSeconds()+seconds)
    const session = await connexion.models.Sessions.create({
        user_id: user_id.dataValues.id,
        session_id: randomBytes(42).toString("hex"),
        expiredAt: expiration,
        isAdmin: user_id.dataValues.isAdmin,
        isSuperAdmin: user_id.dataValues.isSuperAdmin,
     })
    
    return session
}