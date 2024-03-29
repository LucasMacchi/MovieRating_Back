import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Sessions",{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        user_id:{
            type: DataTypes.UUID,
            allowNull: false,
            unique: true
        },
        session_id:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiredAt:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        session_reference_id:{
            type: DataTypes.UUID,
            allowNull: false, 
            unique: true,
            defaultValue: DataTypes.UUIDV4
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isSuperAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },{
        updatedAt:false
    })
}