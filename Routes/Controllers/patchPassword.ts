import connexion from "../.."
import { encryptPassword } from "../utils/passwordCryter"
import deleteTokenPassword from "./deleteTokenPassword"

export default async function (token_id:string, newPassword: string) {
    const token = await connexion.models.Token.findByPk(token_id)
    if(!token) throw Error("Token doesn't exits" )
    const user = await connexion.models.Profile.findByPk(token.dataValues.user_id)
    if(!user) throw Error("User doesn't exits" )
    user.set({
        password: await encryptPassword(newPassword)
    })
    await user.save()
    await deleteTokenPassword(token_id)
}