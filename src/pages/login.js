import React, { useState } from "react";
import { firebase } from "../services/firebase/firebase";
import { navigate } from "gatsby";
import SusiDB from "./susidb";

import Layout from "../components/layout";
import Sinergia from "../components/sinergia";

const Login = () => {
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
          <SusiDB />
          <Sinergia />
          <button onClick={handleLogout}>logout</button>
        </>
      )}
    </Layout>
  );
};

export default Login;
