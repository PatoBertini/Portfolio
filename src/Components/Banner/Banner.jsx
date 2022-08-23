import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import hero from "../../Assets/Images/pc.png";
import "./banner.css";
import BouncingLetters from "./BouncingLetters";
import 'animate.css'

const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-end", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;


 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="welcome"> Welcome to my portfolio</span>
            <h1>
            <BouncingLetters/>
              <span className="wrap"> {text}</span>
            </h1>
              
            <p>
              A junior Front-end Developer living in Valencia, Spain who is
              searching his first job.
            </p>
            <button href="#form" 
            
            >
              Contact Me <FiArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={hero} className="hero" alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
