import useApi from "../../hooks/useApi";
import * as styled from "./styled";

/**
 * HomeBanner Component displays a banner with an image and a slogan.
 *
 * The component fetches data from the given API_URL using the useApi custom hook
 * and displays the banner image and title as a slogan.
 *
 * @returns {JSX.Element} Rendered JSX Element
 */
export default function HomeBanner() {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/pages/2/?&_embed`;
  const { data } = useApi(API_URL);
  const bannerImage = data._embedded?.["wp:featuredmedia"][0].source_url;
  const bannerAltText = data._embedded?.["wp:featuredmedia"][0].alt_text;
  const title = data?.title?.rendered || "";

  return (
    <>
      <styled.BannerContainer>
        {bannerImage && (
          <styled.Banner
            src={bannerImage}
            alt={bannerAltText}
            title={bannerAltText}
          />
        )}
        {title && <styled.Slogan>{title}</styled.Slogan>}
      </styled.BannerContainer>
    </>
  );
}
