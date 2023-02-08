import { DataTypes, Sequelize } from "sequelize";
export default function(sequelize: Sequelize){
    sequelize.define("Movie",{
        id:{
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false
        }
    })
}