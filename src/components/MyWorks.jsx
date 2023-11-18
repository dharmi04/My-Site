import React from 'react';

const MyWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-8">
      <div>
        <h1 className='font-bold text-5xl md:text-5xl text-center mt-0 mb-5'>My Works</h1>
      </div>
      <div className="my-works-container mb-5">
        {/* Project 1 */}
        <div className="glass-card m-4 p-6 border border-white rounded-lg">
          <div className="card-front">
            <p className='font-bold text-center text-2xl md:text-3xl'>Encode Website</p>
            <p className='font-light text-center text-xl md:text-2xl mt-4 md:mt-5 pl-2 pr-2'>
              As a core member of Encode, the coding club at PDEU, I played a pivotal role in creating our website. Leveraging the powerful combination of Three.js and Next.js, I contributed to crafting an engaging and interactive online platform that showcases our club's innovation and creativity.
            </p>
          </div>
          <div className="card-back">
            <a href="https://encode.osailpdeu.in/" className='font-bold text-xl md:text-2xl'>View Website</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass-card m-4 p-6 border border-white rounded-lg">
          <div className="card-front">
            <p className='font-bold text-center text-2xl md:text-3xl'>Portfolio Website</p>
            <p className='font-light text-center text-xl md:text-2xl mt-4 md:mt-5 pl-2 pr-2'>
              I built this portfolio site using React.js and Tailwind CSS for a sleek and responsive web experience.
            </p>
          </div>
          <div className="card-back">
            <a href="link2" className='font-bold text-xl md:text-2xl'>View More</a>
          </div>
        </div>
      </div>

      <div>
        <p className='font-normal text-2xl md:text-3xl mb-5'>Explore my more projects</p>
        <a href="https://github.com/dharmi04" target="_blank" rel="noopener noreferrer" className="font-bold text-xl p-3 m-2 rounded-lg border border-white hover:border-white hover:shadow-lg transition duration-300 ease-in-out">
          Click Me!
        </a>
      </div>
    </div>
  );
};

export default MyWorks;
