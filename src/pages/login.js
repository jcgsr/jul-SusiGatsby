import React, { useState } from "react";
import { firebase } from "../services/firebase/firebase";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Sinergia from "../components/sinergia";
import Pacote from "../components/pacote";
import Anamnese from "../components/anamnese";

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
  // const handleShowSinergia = () => {
  //   setShowSinergias(true);
  //   setShowPacotes(false);
  // };
  // FIM SHOW COMPONENTS
  return (
    <Layout>
      {!isLogged ? (
        <>
          <h2>Login</h2>
          <form>
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
        </>
      ) : (
        <>
          <h2>olá, {email}</h2>
          <div>
            <button
              onClick={() => (
                setShowAnamnese(true),
                setShowSinergias(false),
                setShowPacotes(false)
              )}
            >
              anamnese
            </button>

            <button
              onClick={() => (
                setShowSinergias(false),
                setShowPacotes(true),
                setShowAnamnese(false)
              )}
            >
              pacotes
            </button>
            <button
              onClick={() => (
                setShowSinergias(true),
                setShowPacotes(false),
                setShowAnamnese(false)
              )}
            >
              sinergias
            </button>
          </div>
          {showSinergias && <Sinergia />}
          {showPacotes && <Pacote />}
          {showAnamnese && <Anamnese />}
          <button onClick={handleLogout}>logout</button>
        </>
      )}
    </Layout>
  );
};

export default Login;
