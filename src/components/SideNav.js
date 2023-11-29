
import { Link } from 'react-router-dom';
import FetchUserData from '../utils/FetchData';
import FetchTeacher from '../utils/FetchTeacher';
import TeacherLogout from './TeacherLogout';

const SideNav = ({ token }) => {
     const user = FetchUserData(token)
     const teacher = FetchTeacher(token)
     return (
          <div className="side-bar">
               <div id="close-btn" className="close-side-bar">
                    <i className="fa fa-close"></i>
               </div>

               <div className="profile">
                    {token && user ? (
                         <>
                              <img src={user.profileImg} alt="" />
                              <h3>{user.name}</h3>
                              <span>student</span>
                              <Link to={`/user_profile`} className="btn">
                                   view profile
                              </Link>
                         </>
                    ) : token && teacher ? (
                         <>
                              <img src={teacher.profileImg} alt="" />
                              <h3>{teacher.name}</h3>
                              <span>Teacher</span>
                              <Link to={`/dash_profile/${teacher?._id}`} className="btn">
                                   view profile
                              </Link>
                         </>
                    ) : (
                         <>
                              <h3>please login or register</h3>
                              <div className="flex-btn">
                                   <Link to="/user_login" className="option-btn">login</Link>
                                   <Link to="/user_signup" className="option-btn">register</Link>
                              </div>
                         </>
                    )}
               </div>
               <nav className="navbar">
                    {token && user ? (
                         <>
                              <Link to="/">
                                   <i className="fa fa-home"></i>
                                   <span>Home</span>
                              </Link>
                              <Link to="/about">
                                   <i className="fa fa-question"></i>
                                   <span>About</span>
                              </Link>
                              <Link to="/courses">
                                   <i className="fa fa-graduation-cap"></i>
                                   <span>Courses</span>
                              </Link>
                              <Link to="/teachers">
                                   <i className="fa fa-users"></i>
                                   <span>Teachers</span>
                              </Link>
                              <Link to="/contact">
                                   <i className="fa fa-headphones"></i>
                                   <span>Contact</span>
                              </Link>
                         </>
                    ) : token && teacher ? (
                         <>
                              <Link to='/dashboard'><i className="fas fa-home"></i><span>home</span></Link>
                              <Link to="/content"><i className="fas fa-graduation-cap"></i><span>contents</span></Link>
                              <Link to='/404'><i className="fas fa-comment"></i><span>comments</span></Link>
                              <TeacherLogout />
                         </>
                    ): (
                         <>
                              <Link to="/">
                                   <i className="fa fa-home"></i>
                                   <span>Home</span>
                              </Link>
                              <Link to="/about">
                                   <i className="fa fa-question"></i>
                                   <span>About</span>
                              </Link>
                              <Link to="/courses">
                                   <i className="fa fa-graduation-cap"></i>
                                   <span>Courses</span>
                              </Link>
                              <Link to="/teachers">
                                   <i className="fa fa-users"></i>
                                   <span>Teachers</span>
                              </Link>
                              <Link to="/contact">
                                   <i className="fa fa-headphones"></i>
                                   <span>Contact</span>
                              </Link>
                         </>
                    ) }

               </nav>

          </div>
     );
};

export default SideNav;


