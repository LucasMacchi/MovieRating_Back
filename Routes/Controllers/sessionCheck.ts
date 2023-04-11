import connexion from "../..";
import logout from "./logout";
import * as dotenv from "dotenv"
dotenv.config()

export const sessionCheck = async (req: any, res: any, next: any) => {
    //Y => yes / N => no
    const isAuthActive: string = process.env.COOKIES_AUTHENTICATION ? process.env.COOKIES_AUTHENTICATION : "Y"
    if(isAuthActive === "Y"){
        try {
            //if the cookies still exist (didnt expire)
            if(req.cookies.session_id){
                 //finding de session in the db
                const session = await connexion.models.Sessions.findOne({where:{session_id: req.cookies.session_id}})
                //if the session existe, continue
                if(session){
                    next()
                }
                else{
                    await logout(req.cookies.session_id, res)
                    throw Error ("Can't find the session, logout")
                }
            }
            //if the cookie expire or doesnt exist
            else{
                //find session in the db
                console.log("session cookie not found, using reference")
                const session = await connexion.models.Sessions.findOne({where:{session_reference_id: req.cookies.session_reference_id}})
                //if the session exist, logout (delete registry)
                if(session){
                    await logout(session.dataValues.session_id, res)
                }
                throw Error ("Access denied, invalid session ID, logout")
            } 
        } catch (error) {
            if(error instanceof Error) res.status(401).send("ERROR = "+error.message) 
            else res.status(401).send("Error = " + error) 
        }
    }
    else{
        console.log("------------WARNING! AUTHENTICATION IS NOT ACTIVE------------")
        next()
    }

}

export const sessionAdminCheck = async (req: any, res: any, next: any) => {
    //Y => yes / N => no
    const isAuthActive: string = process.env.COOKIES_AUTHENTICATION ? process.env.COOKIES_AUTHENTICATION : "Y"
    if(isAuthActive === "Y"){
        try {
            //if the cookies still exist (didnt expire)
            if(req.cookies.session_id){
                 //finding de session in the db
                const session = await connexion.models.Sessions.findOne({where:{session_id: req.cookies.session_id}})
                //if the session exist and is admin, continue
                if(session && session.dataValues.isAdmin){
                    const isUserAdmin = await connexion.models.Profile.findByPk(session.dataValues.user_id).then(data => data?.dataValues.isAdmin)
                    //if the user too is an admin, continue
                    if(isUserAdmin){
                        next()
                    } 
                    else throw Error("user is not an admin")
                }
                else if(session){
                    throw Error ("Is not a admin session")
                }
                else{
                    throw Error ("Can't find the session or it is not a admin session")
                }
            }
            //if the cookie expire or doesnt exist
            else{
                //find session in the db
                const session = await connexion.models.Sessions.findOne({where:{session_reference_id: req.cookies.session_reference_id}})
                //if the session exist, logout (delete registry)
                if(session){
                    await logout(session.dataValues.session_id, res)
                }
                throw Error ("Access denied, invalid session ID, logout")
            } 
        } catch (error) {
            if(error instanceof Error) res.status(401).send("ERROR = "+error.message) 
            else res.status(401).send("Error = " + error) 
        }
    }
    else{
        console.log("------------WARNING! AUTHENTICATION IS NOT ACTIVE------------")
        next()
    }

}
export const sessionSuperAdminCheck = async (req: any, res: any, next: any) => {
    //Y => yes / N => no
    const isAuthActive: string = process.env.COOKIES_AUTHENTICATION ? process.env.COOKIES_AUTHENTICATION : "Y"
    if(isAuthActive === "Y"){
        try {
            //if the cookies still exist (didnt expire)
            if(req.cookies.session_id){
                 //finding de session in the db
                const session = await connexion.models.Sessions.findOne({where:{session_id: req.cookies.session_id}})
                //if the session exist and is admin, continue
                if(session && session.dataValues.isSuperAdmin){
                    const isUserSuperAdmin = await connexion.models.Profile.findByPk(session.dataValues.user_id).then(data => data?.dataValues.isSuperAdmin)
                    //if the user too is an admin, continue
                    if(isUserSuperAdmin){
                        next()
                    } 
                    else throw Error("user is not an super admin")
                }
                else if(session){
                    throw Error ("Is not a admin super session")
                }
                else{
                    throw Error ("Can't find the session or it is not a super admin session")
                }
            }
            //if the cookie expire or doesnt exist
            else{
                //find session in the db
                const session = await connexion.models.Sessions.findOne({where:{session_reference_id: req.cookies.session_reference_id}})
                //if the session exist, logout (delete registry)
                if(session){
                    await logout(session.dataValues.session_id, res)
                }
                throw Error ("Access denied, invalid session ID, logout")
            } 
        } catch (error) {
            if(error instanceof Error) res.status(401).send("ERROR = "+error.message) 
            else res.status(401).send("Error = " + error) 
        }
    }
    else{
        console.log("------------WARNING! AUTHENTICATION IS NOT ACTIVE------------")
        next()
    }

}