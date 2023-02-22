import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function GitHub() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="wenbakefield"
        blockSize={20}
        blockMargin={5}
        color="#c084f5"
        fontSize={18}
      />
    </Row>
  );
}

export default GitHub;
