import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { Router } from "@reach/router";
import PrivateRoute from "./dashboard.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // LOGIN
  // const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () =>
    toast("Logada com sucesso, Susi!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleLogin = async e => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        navigate("/dashboard");
        notify();

        // ...
      })
      .catch(error => {
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <Layout>
      <Router basepath="/">
        <PrivateRoute path="/dashboard" />
      </Router>

      <SEO title="Login" description="Página de login" />

      <main className="container">
        <h2>Login</h2>
        <form className="form">
          <label htmlFor="email">e-mail</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <button id="login" onClick={handleLogin}>
            login
          </button>
        </form>
      </main>
      <ToastContainer />
    </Layout>
  );
};

export default Login;
