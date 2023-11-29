import React from 'react'
import { Link } from 'react-router-dom'

const TeachersBox = ({profile, name, profession, id}) => {
     return (
          <div className="box">
               <div className="tutor">
                    <img src={profile} alt="" />
                    <div>
                         <h3>{name}</h3>
                         <span>{profession}</span>
                    </div>
               </div>
               <p>total videos : <span>1</span></p>
               <p>total likes : <span>2</span></p>
               <Link to={`/teacher_profile/${id}`} className="inline-btn">view profile</Link>
          </div>
     )
}

export default TeachersBox
