import express from 'express'
import TournamentRouter from './Tournament.router'
import UserRouter from './User.router'
import SessionRouter from './Session.router'

const Router = express.Router()

Router.use(express.json());

Router.use('/Tournaments', TournamentRouter)
Router.use('/Users', UserRouter)
Router.use('/Session', SessionRouter)
//Rotas
//Router.use()

export default Router
