// 17.07.2021 - início do novo site de Susi feito com Gatsby
// Susi e Diana estavam em Pratagi :)

import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" description="Essa é a página inicial" />
      <main className="page">
        <h1>Susi Pessôa</h1>
        <h2>Terapias Holísticas</h2>
        <div style={{ maxWidth: "60%", textAlign: "left", margin: "0 auto" }}>
          <q>
            O caminho para o equilíbrio integral de cada indivíduo começa pela
            busca do autoconhecimento e do autocuidado. A massoterapia e as
            terapias complementares podem ser excelentes ferramentas nesse
            processo, indo muito além da busca pelo bem-estar, prevenção e
            tratamento de enfermidades.
          </q>
          <address id="author">Susi Pessôa</address>
        </div>
        <div id="susi-img">
          <StaticImage
            id="img"
            src="../assets/images/susi.jpg"
            alt="Foto de Susi"
            layout="constrained"
            placeholder="blurred"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
