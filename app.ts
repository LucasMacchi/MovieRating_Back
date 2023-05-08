//Imports
import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
dotenv.config()
import { router } from "./Routes"
import cookieParser from "cookie-parser"
import cors from "cors"
// Create server

export const server = express()
export const PORT = process.env.PORT


//Middlewares
server.use(cors())
server.use(cookieParser())
server.use(morgan("dev"))
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use("/", router)
//test
server.get("/ping", (_req, res) => {
    const message: string = "Server is running at port "+PORT +", ping recived at "+ new Date().toLocaleDateString()
    res.send(message)
})


