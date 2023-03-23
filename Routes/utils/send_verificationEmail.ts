import nodemailer from "nodemailer"
import mailerConfig from "./mailerConfig"

export default async function(code: number, email: string){
    const config = mailerConfig()
    try {
        const tranporter = nodemailer.createTransport(config)
        await tranporter.sendMail({
            from: config.auth.user,
            to: email,
            subject: "Account verification",
            text: "CODE "+code,
            html: "<b> CODE "+code+" <b>"
        })    
    } catch (error) {
        
        if(error instanceof Error){
            throw Error(error.message)
            
        }
        
    }
}