import * as s from "./styled";
import logoWheel from "./../../assets/images/wheel_logo.png";
import { PuffLoader, PulseLoader } from "react-spinners";

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
      <PuffLoader size={100} color="#2b2070" />
    </s.LoadingContainer>
  );
}

export const FormLoader = () => {
  return <PulseLoader size={7} color="#ffffff" />;
};
