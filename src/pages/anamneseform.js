import React, { useState } from "react";

import { navigate } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import firebase from "gatsby-plugin-firebase";

const Anamnese = () => {
  // DADOS
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [idAnamnese, setIdAnamnese] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // PERGUNTAS
  const [alergias, setAlergias] = useState("");
  const [hipertensao, setHipertensao] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [marcapasso, setMarcapasso] = useState("");
  const [pinos, setPinos] = useState("");
  const [hernia, setHernia] = useState("");
  const [trombose, setTrombose] = useState("");
  const [cancer, setCancer] = useState("");
  const [hiv, setHIV] = useState("");
  const [gravidez, setGravidez] = useState("");
  const [meses, setMeses] = useState(0);
  const [gripe, setGripe] = useState("");
  const [depressao, setDepressao] = useState("");
  const [ansiedade, setAnsiedade] = useState("");
  const [dores, setDores] = useState("");
  const [corpo, setCorpo] = useState("");
  const [outraQuestao, setOutraQuestao] = useState("");
  const [qual, setQual] = useState("");
  const [anotacoes, setAnotacoes] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("anamneses")
      .add({
        nome: name,
        nascimento: birthday,
        profissao: profession,
        telefone: phone,
        alergia: alergias,
        hipertensao: hipertensao,
        diabetes: diabetes,
        marcapasso: marcapasso,
        pinos: pinos,
        hernia: hernia,
        trombose: trombose,
        cancer: cancer,
        hiv: hiv,
        gravidez: gravidez,
        meses: meses,
        gripe: gripe,
        depressao: depressao,
        ansiedade: ansiedade,
        dores: dores,
        corpo: corpo,
        outraQuestao: outraQuestao,
        qual: qual,
        anotacoes: anotacoes,
      })
      .then(() => {
        handleReset();
        alert("Anamnese gravada com sucesso.");
        navigate("/");
      })
      .catch(e => {
        console.log(e + "Error ao gravar anamnese");
      });
  };

  const handleReset = () => {
    setName("");
    setIdAnamnese("");
    setName("");
    setBirthday("");
    setAddress("");
    setProfession("");
    setPhone("");
    setCorpo("");
    setQual("");
    setAnotacoes("");
  };
  const handleSignUp = async e => {
    e.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert(`SUCESSO: ${email} cadastrado!`);
        setEmail("");
        setPassword("");
      })
      .catch(error => {
        if (
          error.code === "auth/weak-password" ||
          error.code === "auth/invalid-password"
        ) {
          alert("ERRO: Senha deve ter pelo menos 6 caracteresi.");
        } else if (error.code === "auth/email-already-in-use") {
          alert("ERRO: E-mail já cadastrado.");
        } else if (error.code === "auth/invalid-email") {
          alert("ERRO: E-mail inválido.");
        }
      });
  };

  return (
    <Layout>
      <SEO
        title="Anamnese - Formulário"
        description="Página para preenchimento da Anamnese"
      />
      <h1>Anamnese</h1>
      <h3>Bem-vindo(a), {name}!</h3>
      <h4>Cadastro</h4>
      <p className="aviso">
        Para a sua segurança, seus dados só serão enviados após a realização do
        cadastro abaixo.
      </p>
      <form className="form">
        <label htmlFor="email">e-mail</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">senha</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button id="login" onClick={handleSignUp}>
          cadastrar
        </button>
      </form>{" "}
      <hr />
      <section className="amazon">
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07PDHSJ1H&asins=B07PDHSJ1H&linkId=494f186f8112c90dd420d257604da889&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B08N2GHTN6&asins=B08N2GHTN6&linkId=5267f8867dc21b11429d962501a2195b&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07DKFLT3S&asins=B07DKFLT3S&linkId=c269f48cd487fe9786d30c18a0d05fc7&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
      <p className="aviso">
        Para um atendimento seguro e mais eficaz, preciso saber algumas questões
        de saúde.
      </p>{" "}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={idAnamnese}
          onChange={e => setIdAnamnese(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="age">Data de nascimento</label>
        <input
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="profession">Profissão</label>
        <input
          type="text"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {/* PERGUNTAS */}
        <div className="checkboxes" style={{ marginTop: "1rem" }}>
          <div onChange={e => setAlergias(e.target.value)}>
            <p>1. Alergias?</p>
            <input type="radio" name="alergias" value="sim" />
            <label htmlFor="alergias">Sim</label>
            <br />
            <input type="radio" name="alergias" value="não" />
            <label htmlFor="alergias">Não</label>
          </div>
          <div onChange={e => setHipertensao(e.target.value)}>
            <p>2. Hipertensão?</p>
            <input type="radio" name="hipertensao" value="sim" />
            <label htmlFor="hipertensao">Sim</label> <br />
            <input type="radio" name="hipertensao" value="não" />
            <label htmlFor="hipertensao">Não</label>
          </div>
          <div onChange={e => setDiabetes(e.target.value)}>
            <p>3.Diabetes?</p>
            <input type="radio" name="diabetes" value="sim" />
            <label htmlFor="diabetes">Sim</label> <br />
            <input type="radio" name="diabetes" value="não" />
            <label htmlFor="diabetes">Não</label>
          </div>
          <div onChange={e => setMarcapasso(e.target.value)}>
            <p>4. Marcapasso?</p>
            <input type="radio" name="marcapasso" value="sim" />
            <label htmlFor="marcapasso">Sim</label> <br />
            <input type="radio" name="marcapasso" value="não" />
            <label htmlFor="marcapasso">Não</label>
          </div>
          <div onChange={e => setPinos(e.target.value)}>
            <p>5. Pinos ou placas?</p>
            <input type="radio" name="pinos" value="sim" />
            <label htmlFor="pinos">Sim</label> <br />
            <input type="radio" name="pinos" value="não" />
            <label htmlFor="pinos">Não</label>
          </div>
          <div onChange={e => setHernia(e.target.value)}>
            <p>6. Hérnia?</p>
            <input type="radio" name="hernia" value="sim" />
            <label htmlFor="hernia">Sim</label> <br />
            <input type="radio" name="hernia" value="não" />
            <label htmlFor="hernia">Não</label>
          </div>
          <div onChange={e => setTrombose(e.target.value)}>
            <p>7. Trombose?</p>
            <input type="radio" name="trombose" value="sim" />
            <label htmlFor="trombose">Sim</label> <br />
            <input type="radio" name="trombose" value="não" />
            <label htmlFor="trombose">Não</label>
          </div>
          <div onChange={e => setCancer(e.target.value)}>
            <p>8. Câncer?</p>
            <input type="radio" name="cancer" value="sim" />
            <label htmlFor="cancer">Sim</label> <br />
            <input type="radio" name="cancer" value="não" />
            <label htmlFor="cancer">Não</label>
          </div>
          <div onChange={e => setHIV(e.target.value)}>
            <p>9. HIV?</p>
            <input type="radio" name="hiv" value="sim" />
            <label htmlFor="hiv">Sim</label> <br />
            <input type="radio" name="hiv" value="não" />
            <label htmlFor="hiv">Não</label>
          </div>
          <div onChange={e => setGravidez(e.target.value)}>
            <p>10. Gravidez?</p>
            <input type="radio" name="gravidez" value="sim" />
            <label htmlFor="gravidez">Sim</label> <br />
            <input type="radio" name="gravidez" value="não" />
            <label htmlFor="gravidez">Não</label>
            <div onChange={e => setMeses(e.target.value)}>
              <label htmlFor="meses">Quantos meses</label>
              <input type="number" value={meses} />
            </div>
          </div>
          <div onChange={e => setGripe(e.target.value)}>
            <p>11. Gripe ou resfriado?</p>
            <input type="radio" name="gripe" value="sim" />
            <label htmlFor="gripe">Sim</label> <br />
            <input type="radio" name="gripe" value="não" />
            <label htmlFor="gripe">Não</label>
          </div>
          <div onChange={e => setDepressao(e.target.value)}>
            <p>12. Depressão?</p>
            <input type="radio" name="depressao" value="sim" />
            <label htmlFor="depressao">Sim</label> <br />
            <input type="radio" name="depressao" value="não" />
            <label htmlFor="depressao">Não</label>
          </div>
          <div onChange={e => setAnsiedade(e.target.value)}>
            <p>13. Ansiedade?</p>
            <input type="radio" name="ansiedade" value="sim" />
            <label htmlFor="ansiedade">Sim</label> <br />
            <input type="radio" name="ansiedade" value="não" />
            <label htmlFor="ansiedade">Não</label>
          </div>
          <div onChange={e => setDores(e.target.value)}>
            <p>14. Dores?</p>
            <input type="radio" name="dores" value="sim" />
            <label htmlFor="dores">Sim</label> <br />
            <input type="radio" name="dores" value="não" />
            <label htmlFor="dores">Não</label>
            <div onChange={e => setCorpo(e.target.value)}>
              <label htmlFor="corpo">Local do corpo</label>
              <input type="text" value={corpo} />
            </div>
          </div>
          <div onChange={e => setOutraQuestao(e.target.value)}>
            <p>15. Alguma outra questão de saúde relevante para considerar?</p>
            <input type="radio" name="questão" value="sim" />
            <label htmlFor="questão">Sim</label> <br />
            <input type="radio" name="questão" value="não" />
            <label htmlFor="questão">Não</label>
            <div onChange={e => setQual(e.target.value)}>
              <input type="text" value={qual} />
            </div>
          </div>
          <div onChange={e => setAnotacoes(e.target.value)}>
            <p>16. Anotações?</p>
            <input type="text" value={anotacoes} />
          </div>
        </div>
        <button className="gravar" type="submit">
          enviar
        </button>
      </form>
      <section className="amazon">
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07FB8C83X&asins=B07FB8C83X&linkId=fcb4c1719cd69293330849a95a964513&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07XL916B1&asins=B07XL916B1&linkId=0322612800920901536a25263a7dc7be&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07FN7VP5Y&asins=B07FN7VP5Y&linkId=47500a44a2130ef2d230fac6469ec75f&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Anamnese;
