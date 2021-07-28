import React, { useState } from "react";
import { firebase } from "../services/firebase";
import { navigate } from "gatsby";

import Layout from "../components/Layout";
import Sinergia from "../components/Sinergia";
import Pacote from "../components/Pacote";
import Anamnese from "../components/Anamnese";
import Doshas from "../components/Doshas";
import Antigos from "../components/Antigos";

const Login = () => {
  // LOGIN
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setIsLogged(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/");
  };
  // FIM LOGIN

  // SHOW COMPONENTS
  const [showSinergias, setShowSinergias] = useState(false);
  const [showPacotes, setShowPacotes] = useState(false);
  const [showAnamnese, setShowAnamnese] = useState(false);
  const [showDoshas, setShowDoshas] = useState(false);
  const [showAntigos, setShowAntigos] = useState(false);

  // FIM SHOW COMPONENTS
  return (
    <Layout>
      {!isLogged ? (
        <main className="container">
          <h2>Login</h2>
          <form className="form">
            <label htmlFor="email">email</label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="email">password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>login</button>
          </form>
        </main>
      ) : (
        <main className="page">
          <h2>olá, {email}</h2>
          <div>
            <button
              onClick={() => (
                setShowAnamnese(true),
                setShowSinergias(false),
                setShowPacotes(false),
                setShowDoshas(false),
                setShowAntigos(false)
              )}
            >
              anamnese
            </button>

            <button
              onClick={() => (
                setShowSinergias(false),
                setShowPacotes(true),
                setShowAnamnese(false),
                setShowDoshas(false),
                setShowAntigos(false)
              )}
            >
              pacotes
            </button>
            <button
              onClick={() => (
                setShowSinergias(true),
                setShowPacotes(false),
                setShowAnamnese(false),
                setShowDoshas(false),
                setShowAntigos(false)
              )}
            >
              sinergias
            </button>
            <button
              onClick={() => (
                setShowDoshas(true),
                setShowSinergias(false),
                setShowPacotes(false),
                setShowAnamnese(false),
                setShowAntigos(false)
              )}
            >
              doshas
            </button>
            <button
              onClick={() => (
                setShowAntigos(true),
                setShowDoshas(false),
                setShowSinergias(false),
                setShowPacotes(false),
                setShowAnamnese(false)
              )}
            >
              antigos
            </button>
          </div>
          {showSinergias && <Sinergia />}
          {showPacotes && <Pacote />}
          {showAnamnese && <Anamnese />}
          {showDoshas && <Doshas />}
          {showAntigos && <Antigos />}
          <button onClick={handleLogout}>logout</button>
        </main>
      )}
    </Layout>
  );
};

export default Login;
