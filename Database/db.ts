import * as dotenv from "dotenv"
dotenv.config()
import { Sequelize } from "sequelize"
//Models
import Profile from "./Models/Profile"
import Review from "./Models/Review"
import Movie from "./Models/Movie"
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
        console.log("------------------MOVIE CREATED------------------")
        Movie(sequalize) 
    } catch (error) {
        if(error instanceof Error) console.log("Error creating tables: "+error.message)
        else console.log("Error creating tables: ",error)
    }
    
}

export

const relateTables = (sequalize: Sequelize) => {
    try {
        const models = sequalize.models
        models.Profile.hasMany(models.Review)
        models.Movie.hasMany(models.Review)
        console.log("Tables were related")
    } catch (error) {
        if(error instanceof Error) console.log("Error releating tables: "+error.message)
        else console.log("Error releating tables: ",error)
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
        relateTables(connexion)
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
        relateTables(connexion)
        return connexion
    }
    
}

