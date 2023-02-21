import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }}>
          I'm a senior undergraduate student at Northeastern University studying computer science and music technology.
          <br />
          <br />
          I like making things that are both useful and beautiful.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
