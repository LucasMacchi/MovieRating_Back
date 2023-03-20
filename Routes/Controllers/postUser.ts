import * as interfaces from "../Interfaces/userInterface"
import { encryptPassword } from "../utils/passwordCryter"
import DateOfBirthParser from "../utils/DateOfBirthParser"
import connexion from "../.."
export default async function (email: string, username: string, dateofbirth:string, password: string){
    const newUser: interfaces.User = {
        email: email,
        username: username,
        password : await encryptPassword(password),
        dateofbirth: DateOfBirthParser(dateofbirth)
    }
    const models = connexion.models
    await models.Profile.create({
        email: newUser.email,
        username: newUser.username,
        password: newUser.password,
        dateBirth: newUser.dateofbirth
    })
    return newUser

}