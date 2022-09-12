import 'reflect-metadata'
import express from 'express'
import { MainDS } from './data-source'
import { ClassConnect } from './routes/connect_classes_group'
import { CreateClass } from './routes/createclass'
import { CreateStudent } from './routes/createstudent'
import { CreateTeacher } from './routes/createteacher'
import { FetchStudents } from './routes/fetch_students'
import { FetchTeacher } from './routes/fetch_teachers'
import { FetchClass } from './routes/fetch_class'
import { DeleteStudent } from './routes/delete_student'
import { DeleteTeacher } from './routes/delete_teacher'

const app = express()
const port = 3000

const main = async () => {
  try {
    MainDS.initialize()
    console.log('Connected to Postgresql')
    app.use(express.json())
    app.use(
      CreateStudent,
      CreateTeacher,
      CreateClass,
      ClassConnect,
      FetchStudents,
      FetchTeacher,
      FetchClass,
      DeleteStudent,
      DeleteTeacher
    )
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (err) {
    console.error(`An error occured! ${err}`)
  }
}

main()
