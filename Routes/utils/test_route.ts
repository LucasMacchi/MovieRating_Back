
export default function(): string{
    try {
        return "testing this route, everything is working!"
    } catch (error) {
        if(error instanceof Error) return "ERROR = "+error.message
        else return "Error = " + error
    }
    
}