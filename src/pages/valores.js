import React, { useState } from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";
import prices from "../constants/prices";

import terapias from "../constants/prices"

const Valores = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Layout>
      <SEO
        title="Valores"
        description="Página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores</h1>
      {/*<div className="price-container">*/}{" "}
     
      <section className="prices">
        <table>
          <tr>
            <th>Terapias</th>
            <th>1 sessão</th>
            <th>4 sessões</th>
            <th>Domicílio - 1 sessão</th>
            <th>Domicílio - 4 sessões</th>
            <th>inclui</th>
          </tr>
          <tr>
            <td><strong>Relaxante</strong></td>
            <td>R$ 100</td>
            <td>R$ 340</td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td>*</td>
          </tr> 
          <tr>
            <td><strong>Drenagem</strong></td>
            <td>R$ 100</td>
            <td>R$ 340</td>
            <td>R$ 130</td>
            <td>R$ 440</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Lipomodelagem Vegana</strong></td>
            <td>R$ 130</td>
            <td>R$ 400</td>
            <td>R$ 150</td>
            <td>R$ 490</td>
            <td>**</td>
          </tr>
          <tr>
            <td><strong>Ayurveda</strong></td>
            <td>R$ 130</td>
            <td>R$ 400</td>
            <td>R$ 150</td>
            <td>R$ 490</td>
            <td></td>
          </tr> 
          <tr>
            <td><strong>Pedras Quentes • Velas • Pindas Chinesas</strong></td>
            <td>R$ 120</td>
            <td>R$ 380</td>
            <td>-</td>
            <td>-</td>
            <td></td>
          </tr> 
          <tr>
            <td><strong>Reiki</strong></td>
            <td>R$ 70</td>
            <td>R$ 240</td>
            <td>R$ 100</td>
            <td>R$ 360</td>
            <td>***</td>
          </tr>
          <tr>
            <td><strong>Auricoloterapia</strong></td>
            <td>R$ 70</td>
            <td>R$ 240</td>
            <td>R$ 100</td>
            <td>R$ 360</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Ventosaterapia</strong></td>
            <td>R$ 70</td>
            <td>R$ 240</td>
            <td>R$ 100</td>
            <td>R$ 360</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Aromaterapia</strong></td>
            <td>R$ 120</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>****</td>
          </tr>
        </table>
        <section id="inclui">
        <p>
          * 🌷 Aromaterapia - com óleos terapêuticos totalmente naturais, preparados especialmente para cada indivíduo. 🌷 Aplicação de magnetos (auxilia no equilíbrio geral e alívio de dores). 🌷 Ventosas (caso necessário) 🌷 Reiki (algumas sessões, conforme necessidade)🌷 Alinhamento de Chakras com cristais, conforme necessidade e desejo do cliente
        </p>
        <p>
          ** 🌷 Suco e chá Detox 🌷 Manta térmica 🌷 Argila (opcional) 🌷 Óleos específicos com ativos desintoxicantes, estimulantes do metabolismo e do sistema linfático e circulatório, etc.🌷 Massagem no corpo todo (dura em média 1h30)
        </p>
        <p>
          *** 🌷Análise dos Chakras com o pêndulo 🌷 Aromaterapia 🌷Cristais
        </p>
        <p>
          **** 🌷 A consulta inclui análise da situação, determinação da abordagem Terapêutica e aplicação com toque terapêutico e inalação. Por exemplo, massagem nas mãos e nos pés. Também está incluso a consulta de retorno. 🌷 As formulações que serão utilizadas no tratamento não estão inclusas nesse valor. Por exemplo: inalador pessoal, perfume terapêutico, óleo corporal e/ou facial e spray.
        </p>
        </section>
      </section>
     
      
    </Layout>
  );
};

export default Valores;
