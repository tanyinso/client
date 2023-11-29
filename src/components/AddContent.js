import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AddContent = ({token}) => {
     const navigate = useNavigate()
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [thumbFile, setThumbFile] = useState(null);
     const [videoFile, setVideoFile] = useState(null);

     const handleTitleChange = (event) => {
          setTitle(event.target.value);
     };

     const handleDescriptionChange = (event) => {
          setDescription(event.target.value);
     };

     const handleThumbFileChange = (event) => {
          const file = event.target.files[0];
          setThumbFile(file);
     };

     const handleVideoFileChange = (event) => {
          const file = event.target.files[0];
          setVideoFile(file);
     };

     const handleSubmit = async (event) => {
          event.preventDefault();

          if (!title || !description || !thumbFile || !videoFile) {
               alert('All fields are required');
               return;
          }

          try {
               const formData = new FormData();
               formData.append('title', title);
               formData.append('description', description);
               formData.append('thumb', thumbFile);
               formData.append('video', videoFile);

               const response = await axios.post('http://localhost:8888/content/create', formData, {
                    headers: {
                         'Content-Type': 'multipart/form-data',
                         'Authorization': 'Bearer '+ token,
                    },
               });

               console.log('Content created:', response.data);
               // Reset form fields and files
               setTitle('');
               setDescription('');
               setThumbFile(null);
               setVideoFile(null);
               navigate('/dashboard')
               window.location.reload()
          } catch (error) {
               console.error('Error creating content:', error);
          }
     };
     return (

          <section className='video-form'>
               <h3 className='heading'>upload Content</h3>
               <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <h3>Add Content</h3>
                    <p>video title <span>*</span></p>
                    <input type="text" name="title" maxLength="100" required placeholder="enter video title" className="box" onChange={handleTitleChange} />
                    <p>video description <span>*</span></p>
                    <textarea name="description" className="box" required placeholder="write description" maxLength="1000" cols="30" rows="10" onChange={handleDescriptionChange}></textarea>
                    <p>select thumbnail <span>*</span></p>
                    <input type="file" name="thumb" accept="image/*" required className="box" onChange={handleThumbFileChange} />
                    <p>select video <span>*</span></p>
                    <input type="file" name="video" accept="video/*" required className="box" onChange={handleVideoFileChange} />
                    <input type="submit" value="upload video" name="submit" className="btn" />
               </form>
          </section>
     )
}

export default AddContent
