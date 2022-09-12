/*
import express from 'express'
import { Student } from '../entities/student'
import { Teacher } from '../entities/teacher'
import { Class } from '../entities/class'
import { consumers } from 'stream'

const router = express.Router()

router.put(
  '/api/student/:std_id/teacher/:tch_id/class/:cls_id',
  async (req, res) => {
    const { std_id, tch_id, cls_id } = req.params

    const student = await Student.findOne({where: {id: std_id}})
    const teacher = await Teacher.findOne({where: {id: tch_id}})
    const course = await Class.findOne({where: {id: parseInt(cls_id)}})

    if (!course || !teacher || !student){
      return res.json({
        msg: "Invalid student/teacher/class id! Try again."
      })
    } 

    course.students = [student]
    course.teacher = teacher

    await course.save()
    return res.json({
      msg: "Class connected to student/teacher"
    })
  }
)

export { router as ClassConnect1 }
*/
