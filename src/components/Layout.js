import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";

import "normalize.css";
import "../assets/css/main.css";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
