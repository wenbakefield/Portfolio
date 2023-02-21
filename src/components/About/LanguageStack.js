import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRacket,
  SiCplusplus,
  SiCsharp,
  SiC,
  SiJava,
  SiPython,
  SiJavascript,
  SiElixir,
  SiAssemblyscript,
  SiLua,
} from "react-icons/si";

function LanguageStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiElixir />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRacket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAssemblyscript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLua />
      </Col>

    </Row>
  );
}

export default LanguageStack;
