import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";

import CookieConsent from "react-cookie-consent";

import "normalize.css";
import "../assets/css/main.css";

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <motion.main
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      {children}
    </motion.main>
    <CookieConsent buttonText="Entendi">
      Este site usa cookies para melhorar a experiência do usuário.
    </CookieConsent>
    <Footer />
  </>
);

export default Layout;
