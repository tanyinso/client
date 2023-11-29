import React from 'react'
import { Link } from 'react-router-dom'
import FetchTeacher from '../utils/FetchTeacher'

const TeacherSideNav = ({ token }) => {
     const userData = FetchTeacher(token)
     return (
          <>
               <div className="side-bar">

                    <div id="close-btn" className="close-side-bar">
                         <i className="fas fa-times"></i>
                    </div>

                    <div className="profile">
                         {token ? (
                              userData && (
                                   <>
                                        <img src={userData.teacher.profileImg} alt="" />
                                        <h3>{userData.teacher.name}</h3>
                                        <span>student</span>
                                        <Link to={`/user_profile`} className="btn">
                                             view profile
                                        </Link>
                                   </>
                              )
                         ) : (
                              <>
                                   <h3>Please login or register</h3>
                                   <div className="flex-btn">
                                        <Link to="/teacher_login" className="option-btn">
                                             Login
                                        </Link>
                                        <Link to="/teacher_signup" className="option-btn">
                                             Register
                                        </Link>
                                   </div>
                              </>
                         )}
                    </div>

                    <nav className="navbar">
                         <Link href="dashboard.php"><i className="fas fa-home"></i><span>home</span></Link>
                         <Link href="playlists.php"><i className="fa-solid fa-bars-staggered"></i><span>playlists</span></Link>
                         <Link href="contents.php"><i className="fas fa-graduation-cap"></i><span>contents</span></Link>
                         <Link href="comments.php"><i className="fas fa-comment"></i><span>comments</span></Link>
                         <Link href="../components/admin_logout.php" onclick="return confirm('logout from this website?');"><i className="fas fa-right-from-bracket"></i><span>logout</span></Link>
                    </nav>

               </div>

          </>
     )
}

export default TeacherSideNav
