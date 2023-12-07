import React from 'react';
import Particles from 'react-tsparticles';

const ParticleComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 6,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticleComponent;
