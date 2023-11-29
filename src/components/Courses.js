import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Box = ({ course }) => {
     const [teacher, setTeacher] = useState(null)
     const id = course?.teacher
     useEffect(() => {

          const fetchTeacher = async () => {
               try {
                    const response = await axios.get(`http://localhost:8888/teacher/profile/${id}`)
                    setTeacher(response.data)
               } catch (error) {
                    console.log(error)
                    return
               }
          }
          fetchTeacher()
     }, [id, setTeacher])
     return (
          <div className="box">
               <div className="tutor">
                    <img src={teacher?.profileImg} alt="" />
                    <div className="info">
                         <h3>{teacher?.name}</h3>
                         <span>{course?.createdAt.slice(0,10).concat( " At "+ course?.createdAt.slice(11, 19))}</span>
                    </div>
               </div>
               <div className="thumb">
                    <img src={course?.thumbnail} alt="" />
               </div>
               <h3 className="title">{course?.title}</h3>
               <div className='flex-btn'>
                    <Link to={`/teacher_profile/${course?.teacher}`} className='inline-btn'>See more</Link>
                    <Link to='/pay' className='inline-option-btn'>Buy course</Link>
               </div>
          </div>
     )
}


const Courses = () => {

     const [ourCourses, setOurCourses] = useState(null)

     useEffect(() => {
          const fetchCourses = async () => {
               try {
                    const response = await axios({
                         method: 'get',
                         url: 'http://localhost:8888/content/allcontent',
                    })
                    setOurCourses(response.data)
               } catch (error) {
                    console.log(error)
               }
          }
          fetchCourses()

     }, [setOurCourses])


     return (
          <section className="courses">

               <h1 className="heading">our courses</h1>

               <div className="box-container">
                    {ourCourses ? (ourCourses.map(course => {
                         return (
                              <Box key={course._id} course={course} />
                         )
                    })) : "Loading Courses"
                    }
               </div>
          </section>
     )
}

export default Courses
