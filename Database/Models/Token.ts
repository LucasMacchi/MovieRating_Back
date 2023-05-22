import { DataTypes, Sequelize } from "sequelize";
export default function(sequelize: Sequelize){
    const expire: Date = addHour()
    sequelize.define("Token",{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        user_id:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        expiredAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: expire
        }
    },{
        updatedAt:false
    })
}

const addHour = (): Date => {
    const d = new Date()
    d.setHours(d.getHours() + 1)
    return d
}