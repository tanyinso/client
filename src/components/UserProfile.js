
import React from 'react'
import { Link } from 'react-router-dom'
import FetchUserData from '../utils/FetchData'

const UserProfile = ({ token }) => {

     const user = FetchUserData(token)

     return (
          <section className="user-profile">

               <h1 className="heading">your profile</h1>

               <div className="info">
                    {token && user ? (
                         <div className="user">
                              <img src={user.profileImg} alt="" />
                              <h3>{user.name}</h3>
                              <p>student</p>
                              <Link to={`/user_update/${user._id}`} className="inline-btn">update profile</Link>
                         </div>
                    ) : (
                         <>
                              <h3>please login or register</h3>
                              <div className="flex-btn">
                                   <Link to='/user_login' className="option-btn">login</Link>
                                   <Link to='/user_signup' className="option-btn">register</Link>
                              </div>
                         </>
                    )}

                    <div className="box-container">

                         <div className="box">
                              <div className="flex">
                                   <i className="fas fa-bookmark"></i>
                                   <div>
                                        <span>18</span>
                                        <p>saved lessons</p>
                                   </div>
                              </div>
                              <Link to='/courses' className="inline-btn">view lessons</Link>
                         </div>

                         <div className="box">
                              <div className="flex">
                                   <i className="fas fa-heart"></i>
                                   <div>
                                        <span>33</span>
                                        <p>videos liked</p>
                                   </div>
                              </div>
                              <Link className="inline-btn">view liked</Link>
                         </div>

                         <div className="box">
                              <div className="flex">
                                   <i className="fas fa-comment"></i>
                                   <div>
                                        <span>12</span>
                                        <p>videos comments</p>
                                   </div>
                              </div>
                              <Link className="inline-btn">view comments</Link>
                         </div>

                    </div>
               </div>

          </section>
     )
}

export default UserProfile
