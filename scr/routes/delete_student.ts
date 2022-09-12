import express from 'express'
import { Student } from '../entities/student'

const router = express.Router()

router.delete('/api/del/student/:std_id', async (req, res) => {
  const { std_id } = req.params

  const student = await Student.findOne({ where: { id: std_id } })

  if (!student) {
    return res.json({
      msg: 'Invalid student Id! Try again.'
    })
  }
  
  await student.remove()
  return res.json({
    msg: 'Student deleted successfully!'
  })
})

export { router as DeleteStudent }
