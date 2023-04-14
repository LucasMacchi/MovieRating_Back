import connexion from "../..";

export default async function (report_id: string) {
    const report = await connexion.models.Reports.findByPk(report_id)
    if(report && report.dataValues.solved){
        report.set({
            solved: true
        })
        await report.save()
    }
    else throw Error("Report doesn't exist or it was already solved")
}