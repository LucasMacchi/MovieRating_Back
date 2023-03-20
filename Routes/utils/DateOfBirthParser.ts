
export default function(date: string): Date{
    
    const day = new Date(date).getUTCDate()
    console.log(day)
    const month = new Date(date).getUTCMonth()
    const year = new Date(date).getUTCFullYear()
    const birth = new Date(year, month, day)
    return birth
}