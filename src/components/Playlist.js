import React from 'react';
import { Link } from 'react-router-dom';
const Playlist = () => {
     return (
          <div>
               <section className="playlist-details">

                    <h1 className="heading">course titles</h1>

                    <div className="row">

                         <div className="column">
                              <form action="" method="post" className="save-playlist">
                                   <button type="submit"><i className="far fa-bookmark"></i> <span>save lessions</span></button>
                              </form>

                              <div className="thumb">
                                   <img src="images/thumb-1.png" alt="" />
                                   <span>10 videos</span>
                              </div>
                         </div>
                         <div className="column">
                              <div className="tutor">
                                   <img src="images/pic-2.jpg" alt="" />
                                   <div>
                                        <h3>Rose Sharon</h3>
                                        <span>11-11-2023</span>
                                   </div>
                              </div>

                              <div className="details">
                                   <h3>Computer Science </h3>
                                   <p>Top topics</p>
                                   <Link href="teacher_profile.html" className="inline-btn">view profile</Link>
                              </div>
                         </div>
                    </div>

               </section>

               <section className="playlist-videos">

                    <h1 className="heading">Course list videos and pdf notes</h1>

                    <div className="box-container">

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/post-1-1.png" alt="" />
                              <h3>Data Structure tutorial (part 01)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/post-1-2.png" alt="" />
                              <h3>Data Structure tutorial (part 02)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/post-1-3.png" alt="" />
                              <h3>Data Structure tutorial (part 03)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/algorithm.png" alt="" />
                              <h3>Algorithm tutorial (part 01)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/algorithm.png" alt="" />
                              <h3>Algorithm tutorial (part 02)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                         <i className="fas fa-play"></i>
                         <img src="images/algorithm.png" alt=""/>
                              <h3>ALgorithm tutorial (part 03)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/c-programming.png" alt="" />
                              <h3>C programming (part 01)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/c-programming.png" alt="" />
                              <h3>C programming (part 02)</h3>
                         </Link>

                         <Link className="box" to='/preview_video'>
                              <i className="fas fa-play"></i>
                              <img src="images/c-programming.png" alt="" />
                              <h3>C programming (part 03)</h3>
                         </Link>
                    </div>

               </section>

          </div>
     )
}

export default Playlist
