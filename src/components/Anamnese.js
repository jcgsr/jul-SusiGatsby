import React, { useState } from "react";

import firebase from "firebase";

import { getAge } from "../services/utils/age";

const Anamnese = () => {
  // DADOS
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [idAnamnese, setIdAnamnese] = useState("");
  const [anamneseDados, setAnamneseDados] = useState([]);

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
  const showAnamnese = () => {
    firebase
      .firestore()
      .collection("anamneses")
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
            diabetes: item.data().diabetes,
            marcapasso: item.data().marcapasso,
            pinos: item.data().pinos,
            hernia: item.data().hernia,
            trombose: item.data().trombose,
            cancer: item.data().cancer,
            hiv: item.data().hiv,
            gravidez: item.data().gravidez,
            meses: item.data().meses,
            gripe: item.data().gripe,
            depressao: item.data().depressao,
            ansiedade: item.data().ansiedade,
            dores: item.data().dores,
            corpo: item.data().corpo,
            outraQuestao: item.data().outraQuestao,
            qual: item.data().qual,
            anotacoes: item.data().anotacoes,
          });
        });
        setAnamneseDados(minhasAnamneses);
      });
  };
  const handleDelete = async id => {
    await firebase
      .firestore()
      .collection("anamneses")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deletado");
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
        corpo: corpo,
        qual: qual,
        anotacoes: anotacoes,
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
    setCorpo("");
    setQual("");
    setAnotacoes("");
  };
  return (
    <div>
      <h1>Anamnese</h1>
      <h5>
        Para um atendimento seguro e mais eficaz, preciso saber algumas questões
        de saúde.
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
      <div className="card">
        <ul>
          {anamneseDados.map(dado => {
            return (
              <li key={dado.id}>
                <p>Nome: {dado.nome}</p>
                <p>Nascimento: {dado.nascimento}</p>
                <p>Endereço: {dado.endereco}</p>
                <p>Profissão: {dado.profissao}</p>
                <p>Alergias: {dado.alergia}</p>
                <p>Hipertenção: {dado.hipertensao}</p>
                <p>Diabetes: {dado.diabetes}</p>
                <p>Marcapasso: {dado.marcapasso}</p>
                <p>Pinos ou placas: {dado.pinos}</p>
                <p>Hérnia: {dado.hernia}</p>
                <p>Trombose: {dado.trombose}</p>
                <p>Câncer: {dado.cancer}</p>
                <p>HIV: {dado.hiv}</p>
                <p>Gravidez: {dado.gravidez}</p>
                <p>Meses: {dado.meses}</p>
                <p>Gripe ou resfriado: {dado.gripe}</p>
                <p>Depressão: {dado.depressao}</p>
                <p>Ansiedade: {dado.ansiedade}</p>
                <p>Dores: {dado.dores}</p>
                <p>Local do corpo: {dado.corpo}</p>
                <p>Outra questão de saúde: {dado.outraQuestao}</p>
                <p>Qual: {dado.qual}</p>
                <p>Anotações: {dado.anotacoes}</p>
                <div className="btn-anamnese">
                  <button
                    onClick={() => (
                      setIdAnamnese(dado.id),
                      setName(dado.nome),
                      setBirthday(dado.nascimento),
                      setAddress(dado.endereco),
                      setProfession(dado.profissao),
                      setPhone(dado.telefone),
                      setCorpo(dado.corpo),
                      setQual(dado.qual),
                      setAnotacoes(dado.anotacoes)
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
