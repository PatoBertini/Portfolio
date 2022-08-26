import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fondoCarousel from "../../Assets/Images/color-sharp.png";
import "./skills.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-icon">
              <h2>Front-end Skills</h2>
              <p>
                These are my Front-End skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="slider"
                draggable={true}
              >
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faReact} color="#5ED4F4" />
                  <h5>React Js</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faGithub} color="#ffffff" />
                  <h5>Github</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faHtml5} color="#F06529" />
                  <h5>HTML 5</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faBootstrap} color="#563d7c" />
                <h5>Boostrap</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faCss3} color="#28A4D9" />
                  <h5>CSS3</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faJsSquare} color="#EFD81D" />
                  <h5>Javascript</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faGitAlt} color="#EC4D28" />
                  <h5>Git</h5>
                </div>
                <div className="skill-logo">
                  <FontAwesomeIcon className="slogo" icon={faSass} color="#cd6799" />
                  <h5>Sass</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={fondoCarousel} className="fondo-1" alt="fs" />
    </section>
  );
};

export default Skills;
