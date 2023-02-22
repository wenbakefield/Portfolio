import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaSpotify,
  FaSteam,
  FaGithub,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

function SocialButtons() {
    return (
        <Container >
            <Row>
                <Col md={12} className="home-about-social">
                    <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                        href="https://github.com/wenbakefield"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/wenbakefield/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <AiFillLinkedin />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.youtube.com/@BenWakefield"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaYoutube />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://twitter.com/wenbakefield"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://open.spotify.com/user/sauron458?si=70c6055de7504ec6"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaSpotify />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://steamcommunity.com/id/wenbakefield/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaSteam />
                        </a>
                    </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default SocialButtons;