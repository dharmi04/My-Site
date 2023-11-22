import React from 'react';
import Particles from 'react-particles';
import './Home.css';

const Home = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Animated background using react-particles-js */}
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 80,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
        className="absolute w-full h-full"
      /> */}

      <div className='flex justify-center items-center h-full'>
        
        <div className='text-white md:text-3xl text-lg mt-5 leading-7 flex-col space-y-5 items-center w-3/4'>
        <h1 className='text-white md:text-4xl text-xl border-b-4 text-center font-bold p-3 '>Exploring Tech and Security</h1>
          <p className='text-center'>
            Hello, I'm Dharmi Patel, a dedicated front-end developer. Beyond the world of code, I harbor a keen
            interest in cybersecurity.
          </p>

          <p className='text-center'>
            As a team player, I bring technical expertise and a commitment to perfection. Challenges are opportunities for innovation, and I thrive in collaborative environments, propelling us toward shared goals.
          </p>

          <p className='text-center'>
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
