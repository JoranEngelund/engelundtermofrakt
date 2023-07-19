import { useScrollAnimation } from "../../../hooks/useAnimation";
import useApi from "../../../hooks/useApi";
import * as s from "./styled";

/**
 * ContactCard Component displays contact cards fetched from the API.
 *
 * The component fetches data from the provided API_URL using the useApi custom hook.
 * It maps through the fetched data to create individual contact cards, each containing
 * the post title, content, and a "Kontakt oss" button.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing contact cards with post data.
 */
export const ContactCard = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/posts?&categories=6&_embed`;
  const { data } = useApi(API_URL);
  const animatedRef = useScrollAnimation();

  return (
    <>
      {data.map((post) => (
        <s.ContactCardWrapper key={post.id} id={post.id} ref={animatedRef}>
          <s.ContactTitle ref={animatedRef}>
            {post.title.rendered}
          </s.ContactTitle>
          <s.ContactParagraph ref={animatedRef}>
            {post.content.rendered.replace(/<\/?p>/g, "")}
          </s.ContactParagraph>
          <s.ButtonWrapper ref={animatedRef}>
            <s.ContactButton to="/kontakt">Kontakt oss</s.ContactButton>
          </s.ButtonWrapper>
        </s.ContactCardWrapper>
      ))}
    </>
  );
};
