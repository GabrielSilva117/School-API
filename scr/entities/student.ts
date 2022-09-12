import { Entity, ManyToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { Person } from './additional/person'
import { Class } from './class'

@Entity('student')
export class Student extends Person {
  @ManyToOne(() => Class, (course) => course.students)
  course: Class

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
