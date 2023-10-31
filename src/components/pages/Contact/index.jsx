import useApi from "../../../hooks/useApi";
import ContactBanner from "../../Banner/contactBanner";
import ContactInfo from "./Info";
import Loader from "../../Loader";
import Error from "../../Error/index";
import ContactUs from "./Forms/contactUs";
import useSwitch from "../../../hooks/useSwitch";
import * as s from "./Info/styled";
import JobForm from "./Forms/job";
import * as styled from "./styled";

/**
 * Contact component serves as a parent component containing contact and job application forms.
 * It handles form visibility toggling and displays loading and error states when fetching data.
 *
 * @component
 * @example
 * // Usage inside a parent component
 * import Contact from './Contact';
 * // ...
 * <Contact />
 *
 * @returns {JSX.Element} Rendered React component
 */
const Contact = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2`;
  const { isLoading, isError } = useApi(API_URL);
  const { showContactForm, showJobForm, handleShowContact, handleShowJob } =
    useSwitch();
  return (
    <>
      {isLoading ? <Loader /> : null}
      {isError ? <Error /> : null}
      <ContactBanner /> <ContactInfo />
      <s.FormWrapper>
        <s.ContactWrapper>
          {showContactForm && (
            <>
              <styled.HeadingContainer>
                <styled.FormNavigation onClick={handleShowContact}>
                  Kontakt oss
                </styled.FormNavigation>
                <styled.UnactiveNavigation onClick={handleShowJob}>
                  Søk Jobb <i>(Apply for a Job)</i>
                </styled.UnactiveNavigation>
              </styled.HeadingContainer>
              <ContactUs />
            </>
          )}
          {showJobForm && (
            <>
              <styled.HeadingContainer>
                <styled.UnactiveNavigation onClick={handleShowContact}>
                  Kontakt oss
                </styled.UnactiveNavigation>
                <styled.FormNavigation onClick={handleShowJob}>
                  Søk Jobb <i>(Apply for a Job)</i>
                </styled.FormNavigation>
              </styled.HeadingContainer>
              <JobForm />
            </>
          )}
        </s.ContactWrapper>
      </s.FormWrapper>
    </>
  );
};

export default Contact;
