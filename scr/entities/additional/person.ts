import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm'

@Entity('person')
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 50
  })
  first_name: string

  @Column({
    length: 50
  })
  last_name: string

  @Column()
  age: number

  @Column()
  address: string
/*
  @Column()
  stat: string
*/
  @Column({
    unique: true,
    length: 100
  })
  email: string
}
