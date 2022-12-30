const { DataTypes } =require('sequelize');
const db=require("./index")

const rolesModel=db.define("Roles", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
},{
    timestamps: false,
})

module.exports=rolesModel