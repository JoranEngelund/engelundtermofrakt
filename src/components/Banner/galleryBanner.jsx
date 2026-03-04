import useApi from "../../hooks/useApi";
import * as s from "./styled";

/**
 * Renders a gallery banner with image and title from WordPress
 */
const GalleryBanner = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/pages/137/?&_embed`;
  const { data } = useApi(API_URL);

  const media = data?._embedded?.["wp:featuredmedia"]?.[0];
  const bannerImage = media?.source_url;
  const bannerAltText = media?.alt_text || "Galleri Engelund Termofrakt";
  const title = data?.title?.rendered || "Galleri";

  return (
    <s.BannerContainer>
      {bannerImage && <s.Banner src={bannerImage} alt={bannerAltText} />}

      <s.Overlay />

      <s.HeroContent>
        <s.HeroTitle dangerouslySetInnerHTML={{ __html: title }} />
      </s.HeroContent>
    </s.BannerContainer>
  );
};

export default GalleryBanner;
