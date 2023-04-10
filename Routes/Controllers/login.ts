import passwordValidator from "./passwordValidator";
import sessionCreator from "../utils/sessionCreator";

export default async function(email: string, password: string) {
    const login_response = await passwordValidator(email, password)
    if(login_response){
        return await sessionCreator(email)
    }
    else throw Error("The Email or Password is incorrect")
}