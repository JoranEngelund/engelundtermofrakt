import useApi from "../../hooks/useApi";
import * as styled from "./styled";

export default function HomeBanner() {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/pages/2/?&_embed`;
  const { data } = useApi(API_URL);

  const media = data?._embedded?.["wp:featuredmedia"]?.[0];
  const bannerImage = media?.source_url;
  const bannerAltText = media?.alt_text || "Engelund Termofrakt";
  const title =
    data?.title?.rendered || "Intet lass for lite, Intet lass for stort";
  const subtitle = "Pålitelig logistikk siden 1996";

  return (
    <styled.BannerContainer>
      {bannerImage && (
        <styled.Banner
          src={bannerImage}
          alt={bannerAltText}
          title={bannerAltText}
        />
      )}

      <styled.Overlay />

      <styled.HeroContent>
        <styled.HeroTitle dangerouslySetInnerHTML={{ __html: title }} />
        <styled.HeroSubtitle>{subtitle}</styled.HeroSubtitle>
      </styled.HeroContent>
    </styled.BannerContainer>
  );
}
