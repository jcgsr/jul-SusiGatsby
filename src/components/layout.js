import React from "react";

import NavBar from "./nav-bar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
