import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:kakyea13@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='bg-gray-900 mt-10 flex flex-col justify-center items-center'>
      <div className="bg-gray-900 pt-20 flex flex-col justify-center md:flex-row md:w-10/12">
        <div className="md:w-9/12 p-6 text-white">
          <p className="text-2xl font-bold md:text-6xl">Contact</p>
          <p className="mt-4">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-6 md:mt-0 px-4 md:w-10/12">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-200 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-900  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-200 font-bold mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className=" hover:text-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative">SEND MESSAGE <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700"></span></button>
          </div>
        </form>
      </div>

      <div className="bg-gray-900 flex flex-col items-center justify-center md:w-10/12">
      <hr className="w-80 h-0.5 mt-20 md:w-10/12" />

      <div className='mt-10 mb-10 md:flex justify-between w-10/12'>
      <h1 className="font-bold text-2xl">adamkeyes</h1>
      
        <div className="w-40 items-center justify-center">

      
      <div className="w-40 flex flex-row mt-4 justify-evenly">
        <FaGithub />
        <SiFrontendmentor />
        <FaLinkedin />
        <FaTwitter />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
