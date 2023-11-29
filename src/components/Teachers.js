import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TeachersBox from './TeachersBox'
import axios from 'axios'

const Teachers = () => {

     const [teachers, setTeachers] = useState(null)
     useEffect(()=> {
          const fetchData = async ( ) => {
               try {
                    const response = await axios({
                         method: 'get',
                         url:'http://localhost:8888/teacher/allteachers',
                    })
                    setTeachers(response.data)
               } catch (error) {
                    console.log(error)
               }
          }

          fetchData()
     },[setTeachers])
     return (
          <section className="teachers">

               <h1 className="heading">expert teachers</h1>

               <form action="" method="post" className="search-tutor">
                    <input type="text" name="search_box" placeholder="search tutors..." required maxLength="100" />
                    <button type="submit" className="fas fa-search" name="search_tutor"></button>
               </form>

               <div className="box-container">

                    <div className="box offer">
                         <h3>become a tutor</h3>
                         <p>get educated</p>
                         <Link href="register.html" className="inline-btn">get started</Link>
                    </div>

                    { teachers ?(teachers.map(teacher => {
                         return (
                              <TeachersBox 
                                   key={teacher._id} 
                                   id={teacher._id}
                                   profession={teacher.proffession}
                                   name={teacher.name} 
                                   profile={teacher.profileImg}
                              />
                         ) }
                         )): ""}

               </div>

          </section>


     )
}

export default Teachers
