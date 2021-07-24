import React, { useState } from "react";

import firebase from "firebase";

const Sinergia = () => {
  const [sinergia, setSinergia] = useState("");
  const [carreador, setCarreador] = useState("");
  const [oleo, setOleo] = useState("");
  const [obs, setObs] = useState("");

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
          setSinergia("");
          setCarreador("");
          setOleo("");
          setObs("");
        });
      alert("sinergia gravada");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sinergia</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sinergia">sinergia</label>
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
        <button type="submit">gravar</button>
      </form>
    </div>
  );
};

export default Sinergia;
