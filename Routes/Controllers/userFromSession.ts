import getUser from "./getUser";
import connexion from "../..";

export default async function (session_id: string) {
    const session = await connexion.models.Sessions.findOne({where:{session_id: session_id}})
    if(!session) throw Error("Session not found")
    const user = await getUser(session.dataValues.user_id)
    return user
    
}