import React from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";
import prices from "../constants/prices";

const Valores = () => {
  return (
    <Layout>
      <SEO
        title="Valores"
        description="Essa é a página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores*</h1>
      {/*<div className="price-container">*/}{" "}
      <section className="prices">
        {prices.map(price => {
          const { id, title, m1, m2, p1, p2, p3, p4 } = price;
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
