import { Sequelize } from "sequelize";
import { User } from "../Routes/Interfaces/userInterface";
import { encryptPassword } from "../Routes/utils/passwordCryter";

export async function profileSeeder(connexion: Sequelize){
    const models = connexion.models
    const users: User[] = [
        {
            email: "lucasmacchi25@gmail.com",
            username: "lucas",
            password: "jejexd",
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Martin@agmail.com",
            username: "Martin",
            password: "holaaa",
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tomas@agmail.com",
            username: "Tomas",
            password: "buenaaas",
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tobi@agmail.com",
            username: "Tobi",
            password: "chauuu",
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Nahuel@agmail.com",
            username: "Nahuel",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Diego@agmail.com",
            username: "Diego",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Camila@agmail.com",
            username: "Camila",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Natii@agmail.com",
            username: "Natii",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Juani@agmail.com",
            username: "Juani",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Ramiro@agmail.com",
            username: "Ramiro",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        }
    ]
    
    for(let u of users){
        const pass = await encryptPassword(u.password)
        if(u.email === "lucasmacchi25@gmail.com"){
            console.log("Admin created in seeders")
            await models.Profile.create({
                email: u.email,
                username: u.username,
                password: pass,
                dateBirth: u.dateBirth,
                isActivated: true,
                isSuperAdmin: true,
                isAdmin: true
            })
        }
        else{
            await models.Profile.create({
                email: u.email,
                username: u.username,
                password: pass,
                dateBirth: u.dateBirth,
                isActivated: true
            })
        }

    }

    console.log("Seeders finished")
}