import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import formImg from "../../Assets/Images/galaxy-animation1.png";
import astro from "../../Assets/Images/galaxy-animation2.png";
import emailjs from "@emailjs/browser";
import "./form.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g5u456n",
        "template_l8drlyl",
        e.target,
        "nfkBWnqOEPyCghmCt"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section className="contact" id="conect">
      <Container>
        <Row className="align-items-center">
          <Col className="form-imagenes" md={6}>
            <img src={formImg} className="form-img" alt="" />
            <img src={astro} alt="" className="astro-img" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First name"
                    name="user_name"
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email adress"
                    name="user_email"
                  />
                </Col>

                <Col>
                  <textarea
                    cols="30"
                    rows="6"
                    placeholder="message"
                    name="user_message"
                  ></textarea>
                  <button className="f-button">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
