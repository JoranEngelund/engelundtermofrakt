import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { About } from "./components/pages/About";
import Contact from "./components/pages/Contact";

/**
 * App Component is the entry point of the application and sets up the routing using React Router.
 *
 * The component defines different routes and their corresponding components to be rendered
 * when a particular route matches the current URL. It wraps the main content with the Layout
 * component, which represents the overall layout structure of the website.
 *
 * @component
 * @returns {JSX.Element} Rendered JSX Element representing the application's routing and layout.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}
