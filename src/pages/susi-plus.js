import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
const Dicas = () => {
  return (
    <Layout>
      <SEO
        title="Dicas de Autocuidado"
        description="Página com dicas simples sobre autocuidado para deixar a vida um pouco mais leve"
      />
      <h2>Dicas de Autocuidado</h2>
      <section className="card youtube">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/Pc23R8AjpLA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          A respiração é a mais importante e mais simples técnica de
          autoconhecimento. Uma respiração consciente é capaz de levar a um
          estado de relaxamento ou elevar a energia. Há diversas técnicas. Vou
          compartilhar uma das técnicas que aprendi nas minhas práticas e também
          inspirada no livro Os Segredos da Massagem Ayurvédica, de Atreya.
        </p>
        <p>
          RESPIRAÇÃO DIAFRAGMÁTICA
          <p>Relaxa e renova a energia vital</p>
        </p>
        <p>
          <strong>Como fazer? </strong>
        </p>
        <p>
          <ol>
            <li>Inspire o máximo de ar que puder pelo nariz;</li>
            <li>
              Em vez encher o pulmão e elevar o tórax, impulsione o ar para
              baixo, forçando o diafragma, elevando a barriga (coloque as mãos
              sobre o baixo ventre e sinta ele se elevar e se concentre nas mãos
              e não na respiração em si);
            </li>
            <li>
              Expire lentamente pelo nariz. É importante que o tempo da
              expiração seja maior que o da inspiração. (Você pode contar).
            </li>
          </ol>
        </p>
        <p>*Procure estar consciente e prestar atenção.</p>
        <p>*Pode fazer umas 3x por dia.</p>
        <p>
          *Caso não consiga, tire pelo menos 1min do seu dia e preste atenção na
          sua respiração.
        </p>
      </section>
    </Layout>
  );
};
export default Dicas;
