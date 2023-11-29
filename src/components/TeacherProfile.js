import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CourseBox from './CourseBox'

const TeacherProfile = () => {
     const { id } = useParams()
     const [teacher, setTeacher] = useState(null)
     const [contents, setContent] = useState(null)
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
          
          const fetchContent = async () => {
               try {
                    const response = await axios.get(`http://localhost:8888/content/teacherContent/${id}`)
                    setContent(response.data)
               } catch (error) {
                    console.log(error)
                    return
               }
          }

          fetchContent()
          fetchTeacher()
     }, [id,setTeacher])


     return (
          <>
               <section className="teacher-profile">

                    <h1 className="heading">Profile datails</h1>

                    <div className="details">
                         <div className="tutor">
                              <img src={teacher?.profileImg} alt="" />
                              <h3>{teacher?.name}</h3>
                              <span>{teacher?.profession}</span>
                         </div>
                         <div className="flex">
                              <p>total lessons : <span>12</span></p>
                              <p>total videos : <span>12</span></p>
                              <p>total likes : <span>2060</span></p>
                         </div>
                    </div>

               </section>

               <section className="playlist-videos">

                    <h1 className="heading">Videos</h1>

                    <div className="box-container">
                         {contents? (
                              contents.map(content => {
                                   return (
                                        <CourseBox key={content._id} id={content._id} image={content.thumbnail} title={content.title} desc={content.description}/>
                                   )
                              })
                         ): <h2 className='danger'>No courses created</h2>}
                    </div>

               </section>

          </>
     )
}

export default TeacherProfile
