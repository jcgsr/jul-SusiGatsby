import React, { useState } from "react";

import firebase from "firebase";

const Sinergia = () => {
  const [sinergia, setSinergia] = useState("");
  const [carreador, setCarreador] = useState("");
  const [oleo, setOleo] = useState("");
  const [obs, setObs] = useState("");

  const [sinergiaDados, setSinergiaDados] = useState([]);
  const [idSinergia, setIdSinergia] = useState("");

  const showSinergia = () => {
    firebase
      .firestore()
      .collection("sinergias")
      .onSnapshot(doc => {
        let minhasSinergias = [];
        doc.forEach(item => {
          minhasSinergias.push({
            id: item.id,
            sinergia: item.data().sinergia,
            carreador: item.data().carreador,
            oleos: item.data().oleos,
            obs: item.data().obs,
          });
        });
        setSinergiaDados(minhasSinergias);
      });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await firebase
        .firestore()
        .collection("sinergias")
        .add({
          sinergia: sinergia,
          carreador: carreador,
          oleos: oleo,
          obs: obs,
        })
        .then(() => {
          handleReset();
        });
      alert("sinergia gravada");
    } catch (error) {
      alert(error);
    }
  };
  const handleReset = () => {
    setSinergia("");
    setCarreador("");
    setOleo("");
    setObs("");
  };

  const handleEdit = async () => {
    await firebase
      .firestore()
      .collection("sinergias")
      .doc(idSinergia)
      .update({
        sinergia: sinergia,
        carreador: carreador,
        oleos: oleo,
        obs: obs,
      })
      .then(() => {
        alert("Dados atualizados");
        setIdSinergia("");
        handleReset();
      });
  };

  const handleDelete = async id => {
    await firebase
      .firestore()
      .collection("sinergias")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deletado");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Sinergia</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="sinergia">sinergia</label>
        <input
          id="sinergia"
          type="text"
          value={idSinergia}
          onChange={e => setIdSinergia(e.target.value)}
          style={{ display: "none" }}
        />

        <input
          placeholder="perfume"
          type="text"
          name="sinergia"
          value={sinergia}
          onChange={e => setSinergia(e.target.value)}
        />
        <br />

        <label htmlFor="carreador">carreador</label>
        <input
          placeholder="lavanda"
          type="text"
          name="carreador"
          value={carreador}
          onChange={e => setCarreador(e.target.value)}
        />
        <br />
        <label htmlFor="oleos">oleos</label>
        <input
          placeholder="gerânio"
          type="text"
          name="oleo"
          value={oleo}
          onChange={e => setOleo(e.target.value)}
        />
        <br />
        <label htmlFor="obs">obs</label>
        <input
          placeholder="queima"
          type="text"
          name="obs"
          value={obs}
          onChange={e => setObs(e.target.value)}
        />
        <br />
        <div className="btn-anamnese">
          <button className="gravar" type="submit">
            gravar
          </button>
          <button className="editar" type="button" onClick={handleEdit}>
            editar
          </button>
        </div>
      </form>
      <div className="btn-anamnese">
        <button className="mostrar" onClick={showSinergia}>
          mostrar
        </button>
      </div>
      <h2>Dados Sinergia</h2>
      <div className="card">
        <ul>
          {sinergiaDados.map(dado => {
            return (
              <li key={dado.id}>
                <p>Sinergia: {dado.sinergia}</p>
                <p>Carreador: {dado.carreador}</p>
                <p>Óleos: {dado.oleos}</p>
                <p>Observaçã: {dado.obs}</p>
                <div className="btn-anamnese">
                  <button
                    onClick={() => (
                      setIdSinergia(dado.id),
                      setSinergia(dado.sinergia),
                      setCarreador(dado.carreador),
                      setOleo(dado.oleos),
                      setObs(dado.obs)
                    )}
                  >
                    <a href="#sinergia" style={{ textDecoration: "none" }}>
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

export default Sinergia;
