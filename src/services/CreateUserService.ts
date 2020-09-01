import {getCustomRepository, Repository} from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import {hash} from 'bcryptjs'
 
import User from '../models/User'

interface RequestDTO{
  email: string

  password: string

  nickName: string

  age: number

  plataform: string

  avatar: string

}

class CreateUserService{

  public async execute({email,password,nickName, age, plataform, avatar = '' }: RequestDTO) : Promise<User | null> {

    const InstanciaBanco = getCustomRepository(UserRepository)

    const FindEmail = await InstanciaBanco.findOne({where: {email: email}})

    //console.log(FindEmail)
    if(FindEmail){

        throw Error('Error')

    }

    const cripto = await hash(password,8)

    const NewUser = InstanciaBanco.create({email,password: cripto ,nickName, age , plataform, avatar})

    await InstanciaBanco.save(NewUser)
    
    return NewUser

  }
}

export default CreateUserService