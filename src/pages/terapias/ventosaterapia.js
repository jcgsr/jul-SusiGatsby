import React from "react";
import Layout from "../../components/Layout";

import { StaticImage } from "gatsby-plugin-image";

import SEO from "../../components/SEO";

const Ventosaterapia = () => {
  return (
    <Layout>
      <SEO title="Ventosaterapia" description="Página sobre Ventosaterapia" />
      <h2>
        Ventosaterapia
      </h2>
      <div className="about-card">
        <StaticImage
          src="./ventosa.jpg"
          alt="foto de ventosas"
          placeholder="blurred"
          layout="constrained"
          width={900}
          height={400}
        />
        <a
          href="https://www.pexels.com/pt-br/foto/medicina-alternativa-homem-relaxamento-descanso-8313443/
"
          style={{ fontSize: "10px", textAlign: "right" }}
        >
          Foto de RDNE Stock project
        </a>

        <h4>
          O que é
        </h4>
        <p>
          É uma terapia complementar que utiliza sucção em regiões do corpo ou
          pontos de acupuntura, por meio do vácuo provocado pela pressão
          negativa local com copos especiais de vidro ou acrílico.
        </p>
        <p>
          Pode auxilar na prevenção e tratamento de diversas enfermidades, bem
          como no alívio de dores.
        </p>
        <p>
          A aplicação das ventosas nos pontos de acupuntura promovem melhor
          funcionamento do Sistema Nervoso, fortalecendo também o Sistema
          Imunológico pois promove melhor circulação do Qi (energia vital) e do
          Xue (sangue), purificando-os. O corpo todo pode ser ativado quando
          aplicamos ventosas nas costas.
        </p>
        <p>
          A ventosaterapia pode aliviar sintomas de: gripe, resfriado, tosse,
          bronquite, cólica, indigestão, enxaqueca, insônia, artrite,
          reumatismo, tensão muscular, lombalgia, torcicolo, bursite, dentre
          outros.
        </p>
        <p>
          Localmente, ela promove a circulação, metabolismo e ajustes
          nutricionais. A congestão (vermelhidão após) ocorre por causa da
          alteração da pressão osmótica, aumentando a circulação linfática e
          fortalecendo o sistema imunológico, reduzindo a inflamação no tecido
          muscular.
        </p>
        <p>
          É um tratamento que inicialmente pode até provocar um desconforto,
          pela pressão na pele, porém, promove um excelente relaxamento geral e
          muscular, além de aliviar o estresse e propiciar boas horas de sono.
        </p>
        <h4>
          Benefícios
        </h4>
        <ul>
          <li>
            Movimenta o Qi (Energia vital individual) e o Xue (sangue) -
            dispersa as estagnacões
          </li>
          <li>Vasodilatação</li>
          <li>
            Auxilia o fluxo da linfa
          </li>
          <li>
            Estimula as secreções gástricas, a absorção e os movimentos
            peristálticos
          </li>
          <li>Sedação do Sistema Nervoso</li>
          <li>Auxilia no alívio de dores diversas</li>
        </ul>
        <h4>
          Principais indicações
        </h4>
        <ul>
          <li>Deficiência e estagnacão do Qi e Xue</li>
          <li>Patologias do Sistema Músculo-esquelético</li>
          <li>Patologias do Sistema Respiratório</li>
          <li>Patologias do Sistema Digestório</li>
          <li>Hipertensão arterial</li>
          <li>Ansiedade, euforia, inquietação extrema</li>
        </ul>
        <h4>
          Contra-indicações
        </h4>
        <ul>
          <li>Febre</li>
          <li>Lesões cutâneas</li>
          <li>Doenças infecto-contagiosas</li>
          <li>Neoplasias</li>
          <li>Convulsões</li>
          <li>Fratura</li>
          <li>Doenças hemorrágicas</li>
          <li>Vasculites</li>
          <li>Doenças cardiovasculares agudas</li>
          <li>Gravidez (algumas regiões)</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Ventosaterapia;
