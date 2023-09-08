import React from "react";
import Layout from "../../components/Layout";

import { StaticImage } from "gatsby-plugin-image";

import SEO from "../../components/SEO";

const Reiki = () => {
  return (
    <Layout>
      <SEO title="Aromaterapia" description="Página sobre Reiki" />
      <h2>
        Reiki
      </h2>
      <div className="about-card">
        <StaticImage
          src="./reiki.jpg"
          alt="foto de reiki"
          placeholder="blurred"
          layout="constrained"
          width={900}
          height={400}
        />
        <a
          href="https://www.pexels.com/pt-br/foto/adulto-atmosfera-clima-aura-6932123/

"
          style={{ fontSize: "10px", textAlign: "right" }}
        >
          Foto de Mikhail Nilov
        </a>

        <h4>O que é</h4>
        <p>
          REI = Universal (essência energética cósmica que permeia todas as
          coisas). KI = Energia vital individual (que flui em todos os
          organismos vivos).
        </p>
        <ul>
          <li>
            Terapia natural e complementar que originalmente utiliza a energia
            universal para harmonizar a energia vital individual
          </li>
          <li>
            Visa recuperar e manter a saúde física, mental, emocional e
            espiritual
          </li>
          <li>
            Prática segura e eficiente que busca equilibrar os Chakras ou
            Centros de Força de energia sutil
          </li>
          <li>
            Não possui contra-indicações, sendo compatível com qualquer tipo de
            tratamento
          </li>
        </ul>
        <p>
          O Reiki tradicional foi iniciado pelo japonês Mikao Usui no início do
          século XX. Atualmente é uma terapia reconhecida pela OMS e pelo
          Ministério da Saúde como prática integrativa e complementar de saúde,
          podendo ser aliada aos tratamentos convencionais de todas as espécies,
          de depressão a câncer. Relaxa, ajuda a diminuir estresse, insônia,
          ansiedade pois equilibra o corpo integralmente, que por vezes
          encontra-se com "bloqueios" em virtude de excessos físicos,
          emocionais, mentais e energéticos que interrompem o fluxo de energia
          vital
        </p>
        <h4>Benefícios</h4>
        <ul>
          <li>
            Auxilia no alívio de dores físicas de todas as espécies
          </li>
          <li>
            Promove o alívio do estresse em geral pois produz sensação de leveza
            e bem estar*
          </li>
          <li>
            Auxilia no tratamento de insônia, ansiedade, depressão dentre outras
            enfermidades, tanto físicas quanto mentais
          </li>
        </ul>
        <div style={{ fontSize: "12px" }}>
          *Muitos pacientes relatam incrível sensação de relaxamento, mesmo
          quando não há sequer algum toque no corpo, embora eu particularmente
          goste de trabalhar com o toque na maioria das vezes. Porém, em alguns
          casos de curas profundas, pode haver também liberação de traumas e nas
          primeiras sessões alguns desconfortos tanto emocionais quanto físicos
          durante e após a sessão, o que no decorrer do tratamento vai cessando
          e se transformando em cura e bem estar.
        </div>
        <h4>
          Aplicação
        </h4>
        <ul>
          <li>
            Por meio da imposição de mãos do terapeuta sobre o paciente em
            determinados pontos, tocando ou não no corpo
          </li>
          <li>
            Pode ser aplicado também à distância pois é uma energia como ondas
            de rádio, por exemplo
          </li>
          <li>
            O terapeuta funciona como um canal por onde a energia passa
          </li>
          <li>
            É um excelente recurso terapêutico para casos em que não é
            aconselhável ou há impedimento de toque pois pode ser aplicado
            apenas por imposição ou à distância
          </li>
        </ul>
        <p>
          Quer conhecer mais sobre essa terapia maravilhosa que é o Reiki? Entre
          em contato comigo! 🌹
        </p>
      </div>
    </Layout>
  );
};

export default Reiki;
