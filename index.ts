import { Sequelize } from "sequelize"
import {server, PORT } from "./app"
import db from "./Database/db"

const connexion: Sequelize = db()

connexion.sync({force: true}).then(() => {
    connexion.authenticate().then(() => console.log("Database is up")).catch(() => console.log("database error"))
    try {
        server.listen(PORT, async () => {
            console.log("Server is up and ready at port "+PORT)
        })
    } catch (error) {
        console.log("An error had happen trying to start the Server or Database: "+error)
    }
})
