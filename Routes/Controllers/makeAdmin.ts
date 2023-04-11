import connexion from "../..";


export default async function (user_id: string) {
    const user = await connexion.models.Profile.findByPk(user_id)
    if(user){
        if (user?.dataValues.isAdmin) throw Error ("User is already admin")
        user.set({
            isAdmin: true
        })
        await user.save()
    }
    else throw Error ("User doesn't exist")
}