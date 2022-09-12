import { DataSource } from 'typeorm'
import { Class } from './entities/class'
import { Student } from './entities/student'
import { Teacher } from './entities/teacher'

export const MainDS = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: undefined,
  database: 'school',
  synchronize: true,
  logging: false,
  entities: [Student, Teacher, Class],
  subscribers: [],
  migrations: []
})
