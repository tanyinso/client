import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PreviewVideo = () => {
     const {id} = useParams()
     const [teacher, setTeacher] = useState(null)
     const [content, setContent] = useState(null)
     useEffect(() => {
          
          const fetchData = async () => {
               try {
                 const contentRes = await axios.get(`http://localhost:8888/content/video/${id}`);
                 console.log(contentRes.data[0]);
                 setContent(contentRes.data[0]);
             
                 const teacherId = contentRes.data[0].teacher;
                 const teacherRes = await axios.get(`http://localhost:8888/teacher/profile/${teacherId}`);
                 console.log(teacherId, teacherRes.data);
                 setTeacher(teacherRes.data);
               } catch (error) {
                 console.log(error);
               }
             };

          fetchData()
     }, [id,setTeacher, setContent])

     return (
          <>
               <section className="watch-video">

                    <div className="video-container">
                         <div className="video">
                              <video src={content?.video} controls poster={content?.thumbnail} id="video"></video>
                         </div>
                         <h3 className="title">{content?.title}</h3>
                         <div className="info">
                              <p className="date"><i className="fas fa-calendar"></i><span>{content?.createdAt.slice(0,10)}</span></p>
                              <p className="date"><i className="fas fa-heart"></i><span>49 likes</span></p>
                         </div>
                         <div className="tutor">
                              <img src={teacher?.profileImg} alt="" />
                              <div>
                                   <h3>{teacher?.name}</h3>
                                   <span>{teacher?.proffession}</span>
                              </div>
                         </div>
                         <form action="" method="post" className="flex">
                              <a href="playlist.html" className="inline-btn">view playlist</a>
                              <button><i className="far fa-heart"></i><span>like</span></button>
                         </form>
                         <p className="description">
                              Get all lessions and get educated now...
                         </p>
                    </div>

               </section>

               <section className="comments">

                    <h1 className="heading">5 comments</h1>

                    <form action="" className="add-comment">
                         <h3>add comments</h3>
                         <textarea name="comment_box" placeholder="enter your comment" required maxLength="1000" cols="30" rows="10"></textarea>
                         <input type="submit" value="add comment" className="inline-btn" name="add_comment" />
                    </form>

                    <h1 className="heading">user comments</h1>

                    <div className="box-container">

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-1.jpg" alt="" />
                                   <div>
                                        <h3>Alex Mendez</h3>
                                        <span>13-11-2023</span>
                                   </div>
                              </div>
                              <div className="comment-box">amazing lessions</div>
                              <form action="" className="flex-btn">
                                   <input type="submit" value="edit comment" name="edit_comment" className="inline-option-btn" />
                                   <input type="submit" value="delete comment" name="delete_comment" className="inline-delete-btn" />
                              </form>
                         </div>

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-4.jpg" alt="" />
                                   <div>
                                        <h3>Nfor Presly</h3>
                                        <span>12-11-2023</span>
                                   </div>
                              </div>
                              <div className="comment-box">awesome tutorial!
                                   keep going!</div>
                         </div>

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-3.jpg" alt="" />
                                   <div>
                                        <h3>Tanyino Bright</h3>
                                        <span>11-11-2023</span>
                                   </div>
                              </div>
                              <div className="comment-box">amazing way of teaching!
                                   thank you so much!
                              </div>
                         </div>

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-4.jpg" alt="" />
                                   <div>
                                        <h3>Phillis Nana</h3>
                                        <span>10-11-2023</span>
                                   </div>
                              </div>
                              <div className="comment-box">loved it, thanks for the tutorial!</div>
                         </div>

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-5.jpg" alt=""/>
                                        <div>
                                             <h3>Wasi Emmanuela</h3>
                                             <span>09-11-2023</span>
                                        </div>
                              </div>
                              <div className="comment-box">this is what I have been looking for! thank you so much!</div>
                         </div>

                         <div className="box">
                              <div className="user">
                                   <img src="../images/pic-1.jpg" alt="" />
                                   <div>
                                        <h3>Besong Espany</h3>
                                        <span>08-11-2023</span>
                                   </div>
                              </div>
                              <div className="comment-box">thanks for the tutorial!

                                   how to download file?
                              </div>
                         </div>

                    </div>

               </section>
          </>
     )
}

export default PreviewVideo;
