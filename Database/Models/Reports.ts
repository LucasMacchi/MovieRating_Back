import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Reports",{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        review_id:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        reporter_id:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        solved:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        updatedAt: false
    })
}