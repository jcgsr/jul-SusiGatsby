import React, { useState } from "react";
import { Link } from "gatsby";

import { BiMenu } from "react-icons/bi";

export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="btn">Susi</span>
      </Link>
      <div className="dropdown">
        <button onClick={() => setShow(!show)} className="btn btn-menu">
          <BiMenu />
        </button>
        <div className={show ? "dropdown-content" : "nav-links"}>
          <Link
            to="/anamneseform"
            className="btn"
            onClick={() => setShow(false)}
          >
            Anamnese
          </Link>
          {` `}
          <Link to="/doshaform" className="btn" onClick={() => setShow(false)}>
            Anamnese Ayurveda
          </Link>
          {` `}
          <Link to="/login" className="btn" onClick={() => setShow(false)}>
            Login
          </Link>
          {` `}{" "}
          <Link to="/about" className="btn" onClick={() => setShow(false)}>
            Sobre mim
          </Link>
          {` `}
          <Link to="/contato" className="btn" onClick={() => setShow(false)}>
            Contatos
          </Link>
          {` `}
        </div>
      </div>
    </nav>
  );
}
