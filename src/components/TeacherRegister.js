import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const TeacherRegister = () => {

     const [profession, setProffession] = useState()
     const location = useNavigate();
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [image, setImage] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();

          const userData = new FormData();
          userData.append('name', name);
          userData.append('email', email);
          if (password === confirmPassword) {
               userData.append('password', password);
               userData.append('comfirnPassword', confirmPassword);
          } else {
               console.log('passwords do not match');
               return
          }
          userData.append('proffession', profession)
          userData.append('profileImg', image);
          console.log(userData);

          try {
               const res = await axios({
                    method: 'post',
                    url: "http://localhost:8888/teacher/register",
                    data: userData,
                    headers: {
                         "Content-Type": "multipart/form-data"
                    }
               })

               setName('')
               setEmail('')
               setPassword('')
               setProffession('')
               setConfirmPassword('')
               setImage('')
               location('/teacher_login');
               console.log(res);


          } catch (error) {
               console.log(error);
          }

     }

     return (
          <section className="form-container">

               <form className="register" onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>register new</h3>
                    <div className="flex">
                         <div className="col">
                              <p>your name <span>*</span></p>
                              <input type="text" value={name} placeholder="enter your name" maxLength="50" required className="box" onChange={(e) => setName(e.target.value)} />
                              <p>your profession <span>*</span></p>
                              <select value={profession} className="box" onChange={(e) => setProffession(e.target.value)} required>
                                   <option value="" disabled selected>-- select your profession</option>
                                   <option value={'Developer'}>developer</option>
                                   <option value={'Designer'}>desginer</option>
                                   <option value={'Teacher'}>teacher</option>
                                   <option value={'Engineer'}>engineer</option>
                              </select>
                              <p>your email <span>*</span></p>
                              <input type="email" value={email} placeholder="enter your email" maxLength="20" required className="box" onChange={(e) => setEmail(e.target.value)} />
                         </div>
                         <div className="col">
                              <p>your password <span>*</span></p>
                              <input type="password" value={password} placeholder="enter your password" maxLength="20" required className="box" onChange={(e) => setPassword(e.target.value)} />
                              <p>confirm password <span>*</span></p>
                              <input type="password" value={confirmPassword} placeholder="confirm your password" maxLength="20" required className="box" onChange={(e) => setConfirmPassword(e.target.value)} />
                              <p>select pic <span>*</span></p>
                              <input type="file" name="image" accept="image/*" required className="box" onChange={(e) => setImage(e.target.files[0])} />
                         </div>
                    </div>
                    <p className="link">already have an account? <Link to="/teacher_login">login now</Link></p>
                    <input type="submit" name="submit" value='Register' className="btn" />
               </form>

          </section>
     )
}

export default TeacherRegister
