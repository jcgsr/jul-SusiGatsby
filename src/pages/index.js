// 17.07.2021 - início do novo site de Susi feito com Gatsby
// Susi e Diana estavam em Pratagi :)

import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Lottie from "react-lottie";
import animationData from "../../src/assets/lotties/110375-bapcelebration.json";

import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Layout>
      <SEO title="Home" description="Susi Pessôa - Terapeuta Holística" />
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
            src="../assets/images/susi2.jpg"
            alt="Foto de Susi"
            layout="constrained"
            placeholder="blurred"
          />
        </div>
        <Lottie
          className="lotties"
          options={defaultOptions}
          height={200}
          width={400}
        />
      </main>
    </Layout>
  );
};

export default Home;
