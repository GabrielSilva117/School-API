import express from 'express'
import { Class } from '../entities/class'

const router = express.Router()

router.post('/api/add/class', async (req, res) => {
  const { discipline, room, code} = req.body

  const course = Class.create({
    discipline,
    code,
    room
  })

  await course.save()

  if (res.status(201)) {
    return res.json(course)
  } else {
    return res.send('An error occured, try again!')
  }
})

export { router as CreateClass }
