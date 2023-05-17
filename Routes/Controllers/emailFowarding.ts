import connexion from "../.."
import send_verificationEmail from "../utils/send_verificationEmail"
import * as dotenv from "dotenv"
dotenv.config()

//Y => yes / N => no
const verification = process.env.EMAIL_VERIFICATION ? process.env.EMAIL_VERIFICATION : "N"

export default async function (email: string) {
    const user = await connexion.models.Profile.findOne({where:{email: email}})
    const activationCode = Math.floor(Math.random()*(10000 - 1000)+1000)
    if(user){
        user.set({activationCode: activationCode, isActivated: false})
        await user.save()
        if(verification === "Y") await send_verificationEmail(activationCode, user.dataValues.email)
    }
}