import {getCustomRepository} from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import AuthConfig from '../config/auth'
 
interface RequestAuthenticator{

email: string

password: string

}

class AuthenticateService{
  
  public async execute({email, password}: RequestAuthenticator ){

    const CriarInstanciaBD = getCustomRepository(UserRepository)

    const FindUser = await CriarInstanciaBD.findOne({where: {email}})
    
    console.log(FindUser)

    if(!FindUser){

      throw new Error('Email não encontrado')


    } 

    const VerificacaoPass = await compare(password, FindUser.password)

    console.log(VerificacaoPass)

    if(!VerificacaoPass){

      throw new Error('Incorret Email/password Combination')

    }



    const token = sign({}, AuthConfig.jwt.secret , { subject: FindUser.idUser, expiresIn: AuthConfig.jwt.expiresIn } )
    
    console.log(token)

    return {FindUser, token}

    //return alo

  }


}


export default AuthenticateService