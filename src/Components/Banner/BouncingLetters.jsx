import React from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useState } from "react";

const BouncingLetters = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H","i,"," ","I"," ","a","m"," ","P", "a", "t", "r", "i", "c", "i", "o"];

  return (
    <div>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={nameArray}
        idx={15}
      />
    </div>
  );
};

export default BouncingLetters;
