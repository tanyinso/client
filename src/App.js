
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserRegister from './components/UserRegister';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import UserLogin from './components/UserLogin';
import Payment from './components/Payment';
import Teachers from './components/Teachers';
import TeacherProfile from './components/TeacherProfile';
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import PreviewVideo from './components/PreviewVideo';
import Dashboard from './components/Dashboard';
import Cookies from 'universal-cookie'
import TeacherRegister from './components/TeacherRegister';
import AddContent from './components/AddContent';
import TeacherLogin from './components/TeacherLogin';
import Missing from './components/404';
import TeacherDashProfile from './components/TeacherDashProfile';
import TeacherUpdate from './components/TeacherUpdate';

const cookies = new Cookies();
const token = cookies.get("TOKEN");
console.log(token)
function App() {
     return (
          <>
               <Header token={token}/>
               <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/courses' element={<Courses /> } />   
                    <Route path='/contact' element={ <Contact /> }/>
                    <Route path='/user_signup' element={<UserRegister />} />
                    <Route path='/user_login' element={<UserLogin />} />
                    <Route path='/pay' element={<Payment /> } />
                    <Route path='/teachers' element={<Teachers /> } />
                    <Route path='/add_content' element={<AddContent token={token}/> } />
                    <Route path='/teacher_login' element={<TeacherLogin /> } />
                    <Route path='/teacher_signup' element={<TeacherRegister /> } />
                    <Route path='/teacher_profile/:id' element={<TeacherProfile />} />
                    <Route path='/user_profile/' element={<UserProfile token={token} />} />
                    <Route path='/user_update/:id' element={<UpdateUser token={token}/>} />
                    <Route path='/teacher_update/:id' element={<TeacherUpdate token={token}/>} />
                    <Route path='/preview_video/:id' element={<PreviewVideo/>}/>
                    <Route path='/dashboard' element={<Dashboard token={token} />}/>
                    <Route path='/dash_profile/:id' element={<TeacherDashProfile />}/>
                    <Route path='/*' element={<Missing />} />
               </Routes>
               <Footer />
          </>
     );
}

export default App;
