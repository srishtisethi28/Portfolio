import React, { useState } from "react";
import "./Skils.css";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react_2.jpg";
import Tailwind from "../assets/Tailwind.jpg";
import c from "../assets/cProgramming.jpg";
import cpp from "../assets/cpp.jpg";
import python from "../assets/python.jpg";
import dsa from "../assets/dsa.jpg";

const Skills = () => {
  const skills = [html, css, js, react, Tailwind, c, cpp, python, dsa];
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSkills = [
    skills[(currentIndex - 2 + skills.length) % skills.length],
    skills[(currentIndex - 1 + skills.length) % skills.length],
    skills[currentIndex],
    skills[(currentIndex + 1) % skills.length],
    skills[(currentIndex + 2) % skills.length],
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + skills.length) % skills.length
    );
  };

  return (
    <div className="Skills">
        <div className="heading"><h1>My Skills</h1></div>
      <div className="slider-container">
        {visibleSkills.map((skill, index) => (
          <div className="image-wrapper" key={index}>
            <img src={skill} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Skills;
