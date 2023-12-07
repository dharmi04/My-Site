import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from './Nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    context: '',
    to_email: 'recipient@example.com', 
    from_email: 'sender@example.com', 
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mff766b', 'template_nnpw6mo', form.current, 'aWuKHrieh55Peg4KN')
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail successfully sent!! ");
        },
        (error) => {
          console.error(error.text);
          alert("Error in sending mail..Try again! ");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const gradientBackground = {
    background: 'rgb(195,147,34)',
    backgroundImage: 'linear-gradient(0deg, rgba(195,147,34,1) 0%, rgba(0,0,0,1) 76%)',
  };

  return (

    <div style={gradientBackground} >
      <Nav />
      <div className='md:w-2/3 w-full p-4'>
        <h1 className='text-white font-bold md:text-4xl text-3xl'>Contact Me</h1>
        <p className='text-white font-normal md:text-xl text-xl justify-center mt-4'>
          I am interested in freelance opportunities – especially ambitious projects.
        </p>
        <p className='text-white font-normal md:text-xl text-xl justify-center'>
          However, if you have other requests or questions, don’t hesitate to contact me using the form below.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="to_email" value={formData.to_email} />
          <input type="hidden" name="from_email" value={formData.from_email} />
          <div className='mt-10 flex  space-x-9 mb-5'>
            <div className=' flex md:flex-row flex-col'>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border border-white rounded py-2 px-3 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-white bg-transparent md:w-44 w-32 text-lg"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className='flex md:flex-col flex-row'>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border border-white rounded py-2 px-3 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-white bg-transparent md:w-44 w-32 text-lg"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className='mb-5'>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border border-white rounded py-2 px-3 md:w-96 w-72 h-24 text-white focus:shadow-sm focus:outline-none focus:shadow-white bg-transparent text-xl"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <textarea
              name="context"
              value={formData.context}
              onChange={handleChange}
              className="shadow appearance-none border border-white rounded py-2 px-3 md:w-96 w-72 h-24 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-white bg-transparent text-xl"
              type="text"
              placeholder="Context"
              required
            />
          </div>
          <div className='mt-5'>
            <button
              type="submit"
              className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-300 hover:shadow-sm hover:shadow-white w-28 text-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
