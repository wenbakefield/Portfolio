import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import GitHub from "./GitHub";
import SoftwareStack from "./SoftwareStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import LanguageStack from "./LanguageStack";
import FrameworkStack from "./FrameworkStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who Am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading"><strong className="purple">Languages</strong> I write</h1>
        <LanguageStack />
        <h1 className="project-heading"><strong className="purple">Frameworks</strong> I use</h1>
        <FrameworkStack />
        <h1 className="project-heading"><strong className="purple">Software</strong> I like</h1>
        <SoftwareStack />
        <h1 className="project-heading"><strong className="purple">Contributions</strong> I've made</h1>
        <GitHub />
        <h1 className="project-heading"><strong className="purple">Instruments</strong> I play</h1>
        <h1 className="project-heading"><strong className="purple">Music</strong> I listen to</h1>
        <h1 className="project-heading"><strong className="purple">Games</strong> I play</h1>
      </Container>
    </Container>
  );
}

export default About;
