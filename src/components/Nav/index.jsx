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
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="menuIcon"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-lg"
              className="fs-3"
            >
              Meny
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 fs-5">
              <Nav.Link
                className="navLink gap-3"
                href="/"
                style={{ color: isActive("/") ? "black" : "" }}
              >
                <FontAwesomeIcon className="me-2" icon={faHome} />
                Hjem
              </Nav.Link>
              <Nav.Link
                className="navLink"
                onClick={() => window.location.replace("/om-oss")}
                style={{ color: isActive("/om-oss") ? "black" : "" }}
              >
                <FontAwesomeIcon className="me-2" icon={faInfoCircle} />
                Om oss{" "}
              </Nav.Link>
              <Nav.Link
                className="navLink"
                onClick={() => window.location.replace("/kontakt")}
                style={{ color: isActive("/kontakt") ? "black" : "" }}
              >
                <FontAwesomeIcon className="me-2" icon={faPhone} />
                Kontakt
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
