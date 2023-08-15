import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorPage from "./container/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import "./index.css";
import PortfolioFullPage from "./container/PortfolioFullPage/PortfolioFullPage";
import PortfolioSection from "./container/PortfolioSection/PortfolioSection";
import ContactUS from "./container/ContactUS/ContactUS";
import Services from "./container/Services/Services";
import Navbar from "./componants/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import LandingPage from "./componants/LandingPage/LandingPage";
import Home from "./Home";
import ServicesFullPage from "./container/ServicesFullPage/ServicesFullPage";
import ContactUsFullPage from "./container/ContactUsFullPage/ContactUsFullPage";
import ClientsFullPage from "./container/ClientsFullPage/ClientsFullPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicesFullPage />,
      },
      {
        path: `/clients`,
        element: <ClientsFullPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioFullPage />,
      },
      {
        path: `/contact us`,
        element: <ContactUsFullPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
