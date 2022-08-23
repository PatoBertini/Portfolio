import React from "react";
import { Container } from "react-bootstrap";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import mongo from "../../Assets/Images/mongo.svg";
import express from "../../Assets/Images/express.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fondoCarousel from "../../Assets/Images/color-sharp2.png";
import "./backend.css";

const BackendSkills = () => {
  return (
    <section className="b-skills" id="b-skills">
      <Container>
        <div className="b-skills-icon">
          <div className="b-text-container">
            <h2>Backend skills</h2>
            <p>This are my Backend skills i'm studying since August 2022.</p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  color="green"
                  className="box-icon"
                />
              </div>
              <div className="face3">
                <FontAwesomeIcon
                  icon={faReact}
                  color="#5ED4F4"
                  className="box-icon"
                />
              </div>
              <div className="face4">
                <img src={mongo} className="box-icon" alt="" />
              </div>
              <div className="face6">
                <img src={express} className="box-icon" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img src={fondoCarousel} className="fondo-2" alt="fs" />
    </section>
  );
};

export default BackendSkills;
