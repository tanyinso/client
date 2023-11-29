import { Link } from "react-router-dom"


const CourseBox = ({title,image,desc,id}) => {
     return (
          <Link className="box" to={`/preview_video/${id}`}>
               <i className="fas fa-play"></i>
               <h2 className="title">{title}</h2>
               <img src={image} alt="" className="humb" />
               <h3>{desc}</h3>
               <Link to='/pay' className="option-btn">Buy course</Link>
          </Link>
     )
}

export default CourseBox
