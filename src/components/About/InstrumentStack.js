import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiDrumKit, GiGuitarBassHead, GiGuitarHead, GiPianoKeys } from "react-icons/gi";

function InstrumentStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiGuitarHead />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiGuitarBassHead />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiDrumKit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiPianoKeys />
      </Col>
    </Row>
  );
}

export default InstrumentStack;