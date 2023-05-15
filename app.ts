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
export const FRONTEND = process.env.FRONT_END_URL
const whitelist = [FRONTEND,(FRONTEND+"/login")]
console.log(whitelist)
//Middlewares
server.use("*",cors({
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
    credentials: true
}))
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


