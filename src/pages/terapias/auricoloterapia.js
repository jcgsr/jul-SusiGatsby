import React from "react";
import Layout from "../../components/Layout";

import { StaticImage } from "gatsby-plugin-image";

import SEO from "../../components/SEO";

const Auriculoterapia = () => {
  return (
    <Layout>
      <SEO title="Auriculoterapia" description="Página sobre Auriculoterapia" />
      <h2>
        Auriculoterapia
      </h2>
      <div className="about-card">
        <StaticImage
          src="./auricolo.jpg"
          alt="foto de reiki"
          placeholder="blurred"
          layout="constrained"
          width={900}
          height={400}
        />

        <h4>
          <strong>
            O que é
          </strong>
        </h4>
        <p>
          É uma técnica terapêutica baseada na Medicina Tradicional Chinesa que
          trata todos os tipos de disfunções e promove analgesia por meio de
          estímulos em pontos reflexos na orelha externa ou no pavilhão
          auricular. Esse estímulo é feito com as mesmas técnicas de acupuntura
          sistêmica, podendo ser feito com agulhas, eletroacupuntura, sementes
          de mostarda, dentre outros. Com a sensibilização desses pontos o
          cérebro recebe um impulso relacionado à área do corpo tratada,
          produzindo os resultados desejados pois a auricular reflete sobre o
          Sistema Nervoso Central.
        </p>
        <h4>
          <strong>
            Funções
          </strong>
        </h4>
        <ul>
          <li>Harmonizar o funcionamento dos Zang/Fu (órgãos e vísceras)</li>
          <li>Complementar o tratamento de enfermidades físicas e mentais</li>
        </ul>
        <h4>
          <strong>
            Indicações
          </strong>
        </h4>
        <p>
          Tratamento complementar de inúmeros quadros, a exemplo de:
        </p>
        <ul>
          <li>Alergias</li>
          <li>Ansiedade</li>
          <li>Artrite e atrose</li>
          <li>Asma</li>
          <li>Bursite</li>
          <li>
            Dores de todos os tipos: ciatalgia, cervicalgia, lombalgia,
            cefaléia, exaqueca, etc
          </li>
          <li>Dermatites</li>
          <li>Depressão</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Auriculoterapia;
