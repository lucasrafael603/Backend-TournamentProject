import {Router, response} from 'express'
import {v4} from 'uuid'
import {parseISO} from 'date-fns'
import {getCustomRepository, Repository} from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import User from '../models/User'
import CreateUserService from '../services/CreateUserService'
import dados from '../middlewares/dados'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import uploadConfig from '../config/upload'
import multer from 'multer'
import UpdateUserAvatarService from '../services/UpdateUserAvatarService'

//Multer recebe como parametro as configuração do multer

const UserRouter = Router()
const upload = multer(uploadConfig)


UserRouter.use(dados)


// UserRouter.get('/new', (request, response) => {



// const {ae} = request.query

// console.log(ae)

// })


UserRouter.get('/', async (request,response) =>{

  const Users = getCustomRepository(UserRepository)


  const {queryParams} = request.query

  console.log(queryParams)

 const allUsers = await Users.find()

  return response.json({message: allUsers})

})

UserRouter.post('/', async (request,response) => {

  const {email, password ,nickName,age, plataform, avatar} = request.body


  // const newUser = {
  //   nickName,
  //   age,
  //   plataform,
  // }

     const Instancia = new CreateUserService()

     try{



     const newUser = await Instancia.execute({email,password,nickName,age, plataform, avatar})


     delete newUser?.password

    
    return response.json(newUser)


     }
     catch(err){

      return response.json({err: 'Email ja existente'})

     }
     

})

UserRouter.patch('/avatar', ensureAuthenticated , upload.single('avatar') , async (request, response) => {
    //console.log(request.file)
    
    // try {

    //   const updateUserAvatar = new UpdateUserAvatarService()

    //   const user = updateUserAvatar.execute({user_id: request.user, avatarFileName: request.file.filename})


    //   return response.json(user)

    // }
    // catch(err){


    //   return response.json({message: err.message})
    // }


    return response.json({message: 'ok'})
  

})

export default UserRouter