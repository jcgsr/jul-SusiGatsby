import React, { useState } from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";
/*import prices from "../constants/prices";*/

/*import terapias from "../constants/prices";*/
import Lottie from "react-lottie";
import animationData from "../../src/assets/lotties/98454-success.json";

const Valores = () => {
  /*const [readMore, setReadMore] = useState(false);*/
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
      <SEO
        title="Valores"
        description="Página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores</h1>{" "}
      <Lottie
        className="lotties"
        options={defaultOptions}
        height={250}
        width={400}
      />
      {/*<div className="price-container">*/}{" "}
      <section className="prices">
        <table>
          <tr>
            <th>Terapias</th>
            <th>1 sessão no meu espaço¹</th>
            <th>4 sessões no meu espaço¹</th>
            <th>Em domicílio/ Espaço Bia Munaretto² - 1 sessão</th>
            <th>Em domicílio/ Espaço Bia Munaretto² - 4 sessões</th>
            <th>inclui</th>
          </tr>
          <tr>
            <td>
              <strong>
                Massagem Terapêutica/Pedras Quentes • Velas • Pindas Chinesas
              </strong>
            </td>
            <td>R$ 110</td>
            <td>R$ 380</td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td>*</td>
          </tr>
          <tr>
            <td>
              <strong>Drenagem Linfática</strong>
            </td>
            <td>R$ 110</td>
            <td>R$ 380</td>
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
              <strong>Reiki</strong>
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
              <strong>Aromaterapia</strong>
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
            **** A Aromaterapia inclui: 🌷 A consulta inclui análise da
            situação, determinação da abordagem Terapêutica e aplicação com
            toque terapêutico e inalação. Por exemplo, massagem nas mãos e nos
            pés. Também está incluso a consulta de retorno. 🌷 As formulações
            que serão utilizadas no tratamento não estão inclusas nesse valor.
            Por exemplo: inalador pessoal, perfume terapêutico, óleo corporal
            e/ou facial e spray.
          </p>
        </section>
        <hr />
        <section className="map">
          <div className="map-item">
            <p>¹Bairro Luzia</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.401241986749!2d-37.077940976890915!3d-10.936888557359238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3c70bf41913%3A0x5dac985da18161af!2sLuzia%2C%20Aracaju%20-%20SE!5e0!3m2!1spt-BR!2sbr!4v1645654040523!5m2!1spt-BR!2sbr"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3907333541215!2d-37.05833468547132!3d-10.933828525170622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3940744dd47%3A0x8804eab28a3aa0b1!2sR.%20Ter%C3%AAncio%20Sampaio%2C%20354%20-%20Grageru%2C%20Aracaju%20-%20SE%2C%2049025-700!5e0!3m2!1spt-BR!2sbr!4v1643807541989!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Valores;
