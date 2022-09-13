import {
  PrimaryGeneratedColumn,
  Entity,
  BaseEntity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Student } from './student'
import { Teacher } from './teacher'

@Entity('class')
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    unique: true
  })
  discipline: string

  @Column({
    unique: true,
    length: 3
  })
  code: string

  @Column({
    unique: true
  })
  room: number

  @OneToMany(() => Student, (student) => student.course)
  students: Student[]

  @OneToOne(() => Teacher)
  @JoinColumn()
  teacher: Teacher

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
