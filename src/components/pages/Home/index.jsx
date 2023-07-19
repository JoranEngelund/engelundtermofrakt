import useApi from "../../../hooks/useApi";
import HomeBanner from "../../Banner/homeBanner";
import Loader from "../../Loader";
import Error from "../../Error";
import { IntroCard } from "../../Kort/Intro";
import { InfoCards } from "../../Kort/Info";
import { ContactCard } from "../../Kort/Contact";

/**
 * Home Component displays the home page of the website.
 *
 * The component fetches data from the provided API_URL using the useApi custom hook.
 * It conditionally renders different components based on the loading and error states.
 * If the data is still loading, it displays the Loader component. If there is an error
 * fetching the data, it displays the Error component. Otherwise, it renders the following
 * components:
 *
 * - HomeBanner: Displays the banner section of the home page.
 * - IntroCard: Displays introduction cards fetched from the API.
 * - InfoCards: Displays information cards fetched from the API.
 * - ContactCard: Displays contact cards fetched from the API.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the home page of the website.
 */
export default function Home() {
  const API_URL = `https://api.termofrakt.no/wp-json/wp/v2/`;
  const { isLoading, isError } = useApi(API_URL);
  return (
    <>
      {isLoading ? <Loader /> : null}
      {isError ? <Error /> : null}
      <HomeBanner />
      <IntroCard />
      <InfoCards />
      <ContactCard />
    </>
  );
}
