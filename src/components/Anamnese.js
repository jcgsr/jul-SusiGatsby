import React, { useState } from "react";

import firebase from "gatsby-plugin-firebase";

import { getAge } from "../services/utils/age";

import RingLoader from "react-spinners/RingLoader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Anamnese = () => {
  const [loading, setLoading] = useState(true);
  // DADOS
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [idAnamnese, setIdAnamnese] = useState("");
  const [anamneseDados, setAnamneseDados] = useState([]);

  // birthday reminder
  const today = new Date();
  const dataAtual = today.toISOString().substring(0, 10);
  // const dataAtual = `${current.getFullYear()}-${
  //   current.getMonth() + 1
  // }-${current.getDate()}
  // `;

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

  const notifyDel = () =>
    toast.warning("Anamnese deletada com sucesso", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyBirthday = () =>
    toast.info("Hoje tem anivers??rio!", {
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
      })
      .catch(e => {
        console.log(e + "Error ao gravar anamnese");
      });
  };
  const showAnamnese = () => {
    firebase
      .firestore()
      .collection("anamneses")
      .orderBy("nome")
      .onSnapshot(doc => {
        let minhasAnamneses = [];
        doc.forEach(item => {
          minhasAnamneses.push({
            id: item.id,
            nome: item.data().nome,
            nascimento: item.data().nascimento,
            idade: item.data().idade,
            endereco: item.data().endereco,
            profissao: item.data().profissao,
            telefone: item.data().telefone,
            alergia: item.data().alergia,
            hipertensao: item.data().hipertensao,
            hipertensaoMedicacao: item.data().hipertensaoMedicacao,
            hipertensaoControlada: item.data().hipertensaoControlada,
            diabetes: item.data().diabetes,
            diabetesMedicacao: item.data().diabetesMedicacao,
            diabetesControlada: item.data().diabetesControlada,
            marcapasso: item.data().marcapasso,
            pinos: item.data().pinos,
            hernia: item.data().hernia,
            trombose: item.data().trombose,
            tromboseTempo: item.data().tromboseTempo,
            cancer: item.data().cancer,
            cancerTempo: item.data().cancerTempo,
            hiv: item.data().hiv,
            diu: item.data().diu,
            gravidez: item.data().gravidez,
            gestacaoNormal: item.data().gestacaoNormal,
            arteria: item.data().arteria,
            recMedica: item.data().recMedica,
            meses: item.data().meses,
            gripe: item.data().gripe,
            covid: item.data().covid,
            covidTempo: item.data().covidTempo,
            vacina: item.data().vacina,
            vacinaTempo: item.data().vacinaTempo,
            depressao: item.data().depressao,
            ansiedade: item.data().ansiedade,
            dores: item.data().dores,
            inflamacao: item.data().inflamacao,
            inflamacaoTipo: item.data().inflamacaoTipo,
            hipertireoide: item.data().hipertireoide,
            asma: item.data().asma,
            cardio: item.data().cardio,
            corpo: item.data().corpo,
            cirurgia: item.data().cirurgia,
            cirurgiaTipo: item.data().cirurgiaTipo,
            cirurgiaTempo: item.data().cirurgiaTempo,
            outraQuestao: item.data().outraQuestao,
            qual: item.data().qual,
            anotacoes: item.data().anotacoes,
            razao: item.data().razao,
          });
        });
        setAnamneseDados(minhasAnamneses);
        setLoading(false);
      });
  };
  const handleDelete = async id => {
    await firebase
      .firestore()
      .collection("anamneses")
      .doc(id)
      .delete()
      .then(() => {
        notifyDel();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const handleEdit = async () => {
    await firebase
      .firestore()
      .collection("anamneses")
      .doc(idAnamnese)
      .update({
        nome: name,
        nascimento: birthday,
        endereco: address,
        profissao: profession,
        telefone: phone,
        meses: meses,
        tromboseTempo: tromboseTempo,
        cancerTempo: cancerTempo,
        recMedica: recMedica,
        covidTempo: covidTempo,
        vacinaTempo: vacinaTempo,
        inflamacaoTipo: inflamacaoTipo,
        cirurgiaTipo: cirurgiaTipo,
        cirurgiaTempo: cirurgiaTempo,
        corpo: corpo,
        qual: qual,
        anotacoes: anotacoes,
        razao: razao,
      })
      .then(() => {
        alert("Anamnese atualizada");
        setIdAnamnese("");
        handleReset();
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
    setTromboseTempo("");
    setCancerTempo("");
    setRecMedica("");
    setCovidTempo("");
    setVacinaTempo("");
    setInflamacaoTipo("");
    setCirurgiaTipo("");
    setCirurgiaTempo("");
    setCorpo("");
    setQual("");
    setAnotacoes("");
    setRazao("");
  };

  return (
    <div>
      <ToastContainer />
      <h1>Anamnese</h1>
      <h5>
        Para um atendimento seguro e mais eficaz, preciso saber algumas quest??es
        de sa??de.
      </h5>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={idAnamnese}
          onChange={e => setIdAnamnese(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="name">Nome</label>
        <input
          id="nome"
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
        <p>idade: {getAge(birthday)}</p>

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
        <button type="submit" className="gravar">
          gravar
        </button>
      </form>
      <div className="btn-anamnese">
        <button className="editar" onClick={handleEdit}>
          editar
        </button>
        <button onClick={showAnamnese}>mostrar</button>
      </div>
      <h2>dados anamnese</h2>
      <p style={{ textAlign: "center", margin: "0 auto" }}>
        A data de hoje ??: {dataAtual}
      </p>
      <div className="card">
        <ul>
          {anamneseDados.map(dado => {
            if (dado.nascimento === dataAtual) {
              notifyBirthday();
            }
            if (loading) {
              return (
                <div className="spinner">
                  <RingLoader color="#5e35b1" />
                </div>
              );
            }
            return (
              <li key={dado.id}>
                <p>Nome: {dado.nome}</p>
                <p>Nascimento: {dado.nascimento}</p>

                <p>Endere??o: {dado.endereco}</p>
                <p>Profiss??o: {dado.profissao}</p>
                <p>Alergias: {dado.alergia}</p>
                <p>Hipertens??o: {dado.hipertensao}</p>
                <p>Hipertens??o (medica????o): {dado.hipertensaoMedicacao}</p>
                <p>Hipertens??o (controle): {dado.hipertensaoControlada}</p>
                <p>Diabetes: {dado.diabetes}</p>
                <p>Diabetes (medica????o): {dado.diabetesMedicacao}</p>
                <p>Diabetes (controle): {dado.diabetesControlada}</p>
                <p>Marcapasso: {dado.marcapasso}</p>
                <p>Pinos ou placas: {dado.pinos}</p>
                <p>H??rnia: {dado.hernia}</p>
                <p>Trombose: {dado.trombose}</p>
                <p>Trombose (tempo): {dado.tromboseTempo}</p>
                <p>C??ncer: {dado.cancer}</p>
                <p>C??ncer (tempo): {dado.cancerTempo}</p>
                <p>HIV: {dado.hiv}</p>
                <p>DIU: {dado.diu}</p>
                <p>Gravidez: {dado.gravidez}</p>
                <p>Meses: {dado.meses}</p>
                <p>Gesta????o normal: {dado.gestacaoNormal}</p>
                <p>Press??o Arterial: {dado.arteria}</p>
                <p>Recomenda????o M??dica: {dado.recMedica}</p>
                <p>Gripe ou resfriado: {dado.gripe}</p>
                <p>COVID: {dado.covid}</p>
                <p>COVID (tempo): {dado.covidTempo}</p>
                <p>Vacina: {dado.vacina}</p>
                <p>Vacina (tempo): {dado.vacinaTempo}</p>
                <p>Depress??o: {dado.depressao}</p>
                <p>Ansiedade: {dado.ansiedade}</p>
                <p>Dores: {dado.dores}</p>
                <p>Inflama????o Cr??nica: {dado.inflamacao}</p>
                <p>Inflama????o Cr??nica (tipo): {dado.inflamacaoTipo}</p>
                <p>Hipertireoidismo: {dado.hipertireoide}</p>
                <p>Asma br??nquica: {dado.asma}</p>
                <p>Insufici??ncia Card??aca: {dado.cardio}</p>
                <p>Cirurgia: {dado.cirurgia}</p>
                <p>Cirurgia (tipo): {dado.cirurgiaTipo}</p>
                <p>Cirurgia (tempo): {dado.cirurgiaTempo}</p>
                <p>Local do corpo: {dado.corpo}</p>
                <p>Outra quest??o de sa??de: {dado.outraQuestao}</p>
                <p>Qual: {dado.qual}</p>
                <p>Anota????es: {dado.anotacoes}</p>
                <p>Raz??o da escolha dessa terapia: {dado.razao}</p>

                <div className="btn-anamnese">
                  <button
                    onClick={() => (
                      setIdAnamnese(dado.id),
                      setName(dado.nome),
                      setBirthday(dado.nascimento),
                      setAddress(dado.endereco),
                      setProfession(dado.profissao),
                      setPhone(dado.telefone),
                      setTromboseTempo(""),
                      setCancerTempo(dado.cancerTempo),
                      setRecMedica(dado.recMedica),
                      setCovidTempo(dado.covidTempo),
                      setVacinaTempo(dado.vacinaTempo),
                      setInflamacaoTipo(dado.inflamacaoTipo),
                      setCirurgiaTipo(dado.cirurgiaTipo),
                      setCirurgiaTempo(dado.cirurgiaTempo),
                      setCorpo(dado.corpo),
                      setQual(dado.qual),
                      setAnotacoes(dado.anotacoes),
                      setRazao(dado.razao)
                    )}
                  >
                    <a href="#nome" style={{ textDecoration: "none" }}>
                      carregar
                    </a>
                  </button>
                  <button
                    className="alert-danger"
                    onClick={() => handleDelete(dado.id)}
                  >
                    deletar
                  </button>
                  <hr />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Anamnese;
