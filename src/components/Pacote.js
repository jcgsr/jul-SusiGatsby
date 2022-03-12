import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RingLoader from "react-spinners/RingLoader";

const Pacote = () => {
  const [loading, setLoading] = useState(true);

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

  const notify = () =>
    toast.success("Pacote gravado com sucesso", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyInfo = () =>
    toast.info("Pacote atualizado com sucesso", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyDel = () =>
    toast.warning("Pacote deletado com sucesso", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
      })
      .then(() => {
        notify();
      });
  };
  const showPacotes = () => {
    firebase
      .firestore()
      .collection("pacotes")
      .orderBy("cliente")
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
            sessao1: item.data().sessao1,
            sessao2: item.data().sessao2,
            sessao3: item.data().sessao3,
            sessao4: item.data().sessao4,
            sessao5: item.data().sessao5,
          });
        });
        setPacoteDados(meusPacotes);
        setLoading(false);
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
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
      })
      .then(() => {
        notifyInfo();
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
        notifyDel();
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
        sessao1: sessao1,
        sessao2: sessao2,
        sessao3: sessao3,
        sessao4: sessao4,
        sessao5: sessao5,
      })
      .then(() => alert("Pacote Arquivado"))
      .catch(e => {
        console.log("erro: " + e);
      });
  };

  return (
    <div>
      <ToastContainer />
      <h1>Pacotes</h1>
      <form onSubmit={handleSubmit} className="form">
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
        <div className="btn-anamnese">
          <button className="gravar" type="submit">
            gravar
          </button>
        </div>
      </form>

      <div className="btn-anamnese">
        <button className="mostrar" onClick={showPacotes}>
          mostrar pacotes
        </button>
        <button className="gravar" onClick={handleEdit}>
          atualizar
        </button>
        <button className="arquivar" onClick={handleFile}>
          arquivar
        </button>
      </div>
      <div className="card">
        <ul>
          {pacoteDados.map(dado => {
            if (loading) {
              return (
                <div className="spinner">
                  <RingLoader color="#5e35b1" />
                </div>
              );
            }
            return (
              <li key={dado.id}>
                <p>
                  cliente: <strong>{dado.cliente}</strong>
                </p>
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
                </table>
                <div className="btn-anamnese">
                  {" "}
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
                      setSessao1(dado.sessao1),
                      setSessao2(dado.sessao2),
                      setSessao3(dado.sessao3),
                      setSessao4(dado.sessao4),
                      setSessao5(dado.sessao5)
                    )}
                  >
                    <a href="#cliente" style={{ textDecoration: "none" }}>
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
          <hr />
        </ul>
      </div>
    </div>
  );
};
export default Pacote;
