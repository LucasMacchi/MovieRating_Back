import * as interfaces from "../Interfaces/userInterface"
import { encryptPassword } from "../utils/passwordCryter"
//import DateOfBirthParser from "../utils/DateOfBirthParser"
import connexion from "../.."
import send_verificationEmail from "../utils/send_verificationEmail"
import * as dotenv from "dotenv"
dotenv.config()

//Y => yes / N => no
const verification = process.env.EMAIL_VERIFICATION ? process.env.EMAIL_VERIFICATION : "N"

export default async function (email: string, username: string, dateofbirth:string, password: string){
    const date = new Date(dateofbirth)
    console.log("DATE === "+dateofbirth+" | ",date)
    const newUser: interfaces.User = {
        email: email,
        username: username,
        password : await encryptPassword(password),
        dateBirth: date
        //dateBirth: DateOfBirthParser(dateofbirth)
    }
    console.log(newUser)
    try {
        
        const models = connexion.models
        const activationCode = Math.floor(Math.random()*(10000 - 1000)+1000)
        await models.Profile.create({
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            dateBirth: newUser.dateBirth,
            activationCode: activationCode
        })
        if(verification === "Y") await send_verificationEmail(activationCode, newUser.email)
        
        
    } catch (error) {
        if(error instanceof Error){
            throw Error(error.message)
        }
    }
    

    return newUser

}