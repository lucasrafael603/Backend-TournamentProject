import {isEqual} from 'date-fns'
import User from '../models/User'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(User)
class UserRepository extends Repository<User> {

  public async findByDate(date: Date): Promise< User | null>{
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

export default UserRepository
