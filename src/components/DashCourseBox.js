import React from 'react'
import FetchTeacher from '../utils/FetchTeacher'
import { Link } from 'react-router-dom'

const DashCourseBox = ({ createdOn, thumb, token, title ,desc}) => {
     const teacher = FetchTeacher(token)
     return (
          <div className="box">
               <div className="tutor">
                    <img src={teacher?.profileImg} alt="" />
                    <div className="info">
                         <h3>{teacher?.name}</h3>
                         <span>{createdOn.slice(0,10)}</span>
                    </div>
               </div>
               <div className="thumb">
                    <img src={thumb} alt="" />
               </div>
               <h3 className="title">{title}</h3>
               <h4 className='desc'>{desc}</h4>
               <Link className='btn' to='/update'>Update content</Link>
          </div>
     )
}

export default DashCourseBox
