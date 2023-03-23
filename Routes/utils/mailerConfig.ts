import * as dotenv from "dotenv"
dotenv.config()
export default function (){
    const mailUser = process.env.MAIL_USER
    const mailPassword = process.env.MAIL_PASSWORD
    let config = {
        service: "Zoho",
        host: 'smtp.zoho.com',
        port: 587,
        auth: {
            user: mailUser ? mailUser : "",
            pass: mailPassword ? mailPassword : "",
        },
        secure: false,
    }
    return config
}