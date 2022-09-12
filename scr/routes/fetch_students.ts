import express from 'express'
import { Like } from 'typeorm'
import { Student } from '../entities/student'

const router = express.Router()

router.get('/api/students', async (req, res) => {
  const student: Student[] = await Student.findBy({
    //id: "18316456-7fe7-4cc6-b791-f9af31c0ca34",
    email: Like('%sql%')
  })

  if (student.length === 0) {
    return res.json({
      msg: "There's no student in this class! Try again with a different class code"
    })
  }

  if (res.status(200)) {
    return res.json(student)
  } else {
    return res.send('An error occured! Try again.')
  }
})

export { router as FetchStudents }
