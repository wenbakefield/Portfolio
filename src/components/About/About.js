import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import GitHub from "./GitHub";
import SoftwareStack from "./SoftwareStack";
import LanguageStack from "./LanguageStack";
import FrameworkStack from "./FrameworkStack";
import InstrumentStack from "./InstrumentStack";
import SpotifyStack from "./SpotifyStack";
import LibraryStack from "./LibraryStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading"><strong className="purple">Languages</strong> I speak</h1>
        <LanguageStack />
        <h1 className="project-heading"><strong className="purple">Libraries</strong> I call upon</h1>
        <LibraryStack />
        <h1 className="project-heading"><strong className="purple">Frameworks</strong> I build with</h1>
        <FrameworkStack />
        <h1 className="project-heading"><strong className="purple">Software</strong> I rely on</h1>
        <SoftwareStack />
        <h1 className="project-heading"><strong className="purple">Contributions</strong> I've made</h1>
        <br />
        <br />
        <GitHub />
        <br />
        <br />
        <h1 className="project-heading"><strong className="purple">Instruments</strong> I play</h1>
        <InstrumentStack />
        <h1 className="project-heading"><strong className="purple">Music</strong> I'm listening to</h1>
        <br />
        <br />
        <SpotifyStack />
      </Container>
    </Container>
  );
}

export default About;
