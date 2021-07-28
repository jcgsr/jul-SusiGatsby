import React, { useState } from "react";

import firebase from "firebase";

const DoshaAntigo = () => {
  const [dosha, setDosha] = useState([]);

  const dbDosha = firebase.database().ref("dosha");

  const fetchDosha = () => {
    const dadosDosha = [];
    dbDosha.on("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        console.log(data);
        dadosDosha.push(data);
      });
      setDosha(dadosDosha);
    });
  };

  return (
    <div>
      <h1>Dosha Antigo</h1>
      <div>
        <button onClick={fetchDosha}>dados</button>
        <ul>
          {Object.entries(dosha).map(([key, value]) => {
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

export default DoshaAntigo;
