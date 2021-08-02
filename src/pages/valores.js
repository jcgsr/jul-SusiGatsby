import React from "react";
import Layout from "../components/Layout";

// import Title from "../components/Title";
import prices from "../constants/prices";

const Valores = () => {
  return (
    <Layout>
      <h1>Valores*</h1>
      {/*<div className="price-container">*/}{" "}
      <section className="prices">
        {prices.map(price => {
          const { id, title, m1, m2, p1, p2, p3, p4 } = price;
          return (
            <article key={id} className="price">
              <div className="">
                <h3>{title}</h3>
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
      {/*</div>*/}
    </Layout>
  );
};

export default Valores;
