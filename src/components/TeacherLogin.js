import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'


     

const TeacherLogin = () => {
     const cookie = new Cookies()
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isLogedin, setIsLogedin] = useState(false);
     const [message, setMessage] = useState("");
     const location = useNavigate();

     const handleLogin = async (e) => {
          e.preventDefault();
          const UserLogin = new FormData();
          UserLogin.append('email', email);
          UserLogin.append('password', password)

          try {
               const response = await axios({
                    method: 'post',
                    url: 'http://localhost:8888/teacher/login',
                    data: UserLogin,
                    headers: {
                         'Content-Type': 'application/json'
                    }
               });

               setMessage(response.data.message)
               cookie.set('TOKEN', response.data.token, {
                    path: '/'
               });
               location('/dashboard');
               window.location.reload()
          } catch (error) {
               console.log(error);
               setIsLogedin(true)
               setMessage(error.response.data.message)
          }
     }
     return (
          <section className="form-container">

               <form onSubmit={handleLogin} encType="multipart/form-data" className="login">
                    <h3>welcome back!</h3>
                    <p>your email <span>*</span></p>
                    <input type="email" value={email} placeholder="enter your email" maxLength="20" required className="box" onChange={(e)=> setEmail(e.target.value)} />
                    <p>your password <span>*</span></p>
                    <input type="password" value={password} placeholder="enter your password" maxLength="20" required className="box" onChange={(e)=> setPassword(e.target.value)} />
                    <p className="link">don't have an account? <a href="register.php">register new</a></p>
                    <input type="submit" name="submit" value="login now" className="btn" />
                    {(isLogedin)? (<div className="alert alert-error">{message}</div>): "" }
               </form>

          </section>
     )
}

export default TeacherLogin
