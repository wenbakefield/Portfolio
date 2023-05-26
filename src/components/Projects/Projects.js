import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covey from "../../Assets/Projects/covey.png";
import ddn from "../../Assets/Projects/ddn.png";
import momo from "../../Assets/Projects/momo.png";
import pip from "../../Assets/Projects/pip.png";
import harmony from "../../Assets/Projects/harmony.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Some things I've been working on.</h1>

        <Row style={{ justifyContent: "left", paddingBottom: "200px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ddn}
              isBlog={false}
              title="DeepDeadNet"
              description="A web application which can generate music that sounds like the Grateful Dead through the power of Generative Adversarial Networks."
              ghLink="https://github.com/wenbakefield/deep-dead-net/blob/main/deepdeadnet.pdf"
              demoLink="https://deepdead.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pip}
              isBlog={false}
              title="Pip's Quest"
              description="A roguelite involving a hamster wizard, cursed critters, and an evil snake. Inspired by EarthBound and Slay The Spire. Hastily hacked together in Python."
              ghLink="https://github.com/wenbakefield/pips-quest"
              demoLink="https://benwakefield.dev/pips-quest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covey}
              isBlog={false}
              title="Covey Town"
              description="A virtual meeting space where people can have video calls, play games, watch movies together, and share images. For our contribution, we added pets!"
              ghLink="https://github.com/wenbakefield/covey-critters"
              demoLink="https://app.covey.town/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={momo}
              isBlog={false}
              title="MoMo"
              description="A mobile application that serves as a portable, deeply customizable multi-effects unit for any instrument with an audio output."
              ghLink="https://github.com/wenbakefield/momo"
              demoLink="https://github.com/wenbakefield/momo/raw/main/Using%20MobMuPlat%20to%20Develop%20a%20Mobile%20Audio%20Effects%20Unit.pdf"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harmony}
              isBlog={false}
              title="Harmony"
              description="Allows a group of roommates to coordinate responsibilities through a simple interface. The app sends text reminders for location-based tasks through Twilio."
              ghLink="https://github.com/wenbakefield/cs4550-final-project"
              demoLink="https://youtu.be/v5cwNN_dJxk"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
