import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/**
 * Render the application's main entry point.
 *
 * This code sets up the React root using `ReactDOM.createRoot` and renders the application's
 * main component, `<App />`, wrapped in `<BrowserRouter>` and `<React.StrictMode>`.
 * The `BrowserRouter` provides routing functionality to the application, allowing it to handle
 * different routes and navigate between pages.
 * The `React.StrictMode` helps identify potential problems in the application during development
 * and enforces stricter checks and warnings.
 *
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
