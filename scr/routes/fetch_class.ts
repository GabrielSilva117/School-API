import express from 'express'
import { MainDS } from '../data-source'
import { Class } from '../entities/class'

const router = express.Router()

router.get('/api/class', async (req, res) => {
  const course = await MainDS.createQueryBuilder()
    .select('class')
    .from(Class, 'class')
    .where('id = :id', { id: 1 })
    .getOne()

  if (!course) {
    return res.json({
      error: "There's no class with this Id! Try again."
    })
  }

  return res.json(course)
})

export { router as FetchClass }
