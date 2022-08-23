import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import logo from "../../Assets/Images/logoblanco.png";
import icon1 from "../../Assets/Images/ghblanco.png";
import icon2 from "../../Assets/Images/nav-icon1.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row>
          <Col sm={6}>
            <img src={logo} className='logo' alt="" />
          </Col>
          <Col sm={6}>
            <div className="social-icon">
              <a
                href="https://github.com/PatoBertini/patobertini"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon1} alt="gh" className="gh" />
              </a>
              <a
                href="https://www.linkedin.com/in/patriciobertini/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon2} alt="linkdn" />
              </a>
            </div>
          </Col>
        </Row>
        <Row >
          <h2>
            Copyright PatoBertini2022
          </h2>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
