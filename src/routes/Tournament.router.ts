import {Router} from 'express'
import {v4} from 'uuid'
import {parseISO} from 'date-fns'
import {getCustomRepository} from 'typeorm'
import TournamentRepository from '../repositories/TournamentRepository'
import CreateTournamentService from '../services/CreateTournamentService'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const TournamentRouter = Router()


// interface DTO{
// id : string 
// TournamentName ?: string,
// MaxTeams: number,
// Award: string,
// UserIdCreator: number
// Date : Date

// }

//const Tournament: [string] = ['alo']
//const Tournament : DTO[] = []


TournamentRouter.use(ensureAuthenticated)

//console.log(Tournament)
TournamentRouter.get('/', async (request, response) => {
  console.log(request.headers)

  const CriarInstancia = getCustomRepository(TournamentRepository)
  
  const AllTournaments = await CriarInstancia.find()


  //console.log(AllTournaments)


  return response.json(AllTournaments)


} )


TournamentRouter.post('/', async (request, response) => {
  
  const {url, method} = request
  const {tournamentName,maxTeams, award, userIdCreator, date} = request.body
  //const id = v4()
  const parsedDate = parseISO(date) 

  // const NewTournament = {
  //   TournamentName,
  //   MaxTeams,
  //   Award,
  //   UserIdCreator,
  //   Date: parsed 
  // }

  try{


  
  const CriarInstancia = new CreateTournamentService()


  console.log(userIdCreator)

   const NewTournament = await CriarInstancia.execute({tournamentName,maxTeams,award,userId: userIdCreator, date: parsedDate})

    //Tournament.push(NewTournament)

  //console.log(NewTournament)

  return response.json({message: 'Cadastro Concluido', NewTournament })
}
catch(err){

  return response.json({err: 'IDUser not exists'})

  }

})

// TournamentRouter.delete('/:id', (request,response) => {
//     const  {id}  = request.params

//     const LookingId = Tournament.findIndex(value =>  value.id === id)
//     console.log(Tournament[LookingId])

//     if(LookingId < 0 ){
      
//       return response.status(400).json({message: 'Error'})

//     }

//   Tournament.splice(LookingId,1)

//   return response.json({message: 'Usuario Excluido'})
// })


TournamentRouter.patch('/:id', (request, response) => { //Mudar uma informação



})
TournamentRouter.put('/', (request, response) => { //Mudar varias informações



})

export default TournamentRouter
