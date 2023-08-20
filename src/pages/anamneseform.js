import React, { useState } from "react";

import { navigate } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { toast, ToastContainer } from "react-toastify";
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
  const [alergiasTipo, setAlergiasTipo] = useState("");
  const [hipertensao, setHipertensao] = useState("");
  const [hipertensaoMedicacao, setHipertensaoMedicacao] = useState("");
  const [hipertensaoControlada, setHipertensaoControlada] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [diabetesMedicacao, setDiabetesMedicacao] = useState("");
  const [diabetesControlada, setDiabetesControlada] = useState("");
  const [marcapasso, setMarcapasso] = useState("");
  const [pinos, setPinos] = useState("");
  const [hernia, setHernia] = useState("");
  const [herniaTipo, setHerniaTipo] = useState("");
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
  const [epilepsia, setEpilepsia] = useState("");
  // const [medicao, setMedicacao] = useState("");
  // const [medicacaoTempo, setMedicacaoTempo] = useState("");
  // const [medicaoTipo, setMedicacaoTipo] = useState("");
  const [perfume, setPerfume] = useState("");
  const [cosmetico, setCosmetico] = useState("");

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
  const handleSubmit = async (e) => {
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
        alergiasTipo: alergiasTipo,
        hipertensao: hipertensao,
        hipertensaoMedicacao: hipertensaoMedicacao,
        hipertensaoControlada: hipertensaoControlada,
        diabetes: diabetes,
        diabetesMedicacao: diabetesMedicacao,
        diabetesControlada: diabetesControlada,
        marcapasso: marcapasso,
        pinos: pinos,
        hernia: hernia,
        herniaTipo: herniaTipo,
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
        epilepsia: epilepsia,
        perfume: perfume,
        cosmetico: cosmetico,
      })
      .then(() => {
        handleReset();
        notify();
        navigate("/");
      })
      .catch((e) => {
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
    setAlergiasTipo("");
    setHerniaTipo("");
    setTromboseTempo("");
    setCorpo("");
    setQual("");
    setAnotacoes("");
    setCirurgiaTempo("");
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        notifyInfo();
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
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
      <ToastContainer />
      <h1>Anamnese</h1>
      <h3>Bem-vindo(a) {name}!</h3>
      <h4 style={{ textAlign: "center" }}>Cadastro</h4>
      <p className="aviso">
        Para a sua segurança, seus dados só serão enviados após a realização do
        cadastro abaixo.
      </p>
      <form className="form">
        <label htmlFor="email">e-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button id="login" onClick={handleSignUp}>
          cadastrar
        </button>
      </form>{" "}
      <hr />
      <p className="aviso">
        Para um atendimento seguro e mais eficaz, preciso saber algumas questões
        de saúde.
      </p>{" "}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={idAnamnese}
          onChange={(e) => setIdAnamnese(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Data de nascimento</label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="profession">Profissão</label>
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* PERGUNTAS */}
        <div className="checkboxes" style={{ marginTop: "1rem" }}>
          <div onChange={(e) => setAlergias(e.target.value)}>
            <p>1. Alergias?</p>
            <input type="radio" name="alergias" value="sim" />
            <label htmlFor="alergias">Sim</label>
            <br />
            <input type="radio" name="alergias" value="não" />
            <label htmlFor="alergias">Não</label>
            <div className="controle">
              <p>Se sim, de que tipo?</p>
              <input
                type="text"
                value={alergiasTipo}
                onChange={(e) => setAlergiasTipo(e.target.value)}
              />
            </div>
          </div>
          <div onChange={(e) => setHipertensao(e.target.value)}>
            <p>2. Hipertensão?</p>
            <input type="radio" name="hipertensao" value="sim" />
            <label htmlFor="hipertensao">Sim</label>
            <div onChange={(e) => setHipertensaoControlada(e.target.value)}>
              <span className="controle">→ Está controlada?</span>{" "}
              <input type="radio" name="hipertensaoControlada" value="sim" />
              <label className="controle" htmlFor="hipertensaoControlada">
                Sim
              </label>
              <input type="radio" name="hipertensaoControlada" value="não" />
              <label className="controle" htmlFor="hipertensaoControlada">
                Não
              </label>
            </div>
            <div onChange={(e) => setHipertensaoMedicacao(e.target.value)}>
              <span className="controle">→ Toma medicação?</span>
              {""}
              <input type="radio" name="hipertensaoMedicacao" value="sim" />
              <label className="controle" htmlFor="hipertensaoMedicacao">
                Sim
              </label>
              <input type="radio" name="hipertensaoMedicacao" value="não" />
              <label className="controle" htmlFor="hipertensaoMedicacao">
                Não
              </label>
            </div>
            <input type="radio" name="hipertensao" value="não" />
            <label htmlFor="hipertensao">Não</label>
          </div>
          <div onChange={(e) => setDiabetes(e.target.value)}>
            <p>3. Diabetes?</p>
            <input type="radio" name="diabetes" value="sim" />
            <label htmlFor="diabetes">Sim</label>{" "}
            <div onChange={(e) => setDiabetesControlada(e.target.value)}>
              <span className="controle">→ Está controlada?</span>{" "}
              <input type="radio" name="diabetesControlada" value="sim" />
              <label className="controle" htmlFor="diabetesControlada">
                Sim
              </label>
              <input type="radio" name="diabetesControlada" value="não" />
              <label className="controle" htmlFor="diabetesControlada">
                Não
              </label>
            </div>
            <div onChange={(e) => setDiabetesMedicacao(e.target.value)}>
              <span className="controle">→ Toma medicação?</span>
              {""}
              <input type="radio" name="diabetesMedicacao" value="sim" />
              <label className="controle" htmlFor="diabetesMedicacao">
                Sim
              </label>
              <input type="radio" name="diabetesMedicacao" value="não" />
              <label className="controle" htmlFor="diabetesMedicacao">
                Não
              </label>
            </div>
            <input type="radio" name="diabetes" value="não" />
            <label htmlFor="diabetes">Não</label>
          </div>
          <div onChange={(e) => setMarcapasso(e.target.value)}>
            <p>4. Marcapasso?</p>
            <input type="radio" name="marcapasso" value="sim" />
            <label htmlFor="marcapasso">Sim</label> <br />
            <input type="radio" name="marcapasso" value="não" />
            <label htmlFor="marcapasso">Não</label>
          </div>
          <div onChange={(e) => setPinos(e.target.value)}>
            <p>5. Pinos ou placas?</p>
            <input type="radio" name="pinos" value="sim" />
            <label htmlFor="pinos">Sim</label> <br />
            <input type="radio" name="pinos" value="não" />
            <label htmlFor="pinos">Não</label>
          </div>
          <div onChange={(e) => setHernia(e.target.value)}>
            <p>6. Hérnia?</p>
            <input type="radio" name="hernia" value="sim" />
            <label htmlFor="hernia">Sim</label> <br />
            <input type="radio" name="hernia" value="não" />
            <label htmlFor="hernia">Não</label>
            <div className="controle">
              <p>Se sim, de que tipo?</p>
              <input
                type="text"
                value={herniaTipo}
                onChange={(e) => setHerniaTipo(e.target.value)}
              />
            </div>
          </div>
          <div onChange={(e) => setTrombose(e.target.value)}>
            <p>7. Trombose (atual ou anterior)?</p>
            <input type="radio" name="trombose" value="sim" />
            <label htmlFor="trombose">Sim</label> <br />
            <input type="radio" name="trombose" value="não" />
            <label htmlFor="trombose">Não</label>
          </div>
          <div className="controle">
            <p>Se anterior, há quanto tempo teve?</p>
            <input
              type="text"
              value={tromboseTempo}
              onChange={(e) => setTromboseTempo(e.target.value)}
            />
          </div>
          <div onChange={(e) => setCancer(e.target.value)}>
            <p>8. Câncer (atual ou anterior)?</p>
            <input type="radio" name="cancer" value="sim" />
            <label htmlFor="cancer">Sim</label> <br />
            <input type="radio" name="cancer" value="não" />
            <label htmlFor="cancer">Não</label>
          </div>
          <div className="controle">
            <p>Se anterior, há quanto tempo se curou?</p>
            <input
              type="text"
              value={cancerTempo}
              onChange={(e) => setCancerTempo(e.target.value)}
            />
          </div>
          <div onChange={(e) => setHIV(e.target.value)}>
            <p>9. HIV?</p>
            <input type="radio" name="hiv" value="sim" />
            <label htmlFor="hiv">Sim</label> <br />
            <input type="radio" name="hiv" value="não" />
            <label htmlFor="hiv">Não</label>
          </div>
          <div onChange={(e) => setDiu(e.target.value)}>
            <p>10. Usa DIU ou diafragma?</p>
            <input type="radio" name="diu" value="sim" />
            <label htmlFor="diu">Sim</label> <br />
            <input type="radio" name="diu" value="não" />
            <label htmlFor="diu">Não</label>
          </div>
          <div onChange={(e) => setGravidez(e.target.value)}>
            <p>11. Gravidez?</p>
            <input type="radio" name="gravidez" value="sim" />
            <label htmlFor="gravidez">Sim</label> <br />
            <input type="radio" name="gravidez" value="não" />
            <label htmlFor="gravidez">Não</label>
          </div>
          <div className="controle">
            <label htmlFor="meses">Quantos meses</label>
            <input
              type="number"
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
            />
          </div>
          <div onChange={(e) => setGestacaoNormal(e.target.value)}>
            <span className="controle">→ Gestação normal?</span>{" "}
            <input type="radio" name="gestacaoNormal" value="sim" />
            <label className="controle" htmlFor="gestacaoNormal">
              Sim
            </label>
            <input type="radio" name="gestacaoNormal" value="não" />
            <label className="controle" htmlFor="gestacaoNormal">
              Não
            </label>
          </div>
          <div onChange={(e) => setArteria(e.target.value)}>
            <span className="controle">→ Problemas de pressão arterial?</span>
            {" "}
            <input type="radio" name="arteria" value="sim" />
            <label className="controle" htmlFor="arteria">
              Sim
            </label>
            <input type="radio" name="arteria" value="não" />
            <label className="controle" htmlFor="arteria">
              Não
            </label>
          </div>
          <div>
            <span className="controle">→ Recomendação médica?</span>
            <input
              type="text"
              value={recMedica}
              onChange={(e) => setRecMedica(e.target.value)}
            />
          </div>

          <div onChange={(e) => setGripe(e.target.value)}>
            <p>12. Gripe ou resfriado?</p>
            <input type="radio" name="gripe" value="sim" />
            <label htmlFor="gripe">Sim</label> <br />
            <input type="radio" name="gripe" value="não" />
            <label htmlFor="gripe">Não</label>
          </div>
          <div onChange={(e) => setCovid(e.target.value)}>
            <p>13. Teve COVID?</p>
            <input type="radio" name="covid" value="sim" />
            <label htmlFor="covid">Sim</label> <br />
            <input type="radio" name="covid" value="não" />
            <label htmlFor="covid">Não</label>
          </div>
          <div
            className="controle"
            onChange={(e) => setCovidTempo(e.target.value)}
          >
            <label>Há quanto tempo?</label>
            <input
              type="text"
              value={covidTempo}
              onChange={(e) => setCovidTempo(e.target.value)}
            />
          </div>

          <div onChange={(e) => setVacina(e.target.value)}>
            <p>14. Tomou vacina?</p>
            <input type="radio" name="vacina" value="sim" />
            <label htmlFor="vacina">Sim</label> <br />
            <input type="radio" name="vacina" value="não" />
            <label htmlFor="vacina">Não</label>
          </div>
          <div className="controle">
            <label>Há quanto tempo?</label>
            <input
              type="text"
              value={vacinaTempo}
              onChange={(e) => setVacinaTempo(e.target.value)}
            />
          </div>

          <div onChange={(e) => setDepressao(e.target.value)}>
            <p>15. Depressão?</p>
            <input type="radio" name="depressao" value="sim" />
            <label htmlFor="depressao">Sim</label> <br />
            <input type="radio" name="depressao" value="não" />
            <label htmlFor="depressao">Não</label>
          </div>
          <div onChange={(e) => setAnsiedade(e.target.value)}>
            <p>16. Ansiedade?</p>
            <input type="radio" name="ansiedade" value="sim" />
            <label htmlFor="ansiedade">Sim</label> <br />
            <input type="radio" name="ansiedade" value="não" />
            <label htmlFor="ansiedade">Não</label>
          </div>
          <div onChange={(e) => setDores(e.target.value)}>
            <p>17. Dores?</p>
            <input type="radio" name="dores" value="sim" />
            <label htmlFor="dores">Sim</label> <br />
            <input type="radio" name="dores" value="não" />
            <label htmlFor="dores">Não</label>
            <div
              className="controle"
              onChange={(e) => setCorpo(e.target.value)}
            >
              <label htmlFor="corpo">Local do corpo:</label>
              <input type="text" value={corpo} />
            </div>
          </div>
          <div onChange={(e) => setInflamacao(e.target.value)}>
            <p>18. Alguma inflamação crônica ou aguda?</p>
            <input type="radio" name="inflamacao" value="sim" />
            <label htmlFor="inflamacao">Sim</label> <br />
            <input type="radio" name="inflamacao" value="não" />
            <label htmlFor="inflamacao">Não</label>
          </div>
          <div className="controle">
            <label htmlFor="inflamacaoTipo">De que tipo:</label>
            <input
              type="text"
              value={inflamacaoTipo}
              onChange={(e) => setInflamacaoTipo(e.target.value)}
            />
          </div>

          <div onChange={(e) => setHipertireoide(e.target.value)}>
            <p>19. Hipertireoidismo?</p>
            <input type="radio" name="hipertireoide" value="sim" />
            <label htmlFor="hipertireoide">Sim</label> <br />
            <input type="radio" name="hipertireoide" value="não" />
            <label htmlFor="hipertireoide">Não</label>
          </div>
          <div onChange={(e) => setAsma(e.target.value)}>
            <p>20. Asma brônquica?</p>
            <input type="radio" name="asma" value="sim" />
            <label htmlFor="asma">Sim</label> <br />
            <input type="radio" name="asma" value="não" />
            <label htmlFor="asma">Não</label>
          </div>
          <div onChange={(e) => setCardio(e.target.value)}>
            <p>21. Insuficiência cardíaca?</p>
            <input type="radio" name="cardio" value="sim" />
            <label htmlFor="cardio">Sim</label> <br />
            <input type="radio" name="cardio" value="não" />
            <label htmlFor="cardio">Não</label>
          </div>
          <div onChange={(e) => setEpilepsia(e.target.value)}>
            <p>22. Tem epilepsia ou histórico de convulsão?</p>
            <input type="radio" name="epilepsia" value="sim" />
            <label htmlFor="epilepsia">Sim</label> <br />
            <input type="radio" name="epilepsia" value="não" />
            <label htmlFor="epilepsia">Não</label>
          </div>

          <div onChange={(e) => setCirurgia(e.target.value)}>
            <p>23. Fez alguma cirurgia?</p>
            <input type="radio" name="cirurgia" value="sim" />
            <label htmlFor="cirurgia">Sim</label> <br />
            <input type="radio" name="cirurgia" value="não" />
            <label htmlFor="cirurgia">Não</label>
          </div>
          <div className="controle">
            <label>De que tipo?</label>
            <input
              type="text"
              value={cirurgiaTipo}
              onChange={(e) => setCirurgiaTipo(e.target.value)}
            />
          </div>
          <div className="controle">
            <label>Há quanto tempo?</label>
            <input
              type="text"
              value={cirurgiaTempo}
              onChange={(e) => setCirurgiaTempo(e.target.value)}
            />
          </div>

          {
            /*
          <div onChange={(e) => setMedicacao(e.target.value)}>
            <p>24. Toma medicação?</p>
            <input type="radio" name="medicao" value="sim" />
            <label htmlFor="medicao">Sim</label> <br />
            <input type="radio" name="medicao" value="não" />
            <label htmlFor="medicao">Não</label>
          </div>
          <div className="controle">
            <label>Qual(is)?</label>
            <input
              type="text"
              value={medicaoTipo}
              onChange={(e) => setMedicacaoTipo(e.target.value)}
            />
          </div>
          <div className="controle">
            <label>Há quanto tempo?</label>
            <input
              type="text"
              value={medicacaoTempo}
              onChange={(e) => setMedicacaoTempo(e.target.value)}
            />
          </div> */
          }
          <div onChange={(e) => setPerfume(e.target.value)}>
            <p>24. Tem sensibilidade a perfume, a fragrâncias?</p>
            <input type="radio" name="perfume" value="sim" />
            <label htmlFor="perfume">Sim</label> <br />
            <input type="radio" name="perfume" value="não" />
            <label htmlFor="perfume">Não</label>
          </div>
          <div onChange={(e) => setCosmetico(e.target.value)}>
            <p>
              25. Tem sensibilidade a cosméticos ou outros produtos na pele?
            </p>
            <input type="radio" name="cosmetico" value="sim" />
            <label htmlFor="cosmetico">Sim</label> <br />
            <input type="radio" name="cosmetico" value="não" />
            <label htmlFor="cosmetico">Não</label>
          </div>

          <div onChange={(e) => setOutraQuestao(e.target.value)}>
            <p>26. Alguma outra questão de saúde relevante para considerar?</p>
            <input type="radio" name="questão" value="sim" />
            <label htmlFor="questão">Sim</label> <br />
            <input type="radio" name="questão" value="não" />
            <label htmlFor="questão">Não</label>
            <div onChange={(e) => setQual(e.target.value)}>
              <input type="text" value={qual} />
            </div>
          </div>

          <div onChange={(e) => setAnotacoes(e.target.value)}>
            <p>27. Anotações?</p>
            <input type="text" value={anotacoes} />
          </div>
          <div onChange={(e) => setRazao(e.target.value)}>
            <p>28. Por que razão você procurou essa terapia?</p>
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
