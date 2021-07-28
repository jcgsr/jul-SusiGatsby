import React, { useState } from "react";

import firebase from "firebase";

const PacoteAntigo = () => {
  const [pacote, setPacote] = useState([]);

  const dbPacote = firebase.database().ref("pacote");

  const fetchPacote = () => {
    const dadosDosha = [];
    dbPacote.on("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        console.log(data);
        dadosDosha.push(data);
      });
      setPacote(dadosDosha);
    });
  };

  return (
    <div>
      <h1>Pacote Antigo</h1>
      <div>
        <button onClick={fetchPacote}>dados</button>
        <ul>
          {Object.entries(pacote).map(([key, value]) => {
            return (
              <li>
                <span>{key}</span>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PacoteAntigo;
