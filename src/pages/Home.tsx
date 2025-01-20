import React from "react";
import Hero from "../components/Hero"; // Make sure the path to Hero is correct
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
