import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

/**
 * Footer Component displays the footer section of the website.
 *
 * The component renders the footer section, containing contact information, company logo,
 * and social media links. It also includes copyright information and a link to the website's
 * design and development team.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the footer section of the website.
 * @example
 * <Footer/>
 */
export default function Footer() {
  const checkClick = () => {
    window.location.replace(
      "https://www.nho.no/samarbeid/gront-landtransportprogram/"
    );
  };

  return (
    <footer className="mt-auto reverted-shadow d-flex justify-content-evenly f">
      <Container>
        <Row className="mt-4 d-flex ">
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <styled.Ul>
              <h4 className="fs-5 mb-4">KONTAKT</h4>
              <li className="mt-4">
                <a href="tel:+47 23 36 62 00">
                  <FontAwesomeIcon icon={faPhone} /> 23 36 62 00
                </a>
              </li>
              <li className="my-3">
                <a href="mailto:firmapost@termofrakt.no">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} /> firmapost@termofrakt.no
                </a>
              </li>
              <li className="mb-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/Engelund+Termofrakt+AS/@59.5818754,10.7321383,915m/data=!3m1!1e3!4m15!1m8!3m7!1s0x46415000ce8fbc79:0xed9c4614f6dae50e!2sDeliveien+10,+1540+Vestby!3b1!8m2!3d59.5839061!4d10.7386872!16s%2Fg%2F11c43xxtvf!3m5!1s0x46415005e7354789:0xb66e50a5694cb786!8m2!3d59.5825926!4d10.7377096!16s%2Fg%2F1txc5mlc?entry=ttu"
                >
                  {" "}
                  <FontAwesomeIcon icon={faMapMarkerAlt} open /> Deliveien 10,
                  1540 Vestby{" "}
                </a>
              </li>
            </styled.Ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <styled.Ul className="d-flex flex-column align-items-start">
              <styled.ImageFooter
                src="/src/assets/images/25-jubi.png"
                alt="25 års jubileum logo for Engelund Termofrakt AS"
              />
              <styled.ImageFooter_GLP
                src="/src/assets/images/glp.png"
                alt="Logo for grønt landtransportprogram"
                title="https://www.nho.no/samarbeid/gront-landtransportprogram/"
                onClick={checkClick}
              />
            </styled.Ul>
          </Col>
          <Col md={12} lg={4} xl={4} className="d-flex flex-column soMe">
            <styled.Ul>
              <h4 className="fs-5">SOSIAL MEDIA</h4>
              <li>
                <Link
                  onClick={() => {
                    window.location.replace(
                      "https://www.facebook.com/people/Engelund-Termofrakt-AS/100063636875809/"
                    );
                  }}
                >
                  <FaFacebook
                    className="fs-2 faceIcon"
                    title="https://www.facebook.com/people/Engelund-Termofrakt-AS/100063636875809/"
                  />
                </Link>
              </li>
            </styled.Ul>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col className="">
            <p>Copyright © 2023 Engelund Termofrakt AS, All rights reserved</p>
          </Col>
          <Col className="text-end">
            <Link>Design & Utvikling: Engelund Utvikling</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
