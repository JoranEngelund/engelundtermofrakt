import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHome,
  faInfoCircle,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

import * as s from "./StyledNav";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <s.NavbarWrapper expand="lg" $scrolled={scrolled}>
      <Container fluid>
        <Logo />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 gap-3">
            <s.NavLink to="/" end>
              <FontAwesomeIcon icon={faHome} />
              Hjem
            </s.NavLink>

            <s.NavLink to="om-oss">
              <FontAwesomeIcon icon={faInfoCircle} />
              Om oss
            </s.NavLink>

            <s.NavLink to="galleri">
              <FontAwesomeIcon icon={faImages} />
              Galleri
            </s.NavLink>

            <s.NavLink to="kontakt">
              <FontAwesomeIcon icon={faPhone} />
              Kontakt
            </s.NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </s.NavbarWrapper>
  );
}
