import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('Users')
class User {
  @PrimaryGeneratedColumn('uuid')
  idUser: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  nickName: string

  @Column()
  age: number

  @Column()
  plataform: string

  @Column()
  avatar: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

}

export default User