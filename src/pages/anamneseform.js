import React, { useState } from "react";

import Layout from "../components/layout";

import firebase from "firebase";

const Anamnese = () => {
  // DADOS
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [idAnamnese, setIdAnamnese] = useState("");

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
        idade: age,
        endereco: address,
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
        alert("Anamnese Gravada!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleReset = () => {
    setName("");
    setIdAnamnese("");
    setName("");
    setAge("");
    setAddress("");
    setProfession("");
    setPhone("");
    setCorpo("");
    setQual("");
    setAnotacoes("");
  };
  return (
    <Layout>
      <h1>Anamnese</h1>
      <h2>Bem-vindo(a)!</h2>
      <h3>
        Para um atendimento seguro e mais eficaz, preciso saber algumas questões
        de saúde.
      </h3>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="age">Idade</label>
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
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
        <div>
          <div onChange={e => setAlergias(e.target.value)}>
            <p>1. Alergias?</p>
            <input type="radio" name="alergias" value="sim" />
            <label htmlFor="alergias">Sim</label>
            <input type="radio" name="alergias" value="não" />
            <label htmlFor="alergias">Não</label>
          </div>
          <div onChange={e => setHipertensao(e.target.value)}>
            <p>2. Hipertensão?</p>
            <input type="radio" name="hipertensao" value="sim" />
            <label htmlFor="hipertensao">Sim</label>
            <input type="radio" name="hipertensao" value="não" />
            <label htmlFor="hipertensao">Não</label>
          </div>
          <div onChange={e => setDiabetes(e.target.value)}>
            <p>3.Diabetes?</p>
            <input type="radio" name="diabetes" value="sim" />
            <label htmlFor="diabetes">Sim</label>
            <input type="radio" name="diabetes" value="não" />
            <label htmlFor="diabetes">Não</label>
          </div>
          <div onChange={e => setMarcapasso(e.target.value)}>
            <p>4. Marcapasso?</p>
            <input type="radio" name="marcapasso" value="sim" />
            <label htmlFor="marcapasso">Sim</label>
            <input type="radio" name="marcapasso" value="não" />
            <label htmlFor="marcapasso">Não</label>
          </div>
          <div onChange={e => setPinos(e.target.value)}>
            <p>5. Pinos ou placas?</p>
            <input type="radio" name="pinos" value="sim" />
            <label htmlFor="pinos">Sim</label>
            <input type="radio" name="pinos" value="não" />
            <label htmlFor="pinos">Não</label>
          </div>
          <div onChange={e => setHernia(e.target.value)}>
            <p>6. Hérnia?</p>
            <input type="radio" name="hernia" value="sim" />
            <label htmlFor="hernia">Sim</label>
            <input type="radio" name="hernia" value="não" />
            <label htmlFor="hernia">Não</label>
          </div>
          <div onChange={e => setTrombose(e.target.value)}>
            <p>7. Trombose?</p>
            <input type="radio" name="trombose" value="sim" />
            <label htmlFor="trombose">Sim</label>
            <input type="radio" name="trombose" value="não" />
            <label htmlFor="trombose">Não</label>
          </div>
          <div onChange={e => setCancer(e.target.value)}>
            <p>8. Câncer?</p>
            <input type="radio" name="cancer" value="sim" />
            <label htmlFor="cancer">Sim</label>
            <input type="radio" name="cancer" value="não" />
            <label htmlFor="cancer">Não</label>
          </div>
          <div onChange={e => setHIV(e.target.value)}>
            <p>9. HIV?</p>
            <input type="radio" name="hiv" value="sim" />
            <label htmlFor="hiv">Sim</label>
            <input type="radio" name="hiv" value="não" />
            <label htmlFor="hiv">Não</label>
          </div>
          <div onChange={e => setGravidez(e.target.value)}>
            <p>10. Gravidez?</p>
            <input type="radio" name="gravidez" value="sim" />
            <label htmlFor="gravidez">Sim</label>
            <input type="radio" name="gravidez" value="não" />
            <label htmlFor="gravidez">Não</label>
            <div onChange={e => setMeses(e.target.value)}>
              <label htmlFor="meses">Quantos meses</label>
              <input type="range" min="0" max="9" value={meses} /> {meses}
            </div>
          </div>
          <div onChange={e => setGripe(e.target.value)}>
            <p>11. Gripe ou resfriado?</p>
            <input type="radio" name="gripe" value="sim" />
            <label htmlFor="gripe">Sim</label>
            <input type="radio" name="gripe" value="não" />
            <label htmlFor="gripe">Não</label>
          </div>
          <div onChange={e => setDepressao(e.target.value)}>
            <p>12. Depressão?</p>
            <input type="radio" name="depressao" value="sim" />
            <label htmlFor="depressao">Sim</label>
            <input type="radio" name="depressao" value="não" />
            <label htmlFor="depressao">Não</label>
          </div>
          <div onChange={e => setAnsiedade(e.target.value)}>
            <p>13. Ansiedade?</p>
            <input type="radio" name="ansiedade" value="sim" />
            <label htmlFor="ansiedade">Sim</label>
            <input type="radio" name="ansiedade" value="não" />
            <label htmlFor="ansiedade">Não</label>
          </div>
          <div onChange={e => setDores(e.target.value)}>
            <p>14. Dores?</p>
            <input type="radio" name="dores" value="sim" />
            <label htmlFor="dores">Sim</label>
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
            <label htmlFor="questão">Sim</label>
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
        <button type="submit">gravar</button>
      </form>
    </Layout>
  );
};

export default Anamnese;
