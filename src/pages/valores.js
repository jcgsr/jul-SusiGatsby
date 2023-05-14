import React from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";

import Lottie from "lottie-react";
import animationData from "../../src/assets/lotties/99977-money-pf.json";

const Valores = () => {
  const style = {
    height: 200,
    color: "#ddd",
  };

  return (
    <Layout>
      <SEO
        title="Valores"
        description="Página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores</h1> {/*<div className="price-container">*/}{" "}
      <section className="prices">
        <table>
          <tr>
            <th>Terapias</th>
            <th>1 sessão no meu espaço¹</th>
            <th>4 sessões no meu espaço¹</th>
            <th>Espaço Bia Munaretto² - 1 sessão</th>
            <th>Espaço Bia Munaretto² - 4 sessões</th>
            <th>inclui</th>
          </tr>
          <tr>
            <td>
              <strong>
                Massagem Terapêutica/Pedras Quentes • Velas • Pindas Chinesas
              </strong>
            </td>
            <td>R$ 120</td>
            <td>R$ 400</td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td>*</td>
          </tr>
          <tr>
            <td>
              <strong>Drenagem Linfática</strong>
            </td>
            <td>R$ 120</td>
            <td>R$ 400</td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Lipomodelagem Vegana</strong>
            </td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td>R$ 150</td>
            <td>R$ 490</td>
            <td>**</td>
          </tr>
          <tr>
            <td>
              <strong>Massagem Ayurveda</strong>
            </td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td>R$ 150</td>
            <td>R$ 490</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Reiki (presencial ou on-line)</strong>
            </td>
            <td>R$ 90</td>
            <td>R$ 300</td>
            <td>R$ 110</td>
            <td>R$ 360</td>
            <td>***</td>
          </tr>
          <tr>
            <td>
              <strong>Auricoloterapia</strong>
            </td>
            <td>R$ 80</td>
            <td>R$ 300</td>
            <td>R$ 100</td>
            <td>R$ 360</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Ventosaterapia</strong>
            </td>
            <td>R$ 80</td>
            <td>R$ 300</td>
            <td>R$ 100</td>
            <td>R$ 360</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Aromaterapia (presencial ou on-line)</strong>
            </td>
            <td>R$ 130</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>****</td>
          </tr>
        </table>
        <span>OBS.: Qualquer pacote é válido por somente 2 meses.</span>
        <hr />
        <section id="inclui">
          <p>
            * A Massagem Terapêutica inclui: 🌷 Aromaterapia - com óleos
            terapêuticos totalmente naturais, preparados especialmente para cada
            indivíduo. 🌷 Aplicação de magnetos (auxilia no equilíbrio geral e
            alívio de dores). 🌷 Ventosas (caso necessário) 🌷 Reiki (algumas
            sessões, conforme necessidade)🌷 Alinhamento de Chakras com
            cristais, conforme necessidade e desejo do cliente
          </p>
          <p>
            ** A Lipomodelagem Vegana inclui: 🌷 Suco e chá Detox 🌷 Manta
            térmica 🌷 Argila (opcional) 🌷 Óleos específicos com ativos
            desintoxicantes, estimulantes do metabolismo e do sistema linfático
            e circulatório, etc.🌷 Massagem no corpo todo (dura em média 1h20)
          </p>
          <p>
            *** O Reiki inclui: 🌷Análise dos Chakras com o pêndulo 🌷
            Aromaterapia 🌷Cristais
          </p>
          <p>
            **** A consulta da Aromaterapia inclui: 🌷 Análise da situação,
            determinação da abordagem Terapêutica, aplicação com toque
            terapêutico (atendimento presencial) e aplicação de reiki
            (atendimento on-line).
            <br />
            🌷 As formulações que serão utilizadas no tratamento não estão
            inclusas nesse valor, por exemplo: inalador pessoal, perfume
            terapêutico, óleo corporal e/ou facial e spray. Em caso de
            atendimentos à distância, as formulações poderão ser enviadas pelos
            correios (com frete por conta do cliente) ou poderão ser adquiridas
            de outras formas, assim como poderão ser manipuladas pelo próprio
            cliente, conforme a individualidade de cada um.
            <br />
            🌷 Também está inclusa a consulta de retorno
          </p>
        </section>
        <hr />
        <section className="map">
          <div className="map-item">
            <p>¹Bairro Luzia</p>
            <iframe
              title="luzia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2625769633396!2d-37.07185884885153!3d-10.943527125300607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3c501b9f377%3A0xd24f42c45111e4b9!2sR.%20Ant%C3%B4nio%20Vieira%20de%20Menezes%2C%2073%20-%20Luzia%2C%20Aracaju%20-%20SE%2C%2049048-260!5e0!3m2!1spt-BR!2sbr!4v1673973553572!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="map-item">
            <p>²Espaço Bia Munaretto</p>
            <iframe
              title="bia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3907333541215!2d-37.05833468547132!3d-10.933828525170622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3940744dd47%3A0x8804eab28a3aa0b1!2sR.%20Ter%C3%AAncio%20Sampaio%2C%20354%20-%20Grageru%2C%20Aracaju%20-%20SE%2C%2049025-700!5e0!3m2!1spt-BR!2sbr!4v1643807541989!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Lottie
          className="lotties"
          animationData={animationData}
          loop={true}
          style={style}
        />
      </section>
    </Layout>
  );
};

export default Valores;
