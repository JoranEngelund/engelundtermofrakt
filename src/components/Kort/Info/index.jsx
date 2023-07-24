import useApi from "../../../hooks/useApi";
import { useScrollAnimation } from "../../../hooks/useAnimation";
import * as s from "./styled";

/**
 * InfoCards Component displays information cards fetched from the API.
 *
 * The component fetches data from the provided API_URL using the useApi custom hook.
 * It maps through the fetched data to create individual information cards, each containing
 * the post title, content, and an image.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing information cards with post data.
 */
export const InfoCards = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/posts?categories=5&_embed`;
  const { data } = useApi(API_URL);
  const animatedRef = useScrollAnimation();

  return (
    <s.CardWrapper ref={animatedRef}>
      {data.map((post) => (
        <s.Card key={post.id} id={post.id}>
          <s.CardImage
            ref={animatedRef}
            src={post._embedded?.["wp:featuredmedia"][0].source_url}
            alt={post._embedded?.["wp:featuredmedia"][0].alt_text}
          />
          <s.CardTitle ref={animatedRef}> {post.title.rendered}</s.CardTitle>
          <s.CardParagraph ref={animatedRef}>
            {post.content.rendered.replace(/<\/?p>/g, "")}
          </s.CardParagraph>
        </s.Card>
      ))}
    </s.CardWrapper>
  );
};
