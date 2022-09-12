import express from 'express'
import { Teacher } from '../entities/teacher'

const router = express.Router()

router.delete('/api/del/teacher/:tch_id', async (req, res) => {
  const { tch_id } = req.params
  const teacher = await Teacher.findOne({ where: { id: tch_id } })

  if (!teacher) {
    return res.json({
      error: 'Invalid teacher Id! Try again.'
    })
  }

  await teacher.remove()
  return res.json({
    success: 'Teacher deleted successfully!'
  })
})

export { router as DeleteTeacher }
