import React, { useState } from "react";

import firebase from "firebase";

const SinergiaAntiga = () => {
  const [sinergia, setSinergia] = useState([]);

  const dbSinergia = firebase.database().ref("sinergia");

  const buscarSinergia = () => {
    const dadosSinergia = [];
    dbSinergia.on("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        console.log(data);
        dadosSinergia.push(data);
      });
      setSinergia(dadosSinergia);
    });
  };

  return (
    <div>
      <h1>Sinergia Antiga</h1>
      <div>
        <button onClick={buscarSinergia}>dados</button>
        <ul>
          {Object.entries(sinergia).map(([key, value]) => {
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

export default SinergiaAntiga;
