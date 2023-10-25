import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import blob from '../assets/blob1.png';
import AnimatedBackground from './AnimatedBackground'; // Import the AnimatedBackground component
import './Home.css'; // Import a CSS file to define the animation.

const Home = () => {
  return (
    <div>
      {/* Background Animation Component */}
       {/* Include the AnimatedBackground component here */}
      <div className='flex md:flex-row flex-col h-screen '>
        {/* Rest of your Home component code */}
        <div className="flex flex-col justify-center md:pl-20 pt-30 md:w-2/4">
          <h1 className="text-white font-bold md:text-5xl text-3xl items-center justify-center tracking-wide">DHARMI PATEL</h1>
          <p className="text-white font-semibold text-2xl md:text-4xl mt-10">
            <TypeAnimation
              sequence={[
                'CyberSecurity Enthusiast',
                1300,
                'Front-End Developer',
                1300,
              ]}
              speed={30}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
            />
          </p>
          <p className='text-white md:text-3xl text-xl  mt-5 leading-20'>I am the digital architect, weaving pixelated dreams into vibrant realities. As a front-end developer, I am the conductor of the symphony that is user experience. With code as my instrument, I sculpt seamless interfaces, ensuring every click and scroll is a harmonious melody of design and functionality.</p>
        </div>
        {/* Right side with pulsating effect */}
        <div className="flex md:flex-row flex-col pulsating-blob md:w-2/4">
          <img src={blob} alt="Blob" />
        </div>
      </div>
    </div>
  );
};

export default Home;
