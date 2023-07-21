import { AboutBanner } from "../../Banner/aboutBanner";
import { IntroAboutCard } from "./Cards/Intro";
import AboutCards from "./Cards/AboutCards";
import Loader from "../../Loader";
import useApi from "../../../hooks/useApi";

/**
 * Renders the About page, fetching data from the API and displaying the AboutBanner,
 * IntroAboutCard, and AboutCards components.
 * @returns {JSX.Element} A React element representing the About page.
 */
export const About = () => {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/`;
  const { isLoading } = useApi(API_URL);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <section>
        <AboutBanner />
        <IntroAboutCard />
        <AboutCards />
      </section>
    </>
  );
};
