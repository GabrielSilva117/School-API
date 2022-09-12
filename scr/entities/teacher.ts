import { Column, Entity, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { Person } from './additional/person'

@Entity('teacher')
export class Teacher extends Person {
  @Column()
  subject: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
