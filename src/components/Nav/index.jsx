import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import * as s from "./StyledNav";

/**
 * Navigation Component displays the navigation header of the website.
 *
 * The component renders the navigation header with a logo and a collapsible
 * off-canvas menu. The menu contains links for "Hjem," "Om oss," and "Kontakt"
 * pages, and it highlights the active link based on the current location.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the navigation header.
 */
export default function Navigation() {
  const location = useLocation();

  /**
   * Check if the given link is the active link (matches the current pathname).
   * @param {string} link - The link to check against the current pathname.
   * @returns {boolean} True if the link is the active link, false otherwise.
   */
  const isActive = (link) => {
    return location.pathname === link;
  };

  return (
    <Navbar expand="lg" className="bg-light shadow mb-3">
      <Container fluid>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 fs-5">
            <Nav.Link
              className="navLink gap-3"
              href="/"
              style={{ color: isActive("/") ? "black" : "" }}
            >
              <FontAwesomeIcon className="me-2" icon={faHome} />
              Hjem
            </Nav.Link>
            <s.NavLink
              className="navLink"
              to="om-oss"
              style={{ color: isActive("om-oss") ? "black" : "" }}
            >
              <FontAwesomeIcon className="me-2" icon={faInfoCircle} />
              Om oss
            </s.NavLink>
            <s.NavLink
              className="navLink"
              to="kontakt"
              style={{ color: isActive("kontakt") ? "black" : "" }}
            >
              <FontAwesomeIcon className="me-2" icon={faPhone} />
              Kontakt
            </s.NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
