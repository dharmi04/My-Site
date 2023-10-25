import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    context: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        alert('Email sent successfully!');
      } else {
        // Handle the case where the email sending failed
        alert('Email sending failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className='w-2/3 mt-10 p-4'>
        <h1 className='text-pink-500 font-bold text-5xl'>Contact Me</h1>
        <p className='text-white font-normal text-2xl justify-center mt-4 '>
          I am interested in freelance opportunities – especially ambitious projects.
        </p>
        <p className='text-white font-normal text-2xl justify-center '>
          However, if you have other requests or questions, don’t hesitate to contact me using the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mt-10 flex space-x-9 mb-5'>
            <div className='flex-row'>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border border-pink-500 rounded py-2 px-3 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-pink-500 bg-transparent w-44 text-lg"
                type="text"
                placeholder="Your Name" required
              />
            </div>
            <div className='flex-row'>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border border-pink-500 rounded py-2 px-3 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-pink-500 bg-transparent w-44 text-lg"
                type="text"
                placeholder="Your MailId" required
              />
            </div>
          </div>
          <div className='mb-5'>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border border-pink-500 rounded py-2 px-3 w-96 h-24 text-white focus:shadow-sm focus:outline-none focus:shadow-pink-500 bg-transparent text-xl"
              type="text"
              placeholder="Subject" required
            />
          </div>
          <div>
            <textarea
              name="context"
              value={formData.context}
              onChange={handleChange}
              className="shadow appearance-none border border-pink-500 rounded py-2 px-3 w-96 h-24 text-white leading-tight focus:shadow-sm focus:outline-none focus:shadow-pink-500 bg-transparent text-xl"
              type="text"
              placeholder="Context" required
            />
          </div>
          <div className='mt-5'>
            <button
              type="submit"
              className="bg-transperant border border-pink-500 text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-300 hover:shadow-sm hover:shadow-pink-500" 
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
