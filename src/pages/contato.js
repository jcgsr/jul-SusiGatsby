import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const Contato = () => {
  return (
    <Layout>
      <SEO title="Contatos" description="Página de contatos" />
      <h2>Contatos</h2>
      <section className="btn-anamnese">
        <button className="btn">
          <a href="https://www.instagram.com/massoterapeuta_susipessoa/?hl=pt-br">
            <FaInstagram />
          </a>
        </button>
        <button>
          <a href="https://api.whatsapp.com/send?phone=5579988445130&text=">
            <FaWhatsapp />
          </a>
        </button>
        <form
          action="https://formspree.io/f/mbjqzyeq"
          method="POST"
          className="form"
        >
          <label>
            Seu e-mail:
            <input type="email" name="_replyto" />
          </label>
          <label>
            Sua mensagem:
            <textarea name="message"></textarea>
          </label>

          <button className="gravar" type="submit">
            Enviar
          </button>
        </form>
      </section>
    </Layout>
  );
};
export default Contato;
