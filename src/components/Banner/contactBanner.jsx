import useApi from "../../hooks/useApi";
import * as s from "./styled";

/**
 * Renders a contact banner with an image and title fetched from the API.
 * @component
 * @returns {JSX.Element} A React element representing the ContactBanner component.
 */
const ContactBanner = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/pages/74/?&_embed`;
  const { data } = useApi(API_URL);
  const bannerImage = data._embedded?.["wp:featuredmedia"][0].source_url;
  const bannerAltText = data._embedded?.["wp:featuredmedia"][0].alt_text;
  const title = data?.title?.rendered || "";

  return (
    <>
      <s.BannerContainer>
        <s.AboutBanner src={bannerImage} alt={bannerAltText} />
        <s.PageTitle>{title}</s.PageTitle>
      </s.BannerContainer>
    </>
  );
};

export default ContactBanner;
