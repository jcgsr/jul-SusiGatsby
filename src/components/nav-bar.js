import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>Susi</span>

      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/login">Login</Link>
        {` `}
        <Link to="/anamneseform">Anamnese</Link>
        {` `}
        <Link to="/doshaform">Anamnese Ayurveda</Link>
        {` `}
      </nav>
    </div>
  );
}
