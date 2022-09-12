import express from 'express'
import { Teacher } from '../entities/teacher'

const router = express.Router()

router.post('/api/add/teacher', async (req, res) => {
  const { first_name, last_name, age, address, email, subject } = req.body

  const teacher = Teacher.create({
    first_name,
    last_name,
    age,
    address,
    email,
    subject
  })

  await teacher.save()

  if (res.status(201)) {
    return res.json(teacher)
  } else {
    return res.send('An error occured during the teacher creation, try again!')
  }
})

export { router as CreateTeacher }
