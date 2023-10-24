import React from 'react';
import GlassCube from './GlassCube';
import './Skills.css'

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen mt-10 relative skills-container">
      {/* left */}
      <div className="w-full md:w-2/4 p-4 md:p-10">
        <div className="flex flex-col justify-between">
          <h1 className="text-white font-bold text-4xl md:text-5xl tracking-wide">About</h1>
          <p className='text-white text-2xl md:text-3xl mt-5 leading-6'>
            Expert in frontend technologies like{' '}
            <span className='text-pink-500'>HTML</span>,{' '}
            <span className='text-pink-500'>CSS</span>,{' '}
            <span className='text-pink-500'>React</span>,{' '}
            <span className='text-pink-500'>Next.js</span>,{' '}
            <span className='text-pink-500'>Tailwind CSS</span>.
          </p>
          <p className='text-white text-xl md:text-2xl mt-5 leading-20'>
            I am not a designer, but I have a good sense of aesthetics and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee commitment during work on your project.
          </p>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-2/4 flex items-center justify-center mt-20 md:mt-0 ">
        <GlassCube className="right-2" />
      </div>
    </div>
  );
};

export default Skills;
