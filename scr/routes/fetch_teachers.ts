import express from 'express'
import { DataSource } from 'typeorm'
import { Teacher } from '../entities/teacher'
import { MainDS } from '../data-source'

const router = express.Router()

router.get('/api/teacher', async (req, res) => {
  const teacher = await MainDS.createQueryBuilder()
    .select('teacher')
    // .addSelect('last_name')
    // .addSelect('subject')
    .from(Teacher, 'teacher')
    .where('id = :id', { id: 'c22ca395-cd28-4fed-a27e-9480582f836f' })
    .getOne()

  if (!teacher) { 
    return res.json({
      msg: "Invalid teacher Id! Try again using a different id."
    })
  }
  return res.json(teacher)
})

export { router as FetchTeacher }
