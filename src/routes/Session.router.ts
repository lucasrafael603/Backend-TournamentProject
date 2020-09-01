import {Router, request, response} from 'express'
import AuthenticateService from '../services/AuthenticateService'

const SessionRouter = Router()


 SessionRouter.get('/', (request, response) => {


  return response.json('Hello world!')


 })



SessionRouter.post('/', async (request, response) => {

  const {email, password} = request.body

  const Autenticacao = new AuthenticateService()

  try{

  const {FindUser, token} = await Autenticacao.execute({email, password})

    return response.json({FindUser,token})

  }
  catch(err){

    return response.json({message: 'Email/Password Incorrect'})

  }

})


export default SessionRouter