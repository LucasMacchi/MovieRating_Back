import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Likes",{
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
        review_id:{
            type: DataTypes.UUID,
            allowNull: false,
        }
    },{
        timestamps: false
    })
}