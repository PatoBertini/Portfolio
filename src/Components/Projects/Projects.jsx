import React from "react";
import p1 from "../../Assets/Images/p1.png";
import p2 from "../../Assets/Images/p2.png";
import p3 from "../../Assets/Images/p3.png";
import p4 from "../../Assets/Images/p4.png";
import p5 from "../../Assets/Images/p7.png";
import p6 from "../../Assets/Images/p6.png";
import AboutMe from "./AboutMe";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import fondoImg from "../../Assets/Images/color-sharp2.png";
import Documento from '../../PatricioBertini-Cv.pdf'

const Projects = () => {
  const proyectos = [
    {
      title: "Restaurant Menu",
      description1: "HTML, CSS, JavaScript",
      description2: "June 2022",
      img: p1,
      link: "https://sensational-eclair-bda8c9.netlify.app/",
    },
    {
      title: "International meet seller",
      description1: "HTML, CSS, Sass & Boostrap",
      description2: "April 2022",
      img: p2,
      link: "https://payecocina.netlify.app/",
    },
    {
      title: "Click Counter",
      description1: "React starting proyect",
      description2: "July 2022",
      img: p4,
      link: 'https://fluffy-torte-5d78ca.netlify.app/'
    },
    {
      title: "Checklist",
      description1: "React starting proyect",
      description2: "August 2022",
      img: p3,
      link: 'https://celadon-stroopwafel-bedde1.netlify.app/'
    },
    {
      title: "Ecommerce Shop",
      description1: "React Js",
      img: p5,
      link : "https://ecommerce-guitar.netlify.app/"
    },
    {
      title: "Personal Landing Page",
      description1: "React Js",
      img: p6,
      inpro : "Work In Progress"

    },
  ];

  return (
    <section className="proyectos" id="proyects">
      <Container>
        <Row>
          <Col>
            <h2> Proyects</h2>
            <p>
              These are some of my proyects I have been working on. Hope you
              enjoy it!
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="primero">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="primero">Proyects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="segundo">Curriculum </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tercero">About Me</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="primero">
                  <Row>
                    {proyectos.map((proyectos, value) => {
                      return <ProjectCard key={value} {...proyectos} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="segundo">
                  <div className="b-conteiner">
                    <a data-text="Awesome" className="button"  href={Documento} download >
                      <span className="actual-text">&nbsp;Download&nbsp;</span>
                      <span className="hover-text" aria-hidden="true">
                        &nbsp;Download&nbsp;
                      </span>
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tercero">
                  <AboutMe/>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={fondoImg} className="imagenFondo" alt="" />
    </section>
  );
};

export default Projects;
