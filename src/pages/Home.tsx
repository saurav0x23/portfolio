import React from 'react';
import Hero from '../components/Hero';  // Make sure the path to Hero is correct
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects/>
    </div>
  );
};

export default Home;
