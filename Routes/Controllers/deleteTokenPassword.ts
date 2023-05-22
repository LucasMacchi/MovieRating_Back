import connexion from "../.."

export default async function (id: string){
    const token = await connexion.models.Token.findByPk(id)
    if(!token) throw Error("Token doesn't exits" )
    await token.destroy()
    return "Token deleted"
}