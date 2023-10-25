import React, { useState } from 'react';
import './MyWorks.css'; // Add your component's CSS
import encode from '../assets/encode.png';

const MyWorks = () => {
  const [isCardFlipped1, setCardFlipped1] = useState(false);
  const [isCardFlipped2, setCardFlipped2] = useState(false);

  const handleCardClick1 = () => {
    setCardFlipped1(!isCardFlipped1);
  };

  const handleCardClick2 = () => {
    setCardFlipped2(!isCardFlipped2);
  };

  return (
    <div>
      <div>
        <h1 className='text-pink-500 font-bold md:text-5xl text-3xl text-center justify-center mt-10 md:mt-0'>My Works</h1>
      </div>
      <div className="my-works-container mt-5 md:flex md:flex-row md:justify-center">
        <div
          className={`glass-card m-4 md:m-2 lg:m-4 ${isCardFlipped1 ? 'flipped' : ''}`}
          onClick={handleCardClick1}
        >
          <div className="card-front">
            <p className='text-white font-bold text-center top-0 text-2xl md:text-3xl'>Encode Website</p>
            <p className='text-white font-light text-center text-xl md:text-2xl mt-4 md:mt-5 pl-2 pr-2'>
              As a core member of Encode, the coding club at PDEU, I played a pivotal role in creating our website. Leveraging the powerful combination of Three.js and Next.js, I contributed to crafting an engaging and interactive online platform that showcases our club's innovation and creativity.
            </p>
          </div>
          <div className="card-back">
            <a href="https://encode.osailpdeu.in/" className='text-white font-bold text-xl md:text-2xl'>View Website</a>
          </div>
        </div>
        <div
          className={`glass-card m-4 md:m-2 lg:m-4 ${isCardFlipped2 ? 'flipped' : ''}`}
          onClick={handleCardClick2}
        >
          <div className="card-front">
            <p className='text-white font-bold text-center top-0 text-2xl md:text-3xl'>Portfolio Website</p>
            <p className='text-white font-light text-center text-xl md:text-2xl mt-4 md:mt-5 pl-2 pr-2'>
            I built this portfolio site using React.js and Tailwind CSS for a sleek and responsive web experience.
            </p>
          </div>
          <div className="card-back">
            <a href="link2" className='text-white font-bold text-xl md:text-2xl'>View More</a>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
  <p className='text-white font-normal text-2xl md:text-3xl'>Explore my more projects</p>
  <a href="https://github.com/dharmi04" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-xl p-2 m-2 rounded-lg shadow-md shadow-pink-500 border border-pink-500 hover:border-pink-600 hover:shadow-lg transition duration-300 ease-in-out">
    Click Me!
  </a>
</div>


    </div>
  );
};

export default MyWorks;
