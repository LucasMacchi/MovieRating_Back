import bcrypt from "bcrypt"
export async function encryptPassword(password:string): Promise<string>{
    const hashpass = await bcrypt.hash(password, 10)
    return hashpass
}
export async function decryptPassword(en_pass: string, pass: string): Promise<boolean>{
    const result = await bcrypt.compare(pass, en_pass)
    return result
}
