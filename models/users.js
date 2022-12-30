const { DataTypes } =require('sequelize');
const db=require("./index")

const userModel=db.define("User", {
    name: DataTypes.STRING,
    lastname: DataTypes.DATE,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
},{
    timestamps: false,
})

module.exports=userModel