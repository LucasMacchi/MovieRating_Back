import * as dotenv from "dotenv"
dotenv.config()
import { Sequelize } from "sequelize"
//Models
import Profile from "./Models/Profile"
import Review from "./Models/Review"
import Likes from "./Models/Likes"
import Sessions from "./Models/Sessions"
import Reports from "./Models/Reports"
import Token from "./Models/Token"
//

const dbUser: string = process.env.DB_USER ? process.env.DB_USER : "no user"
const dbPassword: string = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "no password"
const dbHost: string = process.env.DB_HOST ? process.env.DB_HOST : "no hostname"
const dbName: string = process.env.DB_NAME ? process.env.DB_NAME : "no name"


const createTables = (sequalize: Sequelize) => {
    try {
        console.log("------------------PROFILE CREATED------------------")
        Profile(sequalize)
        console.log("------------------REVIEW CREATED------------------")
        Review(sequalize)
        console.log("------------------LIKES CREATED------------------")
        Likes(sequalize) 
        console.log("------------------SESSIONS CREATED------------------")
        Sessions(sequalize)
        console.log("------------------REPORTS CREATED------------------")
        Reports(sequalize)
        console.log("------------------TOKEN CREATED------------------")
        Token(sequalize)
    } catch (error) {
        if(error instanceof Error) console.log("Error creating tables: "+error.message)
        else console.log("Error creating tables: ",error)
    }
    
}



export default function(): Sequelize{
    if(process.env.NODE_ENV === "production"){
        console.log("IN PRODUCTION MODE")
        const connexion = new Sequelize({
            database: dbName,
            dialect: "postgres",
            host: dbHost,
            port: 5432,
            username: dbUser,
            password: dbPassword,
        })
        createTables(connexion)
        return connexion
    }
    else{
        console.log("-----------IN DEV MODE-----------")
        const connexion = new Sequelize("MovieDB", dbUser, dbPassword, {
            host: dbHost,
            dialect: "postgres",
            logging:false,
        })
        createTables(connexion)
        return connexion
    }
    
}

