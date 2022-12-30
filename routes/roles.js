const express=require('express')
const userModel=require('../models/users')

const userRoutes=express.Router()

userRoutes.get('/users',async (req,res)=>{
    const data=await userModel.findAll()
    res.json({status:200,data:data})
})
userRoutes.get('/users/:id',async (req,res)=>{
    const data=await userModel.findByPk(req.params.id)
    res.json({status:200,data:data})
})
userRoutes.post('/users',async (req,res)=>{
    const data=await userModel.create(req.body)
    res.json({status:200,data:data})
})
userRoutes.patch('/users/:id',async (req,res)=>{
    const data=await userModel.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    res.json({status:200,data:data})
})
userRoutes.delete('/users/:id',async (req,res)=>{
    const data=await userModel.destroy({
        where:{
            id:req.params.id
        }
    })
    res.json({status:200,data:data})
})


module.exports=userRoutes