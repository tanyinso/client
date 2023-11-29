import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashCourseBox from './DashCourseBox'
import FetchTeacher from '../utils/FetchTeacher'


const Dashboard = ({ token }) => {
     const [courses, setCourses] = useState(null)
     useEffect(() => {
          const fetchCourses = async () => {

               try {
                    const response = await axios.get("http://localhost:8888/content/mycontent", {
                         headers: {
                              Authorization: 'Bearer ' + token,
                         }
                    })
                    setCourses(response.data)
               } catch (error) {
                    console.log(error)
                    return
               }

          }
          if (token) {
               fetchCourses()
          }
     }, [token, setCourses])
     const teacher = FetchTeacher(token)
     return (
          <section className="dashboard">

               <h1 className="heading">dashboard</h1>

               <div className="box-container">

                    <div className="box">
                         <h3>welcome! {teacher?.name}</h3>
                         <p>Hello</p>
                         <Link to={`/dash_profile/${teacher?._id}`} className="btn">view profile</Link>
                    </div>

                    <div className="box">
                         <h3>Videos</h3>
                         <p>{courses?.count > 0 ? courses?.count: 0}</p>
                         <Link to="/add_content" className="btn">add new content</Link>
                    </div>

                    <div className="box">
                         <h3>quick select</h3>
                         <p>login or register</p>
                         <div className="flex-btn">
                              <Link to='/teacher_login' className="option-btn">login</Link>
                              <Link href="teacher_signup" className="option-btn">register</Link>
                         </div>
                    </div>

               </div>
               <div className='courses'>
                    <h1 className="heading">My courses</h1>
                    <div className='box-container'>
                         {courses?.content.map(course => {
                              return (
                                   <DashCourseBox
                                   key={course._id} 
                                   thumb={course.thumbnail} 
                                   title={course.title}
                                   token={token}
                                   createdOn={course.createdAt} 
                                   desc={course.description} />
                              )
                         })}
                    </div>
               </div>
          </section>
     )
}

export default Dashboard
