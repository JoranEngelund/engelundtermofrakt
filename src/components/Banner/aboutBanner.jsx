import useApi from "../../hooks/useApi";
import * as styled from "./styled";

/**
 * Renders a banner with an image and title based on data fetched from the API.
 * @returns {JSX.Element} A React element representing the AboutBanner component.
 */
export const AboutBanner = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/pages/45/?&_embed`;
  const { data } = useApi(API_URL);
  console.log(data);
  const bannerImage = data._embedded?.["wp:featuredmedia"][0].source_url;
  const bannerAltText = data._embedded?.["wp:featuredmedia"][0].alt_text;
  const title = data?.title?.rendered || "";
  const path = window.location.pathname;

  return (
    <>
      <styled.BannerContainer>
        {bannerImage && (
          <styled.AboutBanner
            src={bannerImage}
            alt={bannerAltText}
            title={bannerAltText}
          />
        )}
        {title && <styled.PageTitle>{title}</styled.PageTitle>}
      </styled.BannerContainer>
    </>
  );
};
