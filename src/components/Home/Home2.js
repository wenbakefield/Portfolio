import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>About Me!</h1>
            <p className="home-about-body">
              I've had the privilege to study <b className="purple">Computer Science & Music Technology </b>
              at{" "}
              <b className="purple">Northeastern University, </b>
              bridging the gap between the two along the way.
              <br />
              <br />
              I'm fluent in <b className="purple">C++, Java, JavaScript, </b>
              &{" "}
              <b className="purple">Python.</b>
              <br />
              <br />
              Lately, I've been exploring AI architectures, including {" "}
              <b className="purple">Diffusers, Transformers, VAEs, GANs, CNNs, </b>
              &{" "}
              <b className="purple">RNNs.</b>
              <br />
              <br />
              More specifically, I've been experimenting with{" "}
              <b className="purple">Music Generation, Source Separation, AI-Assisted Composition, </b>
              &{" "}
              <b className="purple">Generative Game Design</b>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profileImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me!</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wenbakefield"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wenbakefield/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@BenWakefield"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/wenbakefield"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
