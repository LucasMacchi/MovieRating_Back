import connexion from "../.."
import { FRONTEND } from "../../app"
import passwordResetLink from "../utils/MailMessages/passwordResetLink"
export default async function (email: string) {
    //gettin user
    const user = await connexion.models.Profile.findOne({where:{email: email}})
    if(!user) throw Error("WRONG EMAIL")
    const token = await connexion.models.Token.create({
        user_id: user.dataValues.id
    })
    const link = FRONTEND+"/reset/"+token.dataValues.id
    await passwordResetLink(user.dataValues.email, link)
}