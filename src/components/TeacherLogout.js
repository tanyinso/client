import React from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookie = new Cookies()



const TeacherLogout = () => {
     const navigate = useNavigate();

     const handleLogout = () => {
          // Clear the user's session or token (example using localStorage)
          cookie.remove('TOKEN');
          navigate('/')
          window.location.reload()
          // Redirect the user to the login page
          //history.push('/login');
     };
     return (
          <Link onClick={handleLogout} to='/'><i className="fas fa-right-from-bracket"></i><span>logout</span></Link>
     )
}

export default TeacherLogout
