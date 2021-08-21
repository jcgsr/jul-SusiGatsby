import React, { useState } from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";
import prices from "../constants/prices";

const Valores = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Layout>
      <SEO
        title="Valores"
        description="Página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores*</h1>
      {/*<div className="price-container">*/}{" "}
      <section className="prices">
        {prices.map(price => {
          const { id, title, m1, m2, p1, p2, p3, p4, includes } = price;
          return (
            <article key={id} className="price">
              <div className="">
                <h3>
                  <strong>{title}</strong>
                </h3>
                <p className="padrao">Padrão</p>
                <p>{m1}</p>
                <p className="price-value">{p1}</p>
                <p>{m2}</p>
                <p className="price-value">{p2}</p>

                <hr />

                <p className="casa">Em Domicílio</p>
                <p>{m1}</p>
                <p className="price-value">{p3}</p>
                <p>{m2}</p>
                <p className="price-value">{p4}</p>
                <hr />
                <div className="includes">
                  <p>
                    Essa mensagem inclui:
                    {readMore ? includes : `${includes.substring(0, 50)}...`}
                  </p>
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "mostrar menos" : "mostrar mais"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <p id="price-message">*Todos os valores com preço de à vista.</p>
      {/*</div>*/}
    </Layout>
  );
};

export default Valores;
