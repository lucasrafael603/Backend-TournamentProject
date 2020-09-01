import express from 'express'
import Router from '../src/routes/index'
import './database'
import 'reflect-metadata'

const app = express()

app.use(express.json())

app.use(Router)
// app.get('/repositorio', (request,response)=> { 

//  return response.json({message: 'Hello World'})

// } )

app.listen('3333',()=> console.log('app init'))