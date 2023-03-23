import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Profile",{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateBirth:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        isActivated:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        activationCode:{
            type: DataTypes.INTEGER
        }
    })
}