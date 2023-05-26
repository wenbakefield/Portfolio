import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../Assets/profile.png";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
      <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={8}>

            <h1 style={{ paddingBottom: 70, paddingTop: 30 }}>
              Hello!{""}<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <h1 style={{ paddingBottom: 10 }}>
              I'm<strong className="purple"> Ben Wakefield.</strong>
            </h1>

            <div style={{ textAlign: "left" }}>
              <Type />
            </div>

          </Col>

          <Col md={4} style={{ paddingBottom: 5, paddingTop: 50 }}>
            <Tilt>
              <img
                src={profileImg}
                alt="profile"
                className="img-fluid"
                style={{ maxHeight: "450px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>A little about me...</h1>
            <p className="home-about-body">
              I studied <b className="purple">Computer Science & Music Technology </b>
              at{" "}
              <b className="purple">Northeastern University</b>
              , bridging the gap between the two along the way.
              <br />
              <br />

              I'm fluent in
              {" "}<b className="purple">C++</b>,
              {" "}<b className="purple">Java</b>,
              {" "}<b className="purple">JavaScript</b>, &
              {" "}<b className="purple">Python</b>.

              <br />
              <br />

              Lately, I've been exploring AI architectures, including
              {" "}<b className="purple">Diffusers</b>,
              {" "}<b className="purple">Transformers</b>,
              {" "}<b className="purple">Generative Adversarial Networks</b>,
              {" "}<b className="purple">Convolutional Neural Networks</b>, &
              {" "}<b className="purple">Recurrent Neural Networks</b>.

              <br />
              <br />

              More specifically, I've been experimenting with
              {" "}<b className="purple">Music Generation</b>,
              {" "}<b className="purple">Source Separation</b>,
              {" "}<b className="purple">AI-Assisted Composition</b>, &
              {" "}<b className="purple">Generative Game Design</b>.

              <br />
              <br />
            </p>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </Container>
  );
}

export default Home;
