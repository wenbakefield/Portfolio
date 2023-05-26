import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaSpotify,
  FaSteam,
  FaGithub,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Benjamin Wakefield</h3>
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
                <FaGithub />
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
                <FaYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/wenbakefield"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://open.spotify.com/user/sauron458?si=70c6055de7504ec6"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSpotify />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://steamcommunity.com/id/wenbakefield/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSteam />
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
