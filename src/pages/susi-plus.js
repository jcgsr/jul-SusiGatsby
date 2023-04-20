import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Link } from "gatsby";

const Dicas = () => {
  return (
    <Layout>
      <SEO
        title="Dicas de Autocuidado"
        description="Página com dicas simples sobre autocuidado para deixar a vida um pouco mais leve"
      />
      <h2>Dicas de Autocuidado</h2>
      <section className="about-card youtube">
        <article>
          <iframe
            height="315"
            src="https://www.youtube.com/embed/eNkGvbkdhKA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>
            Você pode tratar questões físicas, emocionais, mentais e energéticas
            com o uso seguro e eficaz dos óleos essenciais. Maiores informações,
            favor acessar meus{" "}
            <Link id="contatos" to="/contato">
              contatos
            </Link>
            .
          </p>
          <hr />
        </article>
        <article>
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
            compartilhar uma das técnicas que aprendi nas minhas práticas e
            também inspirada no livro Os Segredos da Massagem Ayurvédica, de
            Atreya.
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
                sobre o baixo ventre e sinta ele se elevar e se concentre nas
                mãos e não na respiração em si);
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
            *Caso não consiga, tire pelo menos 1min do seu dia e preste atenção
            na sua respiração.
          </p>
        </article>
        <hr />
        <article>
          <iframe
            height="315"
            src="https://www.youtube.com/embed/dVEGA22w0V4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Dica de Do-in, técnica de automassagem baseada na Medicina Chinesa
            para aliviar ansiedade, insônia e momentos de angústia. CUIDADO:
            pode baixar a pressão arterial. Lembre-se! Procure um profissional
            para um tratamento caso necessário.
          </p>
        </article>
        <hr />
        <article>
          <iframe
            height="315"
            src="https://www.youtube.com/embed/Q-BRIWX_YOw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Aprenda uma técnica simples de automassagem para aliviar a tensão e
            as dores na região do trapézio superior, toda a região dos ombros e
            pescoço.
          </p>
          <p>
            É interessante aliar outras técnicas e hábitos para resultados mais
            eficazes, a exemplo da RESPIRAÇÃO (LINK PARA ESSA TÉCNICA NO FINAL)
            e alongamentos. - Nosso corpo é um só, todas as suas funções estão
            interligadas, dentro de uma visão integral do ser. E cada indivíduo
            é único, sendo que cada técnica pode se adequar mais ou menos a
            depender de sua realidade.{" "}
          </p>
          <p>
            ESSAS INFORMAÇÕES NÃO SUBSTITUEM TRATAMENTO COM PROFISSIONAL
            HABILITADO!
          </p>
        </article>
      </section>
    </Layout>
  );
};
export default Dicas;
