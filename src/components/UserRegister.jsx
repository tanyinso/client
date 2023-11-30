import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const UserRegister = () => {
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
      userData.append('confirmPassword', confirmPassword);
    } else {
      console.log('Passwords do not match');
      return;
    }
    userData.append('profileImg', image);

    try {
      await axios.post("http://localhost:8888/user/register", userData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setImage('');
      location('/user_login');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='form-container'>
      <form onSubmit={handleSubmit}>
        <h3>Register Now</h3>
        <p>Your name <span>*</span></p>
        <input type="text" placeholder="presly takop" required maxLength="100" className="box" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Your email <span>*</span></p>
        <input type="email" required placeholder="preslytakop@gmail.com" maxLength="100" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Your password <span>*</span></p>
        <input type="password" placeholder="enter your password" maxLength="50" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>Confirm password <span>*</span></p>
        <input type="password" placeholder="confirm your new password" maxLength="50" className="box" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <p>Select pic <span>*</span></p>
        <input type="file" accept="image/*" className="box" onChange={(e) => setImage(e.target.files[0])} />
        <input type="submit" value="Register Now" className="btn" />
      </form>
    </section>
  );
};

export default UserRegister;