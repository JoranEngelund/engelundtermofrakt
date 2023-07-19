import * as s from "./styled";

/**
 * Loader Component displays a loading animation or image while content is being loaded.
 *
 * The component represents a loading screen or animation to indicate that the content
 * is still being fetched or loaded. It displays a loading icon or image inside the
 * LoadingContainer.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the loading animation or image.
 */
export default function Loader() {
  return (
    <s.LoadingContainer>
      <s.LoadingIcon src="/src/assets/images/wheel_logo.png" alt="...loading" />
    </s.LoadingContainer>
  );
}
