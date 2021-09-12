import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { FaYoutube } from "react-icons/fa";
const Dicas = () => {
  return (
    <Layout>
      <SEO
        title="Dicas de Autocuidado"
        description="Página com dicas simples sobre autocuidado para deixar a vida um pouco mais leve"
      />
      <h2>Dicas de Autocuidado</h2>
      <section className="card">
        <FaYoutube />
      </section>
    </Layout>
  );
};
export default Dicas;
