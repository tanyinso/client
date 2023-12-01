import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const UserLogin = () => {
  const cookie = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedin, setIsLogedin] = useState(false);
  const [message, setMessage] = useState("");
  const location = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const UserLogin = new FormData();
    UserLogin.append('email', email);
    UserLogin.append('password', password);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8888/user/login',
        data: UserLogin,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage(response.data.message);
      cookie.set('TOKEN', response.data.token, {
        path: '/'
      });
      location('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
      setIsLogedin(true);
      setMessage(error.message);
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleLogin}>
        <h3>Login Now</h3>
        <p>Your email <span>*</span></p>
        <input type="email" placeholder="enter your email" required maxLength="50" className="box" onChange={(e) => setEmail(e.target.value)} />
        <p>Your password <span>*</span></p>
        <input type="password" placeholder="enter your password" required maxLength="20" className="box" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login Now" className="btn" />
        {isLogedin ? (<div className="alert alert-error">{message}</div>) : ""}
      </form>
    </section>
  );
};

export default UserLogin;