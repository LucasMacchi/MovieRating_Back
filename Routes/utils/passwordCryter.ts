import bcrypt from "bcrypt"
export async function encryptPassword(password:string): Promise<string>{
    const hashpass = await bcrypt.hash(password, 10)
    return hashpass
}