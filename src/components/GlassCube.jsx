import React from 'react';
import './GlassCube.css'; // We will create this CSS file


const GlassCube = () => {
  return (
    <div className="glass-cube">
        
      <div className="side front">HTML</div>
      <div className="side back">CSS</div>
      <div className="side top">React</div>
      <div className="side bottom">Next.js</div>
      <div className="side left">Python</div>
      <div className="side right">Tailwind CSS</div>
      <div className="side right">Java</div>
    </div>
  );
};

export default GlassCube;
