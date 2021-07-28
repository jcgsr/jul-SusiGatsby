import React, { useState } from "react";

import firebase from "firebase";

const Arquivo = () => {
  const [arquivo, setArquivo] = useState([]);

  const dbArquivo = firebase.database().ref("arquivo");

  const fetchArquivo = () => {
    const dadosArquivo = [];
    dbArquivo.on("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        console.log(data);
        dadosArquivo.push(data);
      });
      setArquivo(dadosArquivo);
    });
  };

  return (
    <div>
      <h1>Arquivo Antigo</h1>
      <div>
        <button onClick={fetchArquivo}>dados</button>
        <ul>
          {Object.entries(arquivo).map(([key, value]) => {
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

export default Arquivo;
