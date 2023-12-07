import React from 'react';
import Nav from './Nav';
import image from '../assets/girlvector.webp';

const Home = () => {
  const gradientBackground = {
    background: 'rgb(195,147,34)',
    backgroundImage: 'linear-gradient(0deg, rgba(195,147,34,1) 0%, rgba(0,0,0,1) 76%)',
  };

  return (
    <div className='relative h-screen overflow-hidden' style={gradientBackground}>
        <Nav />
      <div className=' items-center h-full z-1 flex flex-row'>
      <div className='w-1/2 flex mb-2 '>
<img src={image} />
</div>
        <div className='text-white md:text-2xl text-lg mt-2 space-y-5 items-center w-1/2 pr-6 '>
          {/* <h1 className='text-white md:text-4xl text-xl border-b-4 text-center font-bold p-3 '>Exploring Tech and Security</h1> */}
          <p className=''>
            Hello, I'm Dharmi Patel, a dedicated front-end developer. Beyond the world of code, I harbor a keen
            interest in cybersecurity.
          </p>

          <p className=''>
            As a team player, I bring technical expertise and a commitment to perfection. Challenges are opportunities for innovation, and I thrive in collaborative environments, propelling us toward shared goals.
          </p>

          <p className=''>
            Let's connect and explore the possibilities at the intersection of
            technology and security. Together, we can create digital experiences
            that not only captivate but also ensure a secure online environment.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
