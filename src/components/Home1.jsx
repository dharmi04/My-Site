import React from 'react';
import { Link } from 'react-router-dom';
import bgimage from '../assets/backimg.jpg';

const Home1 = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className='h-screen flex items-center justify-center flex-col'>
        <h1 className='text-white font-extrabold text-center text-6xl'>DHARMI PATEL</h1>
        <p className='text-white'>
          <Link to="/about" className="mx-2">About</Link> ||
          <Link to="/skills" className="mx-2">Skills</Link> ||
          <Link to="/myworks" className="mx-2">My Works</Link> ||
          <Link to="/contact" className="mx-2">Contact</Link>
        </p>
      </div>
    </div>
  );
}

export default Home1;
