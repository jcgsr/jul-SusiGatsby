import React, { useState } from "react";

import { navigate } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [hipertensaoMedicacao, setHipertensaoMedicacao] = useState("");
  const [hipertensaoControlada, setHipertensaoControlada] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [diabetesMedicacao, setDiabetesMedicacao] = useState("");
  const [diabetesControlada, setDiabetesControlada] = useState("");
  const [marcapasso, setMarcapasso] = useState("");
  const [pinos, setPinos] = useState("");
  const [hernia, setHernia] = useState("");
  const [trombose, setTrombose] = useState("");
  const [tromboseTempo, setTromboseTempo] = useState("");
  const [cancer, setCancer] = useState("");
  const [cancerTempo, setCancerTempo] = useState("");
  const [hiv, setHIV] = useState("");
  const [diu, setDiu] = useState("");
  const [gravidez, setGravidez] = useState("");
  const [meses, setMeses] = useState(0);
  const [gestacaoNormal, setGestacaoNormal] = useState("");
  const [arteria, setArteria] = useState("");
  const [recMedica, setRecMedica] = useState("");
  const [gripe, setGripe] = useState("");
  const [covid, setCovid] = useState("");
  const [covidTempo, setCovidTempo] = useState("");
  const [vacina, setVacina] = useState("");
  const [vacinaTempo, setVacinaTempo] = useState("");
  const [depressao, setDepressao] = useState("");
  const [ansiedade, setAnsiedade] = useState("");
  const [dores, setDores] = useState("");
  const [inflamacao, setInflamacao] = useState("");
  const [inflamacaoTipo, setInflamacaoTipo] = useState("");
  const [hipertireoide, setHipertireoide] = useState("");
  const [asma, setAsma] = useState("");
  const [cardio, setCardio] = useState("");
  const [cirurgia, setCirurgia] = useState("");
  const [cirurgiaTipo, setCirurgiaTipo] = useState("");
  const [cirurgiaTempo, setCirurgiaTempo] = useState("");
  const [corpo, setCorpo] = useState("");
  const [outraQuestao, setOutraQuestao] = useState("");
  const [qual, setQual] = useState("");
  const [anotacoes, setAnotacoes] = useState("");
  const [razao, setRazao] = useState("");

  const notify = () =>
    toast.success("Anamnese gravada com sucesso", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyInfo = () =>
    toast.info(`SUCESSO: ${email} cadastrado!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const handleSubmit = async e => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("anamneses")
      .add({
        nome: name,
        nascimento: birthday,
        address: address,
        profissao: profession,
        telefone: phone,
        alergia: alergias,
        hipertensao: hipertensao,
        hipertensaoMedicacao: hipertensaoMedicacao,
        hipertensaoControlada: hipertensaoControlada,
        diabetes: diabetes,
        diabetesMedicacao: diabetesMedicacao,
        diabetesControlada: diabetesControlada,
        marcapasso: marcapasso,
        pinos: pinos,
        hernia: hernia,
        trombose: trombose,
        tromboseTempo: tromboseTempo,
        cancer: cancer,
        cancerTempo: cancerTempo,
        hiv: hiv,
        diu: diu,
        gravidez: gravidez,
        gestacaoNormal: gestacaoNormal,
        arteria: arteria,
        recMedica: recMedica,
        meses: meses,
        gripe: gripe,
        covid: covid,
        covidTempo: covidTempo,
        vacina: vacina,
        vacinaTempo: vacinaTempo,
        depressao: depressao,
        ansiedade: ansiedade,
        dores: dores,
        inflamacao: inflamacao,
        inflamacaoTipo: inflamacaoTipo,
        hipertireoide: hipertireoide,
        asma: asma,
        cardio: cardio,
        corpo: corpo,
        cirurgia: cirurgia,
        cirurgiaTipo: cirurgiaTipo,
        cirurgiaTempo: cirurgiaTempo,
        outraQuestao: outraQuestao,
        qual: qual,
        anotacoes: anotacoes,
        razao: razao,
      })
      .then(() => {
        handleReset();
        notify();
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
    setCancerTempo("");
    setTromboseTempo("");
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
        notifyInfo();
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
          alert("ERRO: E-mail j?? cadastrado.");
        } else if (error.code === "auth/invalid-email") {
          alert("ERRO: E-mail inv??lido.");
        }
      });
  };

  return (
    <Layout>
      <SEO
        title="Anamnese - Formul??rio"
        description="P??gina para preenchimento da Anamnese"
      />
      <ToastContainer />
      <h1>Anamnese</h1>
      <h3>Bem-vindo(a), {name}!</h3>
      <h4>Cadastro</h4>
      <p className="aviso">
        Para a sua seguran??a, seus dados s?? ser??o enviados ap??s a realiza????o do
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
      <p className="aviso">
        Para um atendimento seguro e mais eficaz, preciso saber algumas quest??es
        de sa??de.
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
        <label htmlFor="address">Endere??o</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="profession">Profiss??o</label>
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
            <input type="radio" name="alergias" value="n??o" />
            <label htmlFor="alergias">N??o</label>
          </div>
          <div onChange={e => setHipertensao(e.target.value)}>
            <p>2. Hipertens??o?</p>
            <input type="radio" name="hipertensao" value="sim" />
            <label htmlFor="hipertensao">Sim</label>
            <div onChange={e => setHipertensaoControlada(e.target.value)}>
              <span className="controle">??? Est?? controlada?</span>{" "}
              <input type="radio" name="hipertensaoControlada" value="sim" />
              <label className="controle" htmlFor="hipertensaoControlada">
                Sim
              </label>
              <input type="radio" name="hipertensaoControlada" value="n??o" />
              <label className="controle" htmlFor="hipertensaoControlada">
                N??o
              </label>
            </div>
            <div onChange={e => setHipertensaoMedicacao(e.target.value)}>
              <span className="controle">??? Toma medica????o?</span>
              {""}
              <input type="radio" name="hipertensaoMedicacao" value="sim" />
              <label className="controle" htmlFor="hipertensaoMedicacao">
                Sim
              </label>
              <input type="radio" name="hipertensaoMedicacao" value="n??o" />
              <label className="controle" htmlFor="hipertensaoMedicacao">
                N??o
              </label>
            </div>
            <input type="radio" name="hipertensao" value="n??o" />
            <label htmlFor="hipertensao">N??o</label>
          </div>
          <div onChange={e => setDiabetes(e.target.value)}>
            <p>3.Diabetes?</p>
            <input type="radio" name="diabetes" value="sim" />
            <label htmlFor="diabetes">Sim</label>{" "}
            <div onChange={e => setDiabetesControlada(e.target.value)}>
              <span className="controle">??? Est?? controlada?</span>{" "}
              <input type="radio" name="diabetesControlada" value="sim" />
              <label className="controle" htmlFor="diabetesControlada">
                Sim
              </label>
              <input type="radio" name="diabetesControlada" value="n??o" />
              <label className="controle" htmlFor="diabetesControlada">
                N??o
              </label>
            </div>
            <div onChange={e => setDiabetesMedicacao(e.target.value)}>
              <span className="controle">??? Toma medica????o?</span>
              {""}
              <input type="radio" name="diabetesMedicacao" value="sim" />
              <label className="controle" htmlFor="diabetesMedicacao">
                Sim
              </label>
              <input type="radio" name="diabetesMedicacao" value="n??o" />
              <label className="controle" htmlFor="diabetesMedicacao">
                N??o
              </label>
            </div>
            <input type="radio" name="diabetes" value="n??o" />
            <label htmlFor="diabetes">N??o</label>
          </div>
          <div onChange={e => setMarcapasso(e.target.value)}>
            <p>4. Marcapasso?</p>
            <input type="radio" name="marcapasso" value="sim" />
            <label htmlFor="marcapasso">Sim</label> <br />
            <input type="radio" name="marcapasso" value="n??o" />
            <label htmlFor="marcapasso">N??o</label>
          </div>
          <div onChange={e => setPinos(e.target.value)}>
            <p>5. Pinos ou placas?</p>
            <input type="radio" name="pinos" value="sim" />
            <label htmlFor="pinos">Sim</label> <br />
            <input type="radio" name="pinos" value="n??o" />
            <label htmlFor="pinos">N??o</label>
          </div>
          <div onChange={e => setHernia(e.target.value)}>
            <p>6. H??rnia?</p>
            <input type="radio" name="hernia" value="sim" />
            <label htmlFor="hernia">Sim</label> <br />
            <input type="radio" name="hernia" value="n??o" />
            <label htmlFor="hernia">N??o</label>
          </div>
          <div onChange={e => setTrombose(e.target.value)}>
            <p>7. Trombose (atual ou anterior)?</p>
            <input type="radio" name="trombose" value="sim" />
            <label htmlFor="trombose">Sim</label> <br />
            <input type="radio" name="trombose" value="n??o" />
            <label htmlFor="trombose">N??o</label>
          </div>
          <div className="controle">
            <p>Se anterior, h?? quanto tempo teve?</p>
            <input
              type="text"
              value={tromboseTempo}
              onChange={e => setTromboseTempo(e.target.value)}
            />
          </div>
          <div onChange={e => setCancer(e.target.value)}>
            <p>8. C??ncer (atual ou anterior)? </p>
            <input type="radio" name="cancer" value="sim" />
            <label htmlFor="cancer">Sim</label> <br />
            <input type="radio" name="cancer" value="n??o" />
            <label htmlFor="cancer">N??o</label>
          </div>
          <div className="controle">
            <p>Se anterior, h?? quanto tempo se curou?</p>
            <input
              type="text"
              value={cancerTempo}
              onChange={e => setCancerTempo(e.target.value)}
            />
          </div>
          <div onChange={e => setHIV(e.target.value)}>
            <p>9. HIV?</p>
            <input type="radio" name="hiv" value="sim" />
            <label htmlFor="hiv">Sim</label> <br />
            <input type="radio" name="hiv" value="n??o" />
            <label htmlFor="hiv">N??o</label>
          </div>
          <div onChange={e => setDiu(e.target.value)}>
            <p>10. Usa DIU ou diafragma?</p>
            <input type="radio" name="diu" value="sim" />
            <label htmlFor="diu">Sim</label> <br />
            <input type="radio" name="diu" value="n??o" />
            <label htmlFor="diu">N??o</label>
          </div>
          <div onChange={e => setGravidez(e.target.value)}>
            <p>11. Gravidez?</p>
            <input type="radio" name="gravidez" value="sim" />
            <label htmlFor="gravidez">Sim</label> <br />
            <input type="radio" name="gravidez" value="n??o" />
            <label htmlFor="gravidez">N??o</label>
          </div>
          <div className="controle">
            <label htmlFor="meses">Quantos meses</label>
            <input
              type="number"
              value={meses}
              onChange={e => setMeses(e.target.value)}
            />
          </div>
          <div onChange={e => setGestacaoNormal(e.target.value)}>
            <span className="controle">??? Gesta????o normal?</span>{" "}
            <input type="radio" name="gestacaoNormal" value="sim" />
            <label className="controle" htmlFor="gestacaoNormal">
              Sim
            </label>
            <input type="radio" name="gestacaoNormal" value="n??o" />
            <label className="controle" htmlFor="gestacaoNormal">
              N??o
            </label>
          </div>
          <div onChange={e => setArteria(e.target.value)}>
            <span className="controle">??? Problemas de press??o arterial?</span>{" "}
            <input type="radio" name="arteria" value="sim" />
            <label className="controle" htmlFor="arteria">
              Sim
            </label>
            <input type="radio" name="arteria" value="n??o" />
            <label className="controle" htmlFor="arteria">
              N??o
            </label>
          </div>
          <div>
            <span className="controle">??? Recomenda????o m??dica?</span>
            <input
              type="text"
              value={recMedica}
              onChange={e => setRecMedica(e.target.value)}
            />
          </div>

          <div onChange={e => setGripe(e.target.value)}>
            <p>12. Gripe ou resfriado?</p>
            <input type="radio" name="gripe" value="sim" />
            <label htmlFor="gripe">Sim</label> <br />
            <input type="radio" name="gripe" value="n??o" />
            <label htmlFor="gripe">N??o</label>
          </div>
          <div onChange={e => setCovid(e.target.value)}>
            <p>13. Teve COVID?</p>
            <input type="radio" name="covid" value="sim" />
            <label htmlFor="covid">Sim</label> <br />
            <input type="radio" name="covid" value="n??o" />
            <label htmlFor="covid">N??o</label>
          </div>
          <div
            className="controle"
            onChange={e => setCovidTempo(e.target.value)}
          >
            <label>H?? quanto tempo?</label>
            <input
              type="text"
              value={covidTempo}
              onChange={e => setCovidTempo(e.target.value)}
            />
          </div>

          <div onChange={e => setVacina(e.target.value)}>
            <p>14. Tomou vacina?</p>
            <input type="radio" name="vacina" value="sim" />
            <label htmlFor="vacina">Sim</label> <br />
            <input type="radio" name="vacina" value="n??o" />
            <label htmlFor="vacina">N??o</label>
          </div>
          <div className="controle">
            <label>H?? quanto tempo?</label>
            <input
              type="text"
              value={vacinaTempo}
              onChange={e => setVacinaTempo(e.target.value)}
            />
          </div>

          <div onChange={e => setDepressao(e.target.value)}>
            <p>15. Depress??o?</p>
            <input type="radio" name="depressao" value="sim" />
            <label htmlFor="depressao">Sim</label> <br />
            <input type="radio" name="depressao" value="n??o" />
            <label htmlFor="depressao">N??o</label>
          </div>
          <div onChange={e => setAnsiedade(e.target.value)}>
            <p>16. Ansiedade?</p>
            <input type="radio" name="ansiedade" value="sim" />
            <label htmlFor="ansiedade">Sim</label> <br />
            <input type="radio" name="ansiedade" value="n??o" />
            <label htmlFor="ansiedade">N??o</label>
          </div>
          <div onChange={e => setDores(e.target.value)}>
            <p>17. Dores?</p>
            <input type="radio" name="dores" value="sim" />
            <label htmlFor="dores">Sim</label> <br />
            <input type="radio" name="dores" value="n??o" />
            <label htmlFor="dores">N??o</label>
            <div className="controle" onChange={e => setCorpo(e.target.value)}>
              <label htmlFor="corpo">Local do corpo:</label>
              <input type="text" value={corpo} />
            </div>
          </div>
          <div onChange={e => setInflamacao(e.target.value)}>
            <p>18. Alguma inflama????o cr??nica ou aguda?</p>
            <input type="radio" name="inflamacao" value="sim" />
            <label htmlFor="inflamacao">Sim</label> <br />
            <input type="radio" name="inflamacao" value="n??o" />
            <label htmlFor="inflamacao">N??o</label>
          </div>
          <div className="controle">
            <label htmlFor="inflamacaoTipo">De que tipo:</label>
            <input
              type="text"
              value={inflamacaoTipo}
              onChange={e => setInflamacaoTipo(e.target.value)}
            />
          </div>

          <div onChange={e => setHipertireoide(e.target.value)}>
            <p>19. Hipertireoidismo?</p>
            <input type="radio" name="hipertireoide" value="sim" />
            <label htmlFor="hipertireoide">Sim</label> <br />
            <input type="radio" name="hipertireoide" value="n??o" />
            <label htmlFor="hipertireoide">N??o</label>
          </div>
          <div onChange={e => setAsma(e.target.value)}>
            <p>20. Asma br??nquica?</p>
            <input type="radio" name="asma" value="sim" />
            <label htmlFor="asma">Sim</label> <br />
            <input type="radio" name="asma" value="n??o" />
            <label htmlFor="asma">N??o</label>
          </div>
          <div onChange={e => setCardio(e.target.value)}>
            <p>21. Insufici??ncia card??aca?</p>
            <input type="radio" name="cardio" value="sim" />
            <label htmlFor="cardio">Sim</label> <br />
            <input type="radio" name="cardio" value="n??o" />
            <label htmlFor="cardio">N??o</label>
          </div>
          <div onChange={e => setCirurgia(e.target.value)}>
            <p>22. Fez alguma cirurgia?</p>
            <input type="radio" name="cirurgia" value="sim" />
            <label htmlFor="cirurgia">Sim</label> <br />
            <input type="radio" name="cirurgia" value="n??o" />
            <label htmlFor="cirurgia">N??o</label>
          </div>
          <div className="controle">
            <label>De que tipo?</label>
            <input
              type="text"
              value={cirurgiaTipo}
              onChange={e => setCirurgiaTipo(e.target.value)}
            />
          </div>
          <div className="controle">
            <label>H?? quanto tempo?</label>
            <input
              type="text"
              value={cirurgiaTempo}
              onChange={e => setCirurgiaTempo(e.target.value)}
            />
          </div>

          <div onChange={e => setOutraQuestao(e.target.value)}>
            <p>23. Alguma outra quest??o de sa??de relevante para considerar?</p>
            <input type="radio" name="quest??o" value="sim" />
            <label htmlFor="quest??o">Sim</label> <br />
            <input type="radio" name="quest??o" value="n??o" />
            <label htmlFor="quest??o">N??o</label>
            <div onChange={e => setQual(e.target.value)}>
              <input type="text" value={qual} />
            </div>
          </div>

          <div onChange={e => setAnotacoes(e.target.value)}>
            <p>24. Anota????es?</p>
            <input type="text" value={anotacoes} />
          </div>
          <div onChange={e => setRazao(e.target.value)}>
            <p>25. Por que raz??o voc?? procurou essa terapia?</p>
            <input type="text" value={razao} />
          </div>
        </div>
        <button className="gravar" type="submit">
          enviar
        </button>
      </form>
    </Layout>
  );
};

export default Anamnese;
