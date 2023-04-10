import connexion from "../..";

export default async function(user_id: string){
    const session = await connexion.models.Sessions.findOne({where:{user_id: user_id}})
    if(session){
        await session.destroy()
        return "Logout"
    }
    else throw Error("Session doesn't exist")
}