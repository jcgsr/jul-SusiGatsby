import React, { useState } from "react";
import { Link } from "gatsby";

import links from "../constants/nav-links.js";

import { BiMenu } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span className="btn">Susi</span>
          </Link>
          <button className="nav-toggle">
            <BiMenu />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <Link to="/anamneseform">Anamnese</Link>
            </li>
            <li>
              <Link to="/doshaform">Anamnese Ayurveda</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">Sobre mim</Link>
            </li>
            <li>
              <Link to="/contato">Contatos</Link>
            </li>
            <li>
              <Link to="/valores">Preços</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar">
    //   <Link to="/">
    //     <span className="btn">Susi</span>
    //   </Link>
    //   <div className="dropdown">
    //     <button onClick={() => setShow(!show)} className="btn btn-menu">
    //       <BiMenu />
    //     </button>
    //     <div className={show ? "dropdown-content" : "nav-links"}>
    //       <div className="terapias-dropdown">
    //         <Link className="btn">
    //           Terapias <MdArrowDropDown />
    //           <div className="terapias-dropdown-content">
    //             <Link to="/anamneseform">Massagens</Link>
    //             <Link to="/anamneseform">Reiki</Link>
    //             <Link to="/anamneseform">Aromaterapia</Link>
    //             <Link to="/anamneseform">Auriculoterapia</Link>
    //             <Link to="/anamneseform">Ventosaterapia</Link>
    //             <Link to="/anamneseform">Magnetoterapia</Link>
    //           </div>
    //         </Link>
    //       </div>
    //       {` `}
    //       <Link
    //         to="/anamneseform"
    //         className="btn"
    //         onClick={() => setShow(false)}
    //       >
    //         Anamnese
    //       </Link>
    //       {` `}
    //       <Link to="/doshaform" className="btn" onClick={() => setShow(false)}>
    //         Anamnese Ayurveda
    //       </Link>
    //       {` `}
    //       <Link to="/login" className="btn" onClick={() => setShow(false)}>
    //         Login
    //       </Link>
    //       {` `}{" "}
    //       <Link to="/about" className="btn" onClick={() => setShow(false)}>
    //         Sobre mim
    //       </Link>
    //       {` `}
    //       <Link to="/contato" className="btn" onClick={() => setShow(false)}>
    //         Contatos
    //       </Link>
    //       {` `}
    //       <Link to="/valores" className="btn" onClick={() => setShow(false)}>
    //         Preços
    //       </Link>
    //       {` `}
    //     </div>
    //   </div>
    // </nav>
  );
}
