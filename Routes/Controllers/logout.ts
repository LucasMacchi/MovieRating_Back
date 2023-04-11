import connexion from "../..";

export default async function(session_id: string, res: any){
    const session = await connexion.models.Sessions.findOne({where:{session_id: session_id}})
    if(session){
        await session.destroy()
        res.clearCookie("session_reference_id")
        res.clearCookie("session_id")
        return "Logout"
    }
    else throw Error("Session doesn't exist")
}