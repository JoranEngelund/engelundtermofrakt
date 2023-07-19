import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

/**
 * Layout Component represents the overall layout structure of the website.
 *
 * The component defines a flex-column layout with a minimum height of 100vh (viewport height).
 * It includes the Header component at the top, followed by the main content rendered through the Outlet component,
 * and finally, the Footer component at the bottom.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the layout structure of the website.
 */
export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
