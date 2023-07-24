import GoogleMap from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import * as s from "./styled";

/**
 * Renders contact information including phone number, email, and address.
 * Includes an embedded Google Map showing the location of Engelund Termofrakt AS.
 * @component
 * @returns {JSX.Element} A React element representing the ContactInfo component.
 */
const ContactInfo = () => {
  return (
    <s.ContentWrapper>
      <s.ContactWrapper>
        <s.ContactTitle>Slik når du oss</s.ContactTitle>
        <s.ContactContent>
          <a href="tel:+47 23 36 62 00">
            <FontAwesomeIcon icon={faPhone} /> 23 36 62 00
          </a>
        </s.ContactContent>
        <s.ContactContent>
          <a href="mailto:firmapost@termofrakt.no">
            <FontAwesomeIcon icon={faEnvelope} /> firmapost@termofrakt.no
          </a>{" "}
        </s.ContactContent>
        <s.ContactContent>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Engelund+Termofrakt+AS/@59.5818754,10.7321383,915m/data=!3m1!1e3!4m15!1m8!3m7!1s0x46415000ce8fbc79:0xed9c4614f6dae50e!2sDeliveien+10,+1540+Vestby!3b1!8m2!3d59.5839061!4d10.7386872!16s%2Fg%2F11c43xxtvf!3m5!1s0x46415005e7354789:0xb66e50a5694cb786!8m2!3d59.5825926!4d10.7377096!16s%2Fg%2F1txc5mlc?entry=ttu"
          >
            <FontAwesomeIcon icon={faLocationDot} /> Deliveien 10, 1540 Vestby
          </a>
        </s.ContactContent>
      </s.ContactWrapper>
      <s.ContactWrapper>
        <GoogleMap />
      </s.ContactWrapper>
    </s.ContentWrapper>
  );
};

export default ContactInfo;
