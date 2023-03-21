import { Sequelize } from "sequelize";
import { User } from "../Routes/Interfaces/userInterface";

export async function profileSeeder(connexion: Sequelize){
    const models = connexion.models
    const users: User[] = [
        {
            email: "lucas@gmail.com",
            username: "lucas",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Martin@gmail.com",
            username: "Martin",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tomas@gmail.com",
            username: "Tomas",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Tobi@gmail.com",
            username: "Tobi",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Nahuel@gmail.com",
            username: "Nahuel",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Diego@gmail.com",
            username: "Diego",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Camila@gmail.com",
            username: "Camila",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Natii@gmail.com",
            username: "Natii",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Juani@gmail.com",
            username: "Juani",
            password: Math.floor(Math.random()*600).toString(),
            dateBirth: new Date(2000, 1, 1),
        },
        {
            email: "Ramiro@gmail.com",
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
            dateBirth: u.dateBirth
        })
    }

    console.log("Seeders finished")
}