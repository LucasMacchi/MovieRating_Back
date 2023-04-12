import connexion from "../..";

export default async function(review_id:string, reporter_id:string, description:string, type:string){
    const report = await connexion.models.Reports.create({
        review_id: review_id,
        reporter_id: reporter_id,
        description: description,
        type: type,
    })
    return report
}