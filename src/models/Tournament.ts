import {Entity,PrimaryGeneratedColumn,Column, Timestamp, ManyToOne,JoinColumn, ManyToMany} from 'typeorm'
import User from './User'

@Entity('Tournaments')
class Tournament {
  @PrimaryGeneratedColumn('uuid')
  idTournament: string

  @Column()
  userId: string

  @ManyToMany(() => User )
  @JoinColumn({name: 'userId'})
  idUser: User
  

  @Column()
  tournamentName: string

  @Column('timestamp with time zone')
  date: Date

  @Column()
  maxTeams: number

  @Column()
  award: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

}

export default Tournament