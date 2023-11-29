import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchUserData from '../utils/FetchData';
import Logout from './Logout';
import SideNav from './SideNav';
import FetchTeacher from '../utils/FetchTeacher';

const Header = ({ token }) => {
  useEffect(() => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    const darkMode = localStorage.getItem('dark-mode');

    const enableDarkMode = () => {
      toggleBtn.classList.replace('fa-sun', 'fa-moon');
      body.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
    };

    const disableDarkMode = () => {
      toggleBtn.classList.replace('fa-moon', 'fa-sun');
      body.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
    };

    const toggleDarkMode = () => {
      const darkMode = localStorage.getItem('dark-mode');
      if (darkMode === 'disabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    };

    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    toggleBtn.onclick = toggleDarkMode;

    const profile = document.querySelector('.header .flex .profile');
    const search = document.querySelector('.header .flex .search-form');

    document.querySelector('#user-btn').onclick = () => {
      profile.classList.toggle('active');
      search.classList.remove('active');
    };

    document.querySelector('#search-btn').onclick = () => {
      search.classList.toggle('active');
      profile.classList.remove('active');
    };

    const sideBar = document.querySelector('.side-bar');

    document.querySelector('#menu-btn').onclick = () => {
      sideBar.classList.toggle('active');
      body.classList.toggle('active');
    };

    document.querySelector('#close-btn').onclick = () => {
      sideBar.classList.remove('active');
      body.classList.remove('active');
    };

    window.onscroll = () => {
      profile.classList.remove('active');
      search.classList.remove('active');

      if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
      }
    };
  }, []);

  const user =  FetchUserData(token);
  const teacher = FetchTeacher(token);

  return (
    <>
      <header className="header">
        <section className="flex">
          <Link to="/" className="logo">CoMATH</Link>

          <form action="" method="post" className="search-form">
            <input type="text" name="search_box" placeholder="search courses..." maxLength="100" required />
            <button type="submit" className="fa fa-search"></button>
          </form>

          <div className="icons">
            <div id="menu-btn" className="fa fa-bars"></div>
            <div id="search-btn" className="fa fa-search"></div>
            <div id="user-btn" className="fa fa-user"></div>
            <div id="toggle-btn" className="fa fa-sun"></div>
          </div>

          <div className='profile'>
            {token && user ? (
                <>
                  <img src={user.profileImg} alt="" />
                  <h3>{user.name}</h3>
                  <span>student</span>
                  <Link to="/user_profile" className="btn">view profile</Link>
                  <div className="flex-btn">
                    <Link to="/user_login" className="option-btn">login</Link>
                    <Link to="/user_signup" className="option-btn">register</Link>
                  </div>
                  <Logout />
                </>
              ) :token && teacher ? (
                <>
                  <img src={teacher.profileImg} alt="" />
                  <h3>{teacher.name}</h3>
                  <span>teacher</span>
                  <Link to="/teacher_profile" className="btn">view profile</Link>
                  <div className="flex-btn">
                    <Link to="/teacher_login" className="option-btn">login</Link>
                    <Link to="/teacher_signup" className="option-btn">register</Link>
                  </div>
                  <Logout />
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
        </section>
      </header>
      <SideNav token={token} />
    </>
  );
};

export default Header;