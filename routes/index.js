const express=require('express')
const rolesRoutes = require('./roles')
const taskRoutes = require('./task')
const userRoutes = require('./users')

const apiRoutes=express.Router()

apiRoutes.use('/users',userRoutes)
apiRoutes.use('/roles',rolesRoutes)
apiRoutes.use('/task',taskRoutes)

