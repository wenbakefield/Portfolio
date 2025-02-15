import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAngular,
  SiNextdotjs,
  SiDjango,
  SiRubyonrails
} from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";

function FrameworkStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhoenixFramework />
      </Col>
    </Row>
  );
}

export default FrameworkStack;
