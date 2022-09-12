import express from 'express'
import { Student } from '../entities/student'
import { Teacher } from '../entities/teacher'
import { Class } from '../entities/class'
import { Like } from 'typeorm'

const router = express.Router()

router.put('/api/teacher/:tch_id/class/:cls_id', async (req, res) => {
  const { cls_id, tch_id } = req.params

  const course = await Class.findOne({ where: { id: parseInt(cls_id) } })
  const teacher = await Teacher.findOne({ where: { id: tch_id } })

  if (!course || !teacher) {
    return res.json({
      msg: 'Invalid class/teacher id! Try again using the correct id.'
    })
  } else {
    course.teacher = teacher

    const scholar: Student[] = await Student.findBy({
      email: Like('%sql%')
    })

    if (scholar.length === 0) {
      return res.send('There is no student in this class')
    } else {
      course.students = scholar
    }

    if ( course.students.length > 0){

    }

    console.log(scholar)
    
    await course.save()
    return res.status(200).json({
      msg: "Teacher and Student connected to class"
    })
  }
})

export { router as ClassConnect }
