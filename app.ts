//Imports
import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
dotenv.config()

// Create server

export const server = express()
export const PORT = process.env.PORT

//Middlewares
server.use(morgan("short"))
server.use(bodyParser.urlencoded({extended:true, limit: "10mb"}))
server.use(bodyParser.json({limit: "10mb"}))

//test
server.get("/ping", (_req, res) => {
    const message: string = "Server is running at port "+PORT +", ping recived at "+ new Date().toLocaleDateString()
    res.send(message)
})


