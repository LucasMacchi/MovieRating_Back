import mailerConfig from "../mailerConfig";
import nodemailer from "nodemailer";

export default async function(email: string, link: string){
    const config = mailerConfig()
    const tranporter = nodemailer.createTransport(config)
    await tranporter.sendMail({
        from:config.auth.user,
        to: email,
        subject: "Password Reset Request",
        text:link,
    })

}