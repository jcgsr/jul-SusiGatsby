import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";

import { firebase } from "../services/firebase/firebase";

const db = firebase.database().ref("/bands");

function SusiDB() {
  const [susi, setSusi] = useState([]);
  const [band, setBand] = useState("");
  // const [bands, setBands] = useState([]);
  const [genre, setGenre] = useState("");

  // functions
  const fetchDatabase = async () => {
    const susis = [];
    db.once("value", snapshot => {
      snapshot.forEach(item => {
        let data = JSON.stringify(item.val());
        susis.push(Object.values(data));
        // console.log(data);
      });
      setSusi(susis);
    });
  };

  useEffect(() => {
    fetchDatabase();
  }, []);

  const writeDB = async e => {
    e.preventDefault();
    try {
      await db.push({
        band: band,
        genre: genre,
      });
      alert("SUCESSO");
    } catch (error) {
      alert(error);
    }
  };

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigate("/");
  };

  //return
  return (
    <div style={{ textAlign: "center" }}>
      <h2>SUSI DB</h2>
      <Link to="/">home</Link>
      <h2>susi dados firebase</h2>
      <ul>
        {susi.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}

        <hr />
      </ul>

      <button onClick={fetchDatabase}>pegar bandas</button>

      <br />
      <form>
        <input
          placeholder="band"
          type="text"
          value={band}
          onChange={e => setBand(e.target.value)}
        />
        <input
          placeholder="genre"
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <button onClick={writeDB}>gravar</button>
      </form>
      <button onClick={handleLogout}>sair</button>
    </div>
  );
}

export default SusiDB;
