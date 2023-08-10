import React from "react";
import Navbar from "./componants/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./container/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
