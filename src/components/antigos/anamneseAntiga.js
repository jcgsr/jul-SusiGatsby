import React, { useState } from "react";

import firebase from "firebase";

const AnamneseAntiga = () => {
  const [anamnese, setAnamnese] = useState([]);

  const dbAnamnese = firebase.database().ref("anamnese");

  const fetchAnamnese = () => {
    const dadosAnamnese = [];
    dbAnamnese.on("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        console.log(data);
        dadosAnamnese.push(data);
      });
      setAnamnese(dadosAnamnese);
    });
  };

  return (
    <div>
      <h1>Anamnese Antiga</h1>
      <div>
        <button onClick={fetchAnamnese}>dados</button>
        <ul>
          {Object.entries(anamnese).map(([key, value]) => {
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

export default AnamneseAntiga;
