import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Ben Wakefield</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/wenbakefield"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wenbakefield/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@BenWakefield"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/wenbakefield"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
