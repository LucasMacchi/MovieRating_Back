import connexion from "../.."

export default async function (id: string){
    const token = await connexion.models.Token.findByPk(id)
    if(!token) throw Error("Token doesn't exits" )
    const allTokens = await connexion.models.Token.findAll({where:{user_id: token.dataValues.user_id}})
    allTokens.map(async (t) => await t.destroy())
    return "Token deleted"
}