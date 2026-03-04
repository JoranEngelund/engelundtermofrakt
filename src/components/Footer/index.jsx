import * as s from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";

import nlf from "../../assets/images/nlf.png";
import glp from "../../assets/images/glp.png";
import jubi from "../../assets/images/25-jubi.png";

export default function Footer() {
  return (
    <s.FooterWrap className="mt-auto">
      <Container>
        <s.TopRow>
          <Row className="g-4">
            {/* Kontakt */}
            <Col xs={12} md={6} lg={4}>
              <s.Title>KONTAKT</s.Title>

              <s.List>
                <s.ListItem>
                  <s.FooterLink href="tel:+4723376200">
                    <FontAwesomeIcon icon={faPhone} /> 23 37 62 00
                  </s.FooterLink>
                </s.ListItem>

                <s.ListItem>
                  <s.FooterLink href="mailto:firmapost@termofrakt.no">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    firmapost@termofrakt.no
                  </s.FooterLink>
                </s.ListItem>

                <s.ListItem>
                  <s.FooterLink
                    href="https://www.google.com/maps/place/Engelund+Termofrakt+AS/@59.5818754,10.7321383,915m/data=!3m1!1e3!4m15!1m8!3m7!1s0x46415000ce8fbc79:0xed9c4614f6dae50e!2sDeliveien+10,+1540+Vestby!3b1!8m2!3d59.5839061!4d10.7386872!16s%2Fg%2F11c43xxtvf!3m5!1s0x46415005e7354789:0xb66e50a5694cb786!8m2!3d59.5825926!4d10.7377096!16s%2Fg%2F1txc5mlc?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Deliveien 10, 1540
                    Vestby
                  </s.FooterLink>
                </s.ListItem>
              </s.List>
            </Col>

            {/* Merker / medlemskap */}
            <Col xs={12} md={6} lg={4}>
              <s.Title>PARTNERE & MEDLEMSKAP</s.Title>

              <s.BadgeGrid>
                <s.Badge>
                  <img src={jubi} alt="25 års jubileum logo" />
                </s.Badge>

                <s.Badge
                  as="a"
                  href="https://lastebil.no/Om-NLF"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Norges Lastebileier-Forbund"
                >
                  <img src={nlf} alt="Norges Lastebileier-Forbund (NLF)" />
                </s.Badge>

                <s.Badge
                  as="a"
                  href="https://www.nho.no/samarbeid/gront-landtransportprogram/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Grønt landtransportprogram"
                >
                  <img src={glp} alt="Grønt landtransportprogram" />
                </s.Badge>
              </s.BadgeGrid>
            </Col>

            {/* Sosiale medier */}
            <Col xs={12} lg={4}>
              <s.Title>SOSIALT</s.Title>

              <s.SocialRow>
                <s.SocialButton
                  href="https://www.facebook.com/people/Engelund-Termofrakt-AS/100063636875809/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook /> Facebook
                </s.SocialButton>
              </s.SocialRow>

              <s.MicroText>
                Følg oss for glimt fra hverdagen, bilpark og oppdateringer.
              </s.MicroText>
            </Col>
          </Row>
        </s.TopRow>

        <s.BottomBar>
          <Row className="align-items-center gy-2">
            <Col xs={12} md={6}>
              <s.BottomText>
                © {new Date().getFullYear()} Engelund Termofrakt AS. All rights
                reserved.
              </s.BottomText>
            </Col>
            <Col xs={12} md={6} className="text-md-end">
              <s.BottomLink
                href="https://nordevdigital.no/"
                target="_blank"
                rel="noreferrer"
              >
                Levert av: Nordev Digital
              </s.BottomLink>
            </Col>
          </Row>
        </s.BottomBar>
      </Container>
    </s.FooterWrap>
  );
}
