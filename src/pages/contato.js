import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import { useForm, ValidationError } from "@formspree/react";

import ReCaptcha from "@pittica/gatsby-plugin-recaptcha";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const Contato = () => {
  const [submitted, setSubmitted] = useState(false);
  const submit = token => {};
  //   const [state, handleSubmit] = useForm("https://formspree.io/f/mbjqzyeq");
  //   if (state.succeeded) {
  //     return <p>Obrigada por sua mensagem!</p>;
  //   }
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

        {/* <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
          <ValidationError errors={state.errors} />
          <ReCaptcha
            action="contato"
            siteKey="6Leps_8jAAAAAMVOiVNIRjwUwowB-RdZ9COcQKj4"
            onVerify={token => submit(token)}
            submitted={submitted}
          />
        </form>*/}

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

          <button
            className="gravar"
            type="submit"
            onClick={() => setSubmitted(true)}
          >
            Enviar
          </button>
          <ReCaptcha
            action="contato"
            siteKey="6Leps_8jAAAAAMVOiVNIRjwUwowB-RdZ9COcQKj4"
            onVerify={token => submit(token)}
            submitted={submitted}
          />
        </form>
      </section>
    </Layout>
  );
};
export default Contato;
