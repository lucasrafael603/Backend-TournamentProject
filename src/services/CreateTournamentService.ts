import {getCustomRepository} from 'typeorm'
import TournamentRepository from '../repositories/TournamentRepository'
import Tournament from '../models/Tournament'
import UserRepository from '../repositories/UserRepository'



interface RequestTournamentDTO{

  tournamentName: string

  maxTeams: number

  award?: string


  date?: Date

  userId: string


}

class CreateTournamentService {
  
  public async execute({tournamentName, maxTeams, award, date, userId}: RequestTournamentDTO) : Promise<Tournament | null>  {

    const criarInstanciaUser = getCustomRepository(UserRepository)

    const Looking = await criarInstanciaUser.findOne({where: {idUser: userId} })

    //console.log(Looking)
    
    if(Looking?.idUser == null || undefined ){

     throw Error('Usuario não existente')
         
    }

    const criarInstanciaTournament = getCustomRepository(TournamentRepository)

      const NewTournament = criarInstanciaTournament.create({tournamentName, maxTeams, award, date, userId})
  
      await criarInstanciaTournament.save(NewTournament) 
  
      return NewTournament


   

  }
}


export default CreateTournamentService