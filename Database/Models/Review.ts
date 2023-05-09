import {DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Review",{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5
            }
        },
        comment: {
            type: DataTypes.TEXT,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate:{
                min: 0
            }
        },
        movieId:{
            type: DataTypes.STRING,
            allowNull: false
        },
        profileId:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        profileUser:{
            type: DataTypes.STRING,
            allowNull:false
        }

    })
}
