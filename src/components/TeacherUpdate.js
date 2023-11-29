import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

const TeacherUpdate = ({token}) => {
     const navigate = useNavigate()
     const {id} = useParams()
     const [name, setName] = useState('');
     const [profession, setProffession] = useState()
     const [email, setEmail] = useState('');
     const [oldPassword, setOldPassword] = useState('');
     const [newPassword, setNewPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [profilePic, setProfilePic] = useState(null);

     useEffect(() => {
          const fetchUser = async () => {
               try {
                    const response = await axios.get(`http://localhost:8888/teacher/profile/${id}`)
                    const user = response.data
                    setName(user.name)
                    setEmail(user.email)
                    setProfilePic(user.profileImg)
               } catch (error) {
                    console.log(error)
                    return
               }
          }
          fetchUser()
     },[id, setName, setEmail, setOldPassword,setNewPassword,setConfirmPassword,setProfilePic] )

     const handleSubmit = async (e) => {
          e.preventDefault();

          const formData = new FormData();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('old_pass', oldPassword);
          formData.append('new_pass', newPassword);
          formData.append('c_pass', confirmPassword);
          formData.append('profileImg', profilePic);

          try {
               await axios.post('http://localhost:8888/teacher/update/', formData, {
                    headers: {
                          Authorization: 'Bearer ' + token,
                         'Content-Type': 'multipart/form-data'
                    }
               });

               navigate('/dashboard')
               window.location.reload()
               // Handle success, e.g., show a success message to the user
          } catch (error) {
               console.error(error);
               // Handle error, e.g., show an error message to the user
          }
     };

     return (
          <section className="form-container">
               <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>Update Profile</h3>
                    <p>Update Name</p>
                    <input
                         type="text"
                         name="name"
                         placeholder="collins"
                         maxLength="50"
                         className="box"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
                     <p>Update profession</p>
                              <select value={profession} className="box" onChange={(e) => setProffession(e.target.value)} required>
                                   <option value="" disabled selected>-- select your profession</option>
                                   <option value={'Developer'}>developer</option>
                                   <option value={'Designer'}>desginer</option>
                                   <option value={'Teacher'}>teacher</option>
                                   <option value={'Engineer'}>engineer</option>
                              </select>
                    <p>Update Email</p>
                    <input
                         type="email"
                         name="email"
                         placeholder="collins@gmail.com"
                         maxLength="50"
                         className="box"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>Previous Password</p>
                    <input
                         type="password"
                         name="old_pass"
                         placeholder="Enter your old password"
                         maxLength="20"
                         className="box"
                         value={oldPassword}
                         onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <p>New Password</p>
                    <input
                         type="password"
                         name="new_pass"
                         placeholder="Enter your new password"
                         maxLength="20"
                         className="box"
                         value={newPassword}
                         onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <p>Confirm Password</p>
                    <input
                         type="password"
                         name="c_pass"
                         placeholder="Confirm your new password"
                         maxLength="20"
                         className="box"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p>Update Profile Picture</p>
                    <input
                         type="file"
                         accept="image/*"
                         className="box"
                         onChange={(e) => setProfilePic(e.target.files[0])}
                    />
                    <input type="submit" value="Update Profile" name="submit" className="btn" />
               </form>
          </section>
     );
};

export default TeacherUpdate;