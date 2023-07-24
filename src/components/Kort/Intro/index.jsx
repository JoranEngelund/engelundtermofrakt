import useApi from "../../../hooks/useApi";
import { useScrollAnimation } from "../../../hooks/useAnimation";
import * as s from "./styled";

/**
 * IntroCard Component displays intro cards fetched from the API.
 *
 * The component fetches data from the provided API_URL using the useApi custom hook.
 * It maps through the fetched data to create individual intro cards, each containing
 * the post title, content, and a "Les mer" button.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing intro cards with post data.
 */
export const IntroCard = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/posts?categories=7&_embed`;
  const { data } = useApi(API_URL);
  const animatedRef = useScrollAnimation();

  return (
    <>
      {data.map((post) => (
        <s.IntroCardWrapper key={post.id} id={post.id} ref={animatedRef}>
          <s.IntroTitle>{post.title.rendered}</s.IntroTitle>
          <s.IntroParagraph>
            {post.content.rendered.replace(/<\/?p>/g, "")}
          </s.IntroParagraph>
          <s.ButtonWrapper>
            <s.IntroButton to="/om-oss">Les mer</s.IntroButton>
          </s.ButtonWrapper>
        </s.IntroCardWrapper>
      ))}
    </>
  );
};
