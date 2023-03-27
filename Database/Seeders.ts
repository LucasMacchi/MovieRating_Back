import { Sequelize } from "sequelize";
import { User } from "../Routes/Interfaces/userInterface";

export async function profileSeeder(connexion: Sequelize){
    const models = connexion.models
    const users: User[] = [
        {
            email: "lucas@agmail.com",
            username: "lucas",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Martin@agmail.com",
            username: "Martin",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tomas@agmail.com",
            username: "Tomas",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tobi@agmail.com",
            username: "Tobi",
            password: Math.floor(Math.random()*600).toString(),
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
        await models.Profile.create({
            email: u.email,
            username: u.username,
            password: u.password,
            dateBirth: u.dateBirth,
            isActivated: true
        })
    }

    console.log("Seeders finished")
}