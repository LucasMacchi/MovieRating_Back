import mailerConfig from "./mailerConfig";
import nodemailer from "nodemailer";

export default async function(type: number, email: string){
    const config = mailerConfig()
    const tranporter = nodemailer.createTransport(config)
    switch(type){
        //Username changed
        case 1: {
            await tranporter.sendMail({
                from:config.auth.user,
                to: email,
                subject: "Username successfully changed",
                text:"Your username has been changed.",
            })
        }
    }

}