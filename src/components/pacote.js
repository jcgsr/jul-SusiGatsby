import React, { useState } from "react";
import firebase from "firebase";
const Pacote = () => {
  const [cliente, setCliente] = useState("");
  const [terapia, setTerapia] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [pacoteDados, setPacoteDados] = useState([]);
  const [idPacote, setIdPacote] = useState("");
  //Sessões
  const [sessao1, setSessao1] = useState("");
  const [s1Date, setS1Date] = useState("");

  const [sessao2, setSessao2] = useState("");
  const [s2Date, setS2Date] = useState("");

  const [sessao3, setSessao3] = useState("");
  const [s3Date, setS3Date] = useState("");

  const [sessao4, setSessao4] = useState("");
  const [s4Date, setS4Date] = useState("");

  const [sessao5, setSessao5] = useState("");
  const [s5Date, setS5Date] = useState("");

  const [sessao6, setSessao6] = useState("");
  const [s6Date, setS6Date] = useState("");

  const [sessao7, setSessao7] = useState("");
  const [s7Date, setS7Date] = useState("");

  const [sessao8, setSessao8] = useState("");
  const [s8Date, setS8Date] = useState("");

  const [sessao9, setSessao9] = useState("");
  const [s9Date, setS9Date] = useState("");

  const [sessao10, setSessao10] = useState("");
  const [s10Date, setS10Date] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("pacotes")
      .add({
        cliente: cliente,
        terapia: terapia,
        pagamento: pagamento,
        data1: s1Date,
        data2: s2Date,
        data3: s3Date,
        data4: s4Date,
        data5: s5Date,
        data6: s6Date,
        data7: s7Date,
        data8: s8Date,
        data9: s9Date,
        data10: s10Date,
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
        sessao6: sessao6,
        sessao7: sessao7,
        sessao8: sessao8,
        sessao9: sessao9,
        sessao10: sessao10,
      })
      .then(() => {});
  };
  const showPacotes = () => {
    firebase
      .firestore()
      .collection("pacotes")
      .onSnapshot(doc => {
        let meusPacotes = [];
        doc.forEach(item => {
          meusPacotes.push({
            id: item.id,
            cliente: item.data().cliente,
            terapia: item.data().terapia,
            pagamento: item.data().pagamento,
            data1: item.data().data1,
            data2: item.data().data2,
            data3: item.data().data3,
            data4: item.data().data4,
            data5: item.data().data5,
            data6: item.data().data6,
            data7: item.data().data7,
            data8: item.data().data8,
            data9: item.data().data9,
            data10: item.data().data10,
            sessao1: item.data().sessao1,
            sessao2: item.data().sessao2,
            sessao3: item.data().sessao3,
            sessao4: item.data().sessao4,
            sessao5: item.data().sessao5,
            sessao6: item.data().sessao6,
            sessao7: item.data().sessao7,
            sessao8: item.data().sessao8,
            sessao9: item.data().sessao9,
            sessao10: item.data().sessao10,
          });
        });
        setPacoteDados(meusPacotes);
        console.log(meusPacotes);
      });
  };
  const handleEdit = async () => {
    await firebase
      .firestore()
      .collection("pacotes")
      .doc(idPacote)
      .update({
        cliente: cliente,
        terapia: terapia,
        pagamento: pagamento,
        data1: s1Date,
        data2: s2Date,
        data3: s3Date,
        data4: s4Date,
        data5: s5Date,
        data6: s6Date,
        data7: s7Date,
        data8: s8Date,
        data9: s9Date,
        data10: s10Date,
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
        sessao6: sessao6,
        sessao7: sessao7,
        sessao8: sessao8,
        sessao9: sessao9,
        sessao10: sessao10,
      })
      .then(() => {
        alert("Dados atualizados");
        setIdPacote("");
      });
  };
  const handleDelete = async id => {
    await firebase
      .firestore()
      .collection("pacotes")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deletado");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const handleFile = async e => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("arquivo")
      .add({
        cliente: cliente,
        terapia: terapia,
        pagamento: pagamento,
        data1: s1Date,
        data2: s2Date,
        data3: s3Date,
        data4: s4Date,
        data5: s5Date,
        data6: s6Date,
        data7: s7Date,
        data8: s8Date,
        data9: s9Date,
        data10: s10Date,
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
        sessao6: sessao6,
        sessao7: sessao7,
        sessao8: sessao8,
        sessao9: sessao9,
        sessao10: sessao10,
      })
      .then(() => console.log("arquivado"))
      .catch(e => {
        console.log("erro: " + e);
      });
  };

  return (
    <div>
      <h1>Pacotes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idPacote}
          onChange={e => setIdPacote(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="label">Cliente</label>
        <input
          id="cliente"
          type="text"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
        />{" "}
        <label htmlFor="label">Terapia</label>
        <input
          type="text"
          value={terapia}
          onChange={e => setTerapia(e.target.value)}
        />{" "}
        <label htmlFor="label">Pagamento</label>
        <input
          type="text"
          value={pagamento}
          onChange={e => setPagamento(e.target.value)}
        />
        {/* SESSÃO*/}
        <label htmlFor="s1">Sessão 1</label>
        <br />
        <input
          type="text"
          value={sessao1}
          placeholder="status"
          onChange={e => setSessao1(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s1Date}
          onChange={e => setS1Date(e.target.value)}
        />
        <label htmlFor="s2">Sessão 2</label>
        <br />
        <input
          type="text"
          value={sessao2}
          placeholder="status"
          onChange={e => setSessao2(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s2Date}
          onChange={e => setS2Date(e.target.value)}
        />
        <label htmlFor="s3">Sessão 3</label>
        <br />
        <input
          type="text"
          value={sessao3}
          placeholder="status"
          onChange={e => setSessao3(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s3Date}
          onChange={e => setS3Date(e.target.value)}
        />
        <label htmlFor="s4">Sessão 4</label>
        <br />
        <input
          type="text"
          value={sessao4}
          placeholder="status"
          onChange={e => setSessao4(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s4Date}
          onChange={e => setS4Date(e.target.value)}
        />
        <label htmlFor="s5">Sessão 5</label>
        <br />
        <input
          type="text"
          value={sessao5}
          placeholder="status"
          onChange={e => setSessao5(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s5Date}
          onChange={e => setS5Date(e.target.value)}
        />
        <label htmlFor="s6">Sessão 6</label>
        <br />
        <input
          type="text"
          value={sessao6}
          placeholder="status"
          onChange={e => setSessao6(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s6Date}
          onChange={e => setS6Date(e.target.value)}
        />
        <label htmlFor="s7">Sessão 7</label>
        <br />
        <input
          type="text"
          value={sessao7}
          placeholder="status"
          onChange={e => setSessao7(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s7Date}
          onChange={e => setS7Date(e.target.value)}
        />
        <label htmlFor="s8">Sessão 8</label>
        <br />
        <input
          type="text"
          value={sessao8}
          placeholder="status"
          onChange={e => setSessao8(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s8Date}
          onChange={e => setS8Date(e.target.value)}
        />
        <label htmlFor="s9">Sessão 9</label>
        <br />
        <input
          type="text"
          value={sessao9}
          placeholder="status"
          onChange={e => setSessao9(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s9Date}
          onChange={e => setS9Date(e.target.value)}
        />
        <label htmlFor="s10">Sessão 10</label>
        <br />
        <input
          type="text"
          value={sessao10}
          placeholder="status"
          onChange={e => setSessao10(e.target.value)}
        />
        <br />
        <input
          type="date"
          value={s10Date}
          onChange={e => setS10Date(e.target.value)}
        />
        <button type="submit">gravar</button>
      </form>

      <button onClick={showPacotes}>mostrar pacotes</button>
      <button onClick={handleEdit}>editar</button>
      <button onClick={handleFile}>arquivar</button>
      <div className="pacotes">
        <ul>
          {pacoteDados.map(dado => {
            return (
              <li key={dado.id}>
                <p>cliente: {dado.cliente}</p>
                <p>terapia: {dado.terapia}</p>
                <p>pagamento: {dado.pagamento}</p>
                <table>
                  <tr>
                    <th>Sessão</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>1ª</td>
                    <td>{dado.data1}</td>
                    <td>{dado.sessao1}</td>
                  </tr>
                  <tr>
                    <td>2ª</td>
                    <td>{dado.data2}</td>
                    <td>{dado.sessao2}</td>
                  </tr>

                  <tr>
                    <td>3ª</td>
                    <td>{dado.data3}</td>
                    <td>{dado.sessao3}</td>
                  </tr>

                  <tr>
                    <td>4ª</td>
                    <td>{dado.data4}</td>
                    <td>{dado.sessao4}</td>
                  </tr>

                  <tr>
                    <td>5ª</td>
                    <td>{dado.data5}</td>
                    <td>{dado.sessao5}</td>
                  </tr>

                  <tr>
                    <td>6ª</td>
                    <td>{dado.data6}</td>
                    <td>{dado.sessao6}</td>
                  </tr>

                  <tr>
                    <td>7ª</td>
                    <td>{dado.data7}</td>
                    <td>{dado.sessao7}</td>
                  </tr>

                  <tr>
                    <td>8ª</td>
                    <td>{dado.data8}</td>
                    <td>{dado.sessao8}</td>
                  </tr>

                  <tr>
                    <td>9ª</td>
                    <td>{dado.data9}</td>
                    <td>{dado.sessao9}</td>
                  </tr>

                  <tr>
                    <td>10ª</td>
                    <td>{dado.data10}</td>
                    <td>{dado.sessao10}</td>
                  </tr>
                </table>
                <button
                  onClick={() => (
                    setIdPacote(dado.id),
                    setCliente(dado.cliente),
                    setTerapia(dado.terapia),
                    setPagamento(dado.pagamento),
                    setS1Date(dado.data1),
                    setS2Date(dado.data2),
                    setS3Date(dado.data3),
                    setS4Date(dado.data4),
                    setS5Date(dado.data5),
                    setS6Date(dado.data6),
                    setS7Date(dado.data7),
                    setS8Date(dado.data8),
                    setS9Date(dado.data9),
                    setS10Date(dado.data10),
                    setSessao1(dado.sessao1),
                    setSessao2(dado.sessao2),
                    setSessao3(dado.sessao3),
                    setSessao4(dado.sessao4),
                    setSessao5(dado.sessao5),
                    setSessao6(dado.sessao6),
                    setSessao7(dado.sessao7),
                    setSessao8(dado.sessao8),
                    setSessao9(dado.sessao9),
                    setSessao10(dado.sessao10)
                  )}
                >
                  <a href="#cliente" style={{ textDecoration: "none" }}>
                    carregar
                  </a>
                </button>
                <button onClick={() => handleDelete(dado.id)}>deletar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Pacote;
