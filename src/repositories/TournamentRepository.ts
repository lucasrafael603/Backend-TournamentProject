import {isEqual} from 'date-fns'
import Tournament from '../models/Tournament'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(Tournament)
class TournamentRepository extends Repository<Tournament> {

  public async findByDate(date: Date): Promise< Tournament | null>{
    //const findAppoint = this.appointments.find(appointment =>
      //  isEqual(date, appointment.date)

      const findAppointment = await this.findOne( {where: {date}} )


      return findAppointment|| null
}
 /*private appointments: Appointment[]

  constructor(){
    this.appointments = []

  }

    public all(){

      return this.appointments

    }*/


/*
    public create({name,age,date}:CreateAppointment ):Appointment | null {
      const appointment = new Appointment({name,age,date})

      this.appointments.push(appointment)

      return appointment || null
    }*/
}

export default TournamentRepository
