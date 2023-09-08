import React from "react";
import Layout from "../../components/Layout";

import { StaticImage } from "gatsby-plugin-image";

import SEO from "../../components/SEO";

const Magnetoterapia = () => {
  return (
    <Layout>
      <SEO title="Magnetoterapia" description="Página sobre Magnetoterapia" />
      <h2>
        Magnetoterapia
      </h2>
      <div className="about-card">
        <StaticImage
          src="./magneto.jpg"
          alt="foto de reiki"
          placeholder="blurred"
          layout="constrained"
          width={900}
          height={400}
        />
        <a
          href="https://www.pexels.com/pt-br/foto/bola-esfera-baile-eletricidade-10186702/
"
          style={{ fontSize: "10px", textAlign: "right" }}
        >
          Foto de Ron Lach
        </a>
        <h4>
          O que é
        </h4>
        <p>
          É a aplicação de um campo predominantemente magnético originado a
          partir de frequências altas e baixas, com finalidade terapêutica.
        </p>
        <p>
          Utiliza a energia eletromagnética para auxiliar na cura eficaz, segura
          e não invasiva. Os campos magnéticos interagem com as células,
          promovendo as condições fisiológicas de equilíbrio.
        </p>
        <p>
          Atua nos Sistemas ósseo, muscular, respiratório, nervoso e
          circulatório.
        </p>
        <h4>
          Benefícios
        </h4>
        <ul>
          <li>Alivia a dor: atua como analgésico potente</li>
          <li>Acelera processos de cura</li>
          <li>Estimula as trocas celulares</li>
          <li>Melhora a oxigenação e a nutrição dos tecidos</li>
          <li>Reduz as Inflamações</li>
          <li>Regenera as células sem energia</li>
          <li>
            Atrasa o processo de diminuição da densidade óssea
          </li>
        </ul>
        <h4>
          Efeitos
        </h4>
        <ul>
          <li>Anti-inflamatório</li>
          <li>Estimulante do Sistema Endócrino</li>
          <li>Combate edemas</li>
          <li>Reparador dos Tecidos</li>
          <li>Antiestresse</li>
        </ul>
        <h4>
          Aplicação
        </h4>
        <p>
          Aplicamos pequenos discos magnéticos nos locais a serem tratados ou em
          pontos reflexos de acupuntura, por exemplo.
        </p>
        <p>
          Cada pólo magnético, norte ou sul, é aplicado conforme a necessidade.
          Também há uma aplicação para equilíbrio geral feita em determinados
          pontos.
        </p>
      </div>
    </Layout>
  );
};

export default Magnetoterapia;
