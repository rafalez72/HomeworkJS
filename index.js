const express=require('express')
const db = require('./models')
const userRoutes=require('./routes/users')
const app=express()
db.sync().then(()=>{
    console.log("Conectado a sqlite")
}).catch(()=>{
    console.log('Hubo un error')
})
app.use(express.json())

app.use('/api',userRoutes)


app.listen(3000, ()=>{
    console.log('Escuchando puerto 3000')
})