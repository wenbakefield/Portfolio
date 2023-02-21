import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiReact,
  SiDjango,
  SiSpring
} from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";

function FrameworkStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhoenixFramework />
      </Col>
    </Row>
  );
}

export default FrameworkStack;
