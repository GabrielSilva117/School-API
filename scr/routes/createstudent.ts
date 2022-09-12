import express from 'express'
import { Student } from '../entities/student'

const router = express.Router()

router.post('/api/add/student', async (req, res) => {
  const { first_name, last_name, age, address, email } = req.body
  
  const student = Student.create({
    first_name,
    last_name,
    age,
    address,
    email
  })

  await student.save()
  
  if(res.status(201)){
    return res.json(student)
  } else {
    return res.send('An error occured, try again!')
  }  

})

export { router as CreateStudent }