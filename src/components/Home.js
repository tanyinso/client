import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import CourseBox from './CourseBox'
import axios from 'axios'

const Home = () => {

     const [ourCourses, setOurCourses] = useState('')

     useEffect(() => {
          const fetchData = async ( ) => {
               try {
                    const response = await axios({
                         method: 'get',
                         url:'http://localhost:8888/content/allcontent',
                    })
                    setOurCourses(response.data)
               } catch (error) {
                    console.log(error)
               }
          }

          fetchData()
        
     },[setOurCourses])

     return (
          <div>
               <section className="home-grid">


                    <div className="box-container">

                         <div className="box hero-box">
                              <img src="images/header.svg" alt="" className="hero-img"/>
                         </div>

                         <div className="box">
                              <h3 className="title">popular topics</h3>
                              <div className="flex">
                                   <p><i className="fab fa-html5"></i><span>Web development</span></p>
                                   <p><i className="fab fa-css3"></i><span>Data structures</span></p>
                                   <p><i className="fab fa-js"></i><span>Algebra</span></p>
                                   <p><i className="fab fa-react"></i><span>Computer Architecture</span></p>
                                   <p><i className="fab fa-php"></i><span>C programming</span></p>
                                   <p><i className="fab fa-bootstrap"></i><span>Calculus</span></p>
                              </div>
                         </div>

                         <div className="box">
                              <h3 className="title">become a tutor</h3>
                              <p className="tutor">Become an instructor </p>
                              <Link to='/teacher_signup' className="inline-btn">get started</Link>
                         </div>

                    </div>

               </section>



               <section className="playlist-videos">

                    <h1 className="heading">ALL Courses</h1>

                    <div className="box-container">

                         { ourCourses? (ourCourses.slice(0,6).map(course => {
                              return (
                                   <CourseBox key={course._id} id={course._id} image={course.thumbnail} title={course.title} desc={course.description}/>
                              )
                         })): "loading courses"}
                    </div>

                    <div className="more-btn">
                         <Link to='/courses' className="inline-option-btn">view all courses</Link>
                    </div>

               </section>

          </div>

     )
}

export default Home
