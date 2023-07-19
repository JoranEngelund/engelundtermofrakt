import * as styled from "./styled";

/**
 * Logo Component displays the logo of Engelund Termofrakt AS.
 *
 * The component represents the logo of the company, which is a clickable image.
 * When clicked, it redirects the user to the home page of the website (root URL).
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the logo of Engelund Termofrakt AS.
 */
export default function Logo() {
  return (
    <styled.Logo
      onClick={() => {
        window.location.replace("/");
      }}
      src="/src/assets/images/logo_alt_v3.png"
      alt="logo av Engelund Termofrakt AS"
      title="Hjem"
    />
  );
}
