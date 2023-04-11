import passwordValidator from "./passwordValidator";
import sessionCreator from "../utils/sessionCreator";

export default async function(email: string, password: string, res: any ) {
    const login_response = await passwordValidator(email, password)
    if(login_response){
        const session = await sessionCreator(email)
        res.cookie("session_id",session.dataValues.session_id,{expires: session.dataValues.expiredAt, httpOnly: true})
        res.cookie("session_reference_id",session.dataValues.session_reference_id,{maxAge: 1000*60*60*24*365, httpOnly: true})
        return "Session authenticated"
    }
    else throw Error("The Email or Password is incorrect")
}