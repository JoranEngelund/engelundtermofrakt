import useApi from "../../../hooks/useApi";
import ContactBanner from "../../Banner/contactBanner";
import ContactInfo from "./Info";
import Loader from "../../Loader";
import Error from "../../Error/index";

/**
 * Renders the Contact page, fetching data from the API and displaying the ContactBanner,
 * ContactInfo components, and handles loading and error states.
 * @component
 * @returns {JSX.Element} A React element representing the Contact page.
 */
const Contact = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2`;
  const { isLoading, isError } = useApi(API_URL);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {isError ? <Error /> : null}
      <ContactBanner /> <ContactInfo />
    </>
  );
};

export default Contact;
