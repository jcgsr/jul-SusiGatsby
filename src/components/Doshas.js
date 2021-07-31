import React, { useState } from "react";

import firebase from "firebase";

import { getAge } from "../services/utils/age";

const Doshas = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [doshasDados, setDoshasDados] = useState([]);
  const [idDoshas, setIdDoshas] = useState("");
  // VATA
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const [v4, setV4] = useState(0);
  const [v5, setV5] = useState(0);
  const [v6, setV6] = useState(0);
  const [v7, setV7] = useState(0);
  const [v8, setV8] = useState(0);
  const [v9, setV9] = useState(0);
  const [v10, setV10] = useState(0);
  const [v11, setV11] = useState(0);
  const [v12, setV12] = useState(0);
  const [v13, setV13] = useState(0);
  const [v14, setV14] = useState(0);
  const [v15, setV15] = useState(0);
  const [v16, setV16] = useState(0);
  const [v17, setV17] = useState(0);
  const [v18, setV18] = useState(0);
  const [v19, setV19] = useState(0);
  const [v20, setV20] = useState(0);
  const [sumV, setSumV] = useState(0);

  // PITTA
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [p4, setP4] = useState(0);
  const [p5, setP5] = useState(0);
  const [p6, setP6] = useState(0);
  const [p7, setP7] = useState(0);
  const [p8, setP8] = useState(0);
  const [p9, setP9] = useState(0);
  const [p10, setP10] = useState(0);
  const [p11, setP11] = useState(0);
  const [p12, setP12] = useState(0);
  const [p13, setP13] = useState(0);
  const [p14, setP14] = useState(0);
  const [p15, setP15] = useState(0);
  const [p16, setP16] = useState(0);
  const [p17, setP17] = useState(0);
  const [p18, setP18] = useState(0);
  const [p19, setP19] = useState(0);
  const [p20, setP20] = useState(0);
  const [sumP, setSumP] = useState(0);

  // KAPHA
  const [k1, setK1] = useState(0);
  const [k2, setK2] = useState(0);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);
  const [k5, setK5] = useState(0);
  const [k6, setK6] = useState(0);
  const [k7, setK7] = useState(0);
  const [k8, setK8] = useState(0);
  const [k9, setK9] = useState(0);
  const [k10, setK10] = useState(0);
  const [k11, setK11] = useState(0);
  const [k12, setK12] = useState(0);
  const [k13, setK13] = useState(0);
  const [k14, setK14] = useState(0);
  const [k15, setK15] = useState(0);
  const [k16, setK16] = useState(0);
  const [k17, setK17] = useState(0);
  const [k18, setK18] = useState(0);
  const [k19, setK19] = useState(0);
  const [k20, setK20] = useState(0);
  const [sumK, setSumK] = useState(0);

  const sumVata = (...args) => {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  };
  const sumPitta = (...args) => {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  };
  const sumKapha = (...args) => {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("doshas")
      .add({
        nome: name,
        nascimento: birthday,
        endereco: address,
        profissao: profession,
        telefone: phone,
        totalVata: sumV,
        totalPitta: sumP,
        totalKapha: sumK,
      })
      .then(() => {
        handleReset();
      });
  };
  const handleReset = () => {
    setName("");
    setBirthday("");
    setAddress("");
    setProfession("");
    setPhone("");
    setSumV("");
    setSumP("");
    setSumK("");
  };

  const showDoshas = () => {
    firebase
      .firestore()
      .collection("doshas")
      .onSnapshot(doc => {
        let meusDoshas = [];
        doc.forEach(item => {
          meusDoshas.push({
            id: item.id,
            nome: item.data().nome,
            nascimento: item.data().nascimento,
            endereco: item.data().endereco,
            profissao: item.data().profissao,
            telefone: item.data().telefone,
            vata: item.data().totalVata,
            pitta: item.data().totalPitta,
            kapha: item.data().totalKapha,
          });
        });
        setDoshasDados(meusDoshas);
      });
  };
  const handleDelete = async id => {
    await firebase
      .firestore()
      .collection("doshas")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deletado");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const handleEdit = async () => {
    await firebase
      .firestore()
      .collection("doshas")
      .doc(idDoshas)
      .update({
        nome: name,
        nascimento: birthday,
        endereco: address,
        profissao: profession,
        telefone: phone,
        totalVata: sumV,
        totalPitta: sumP,
        totalKapha: sumK,
      })
      .then(() => {
        alert("Dados atualizados");
        setIdDoshas("");
        handleReset();
      });
  };
  return (
    <div>
      <h1>Doshas</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={idDoshas}
          onChange={e => setIdDoshas(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="name">Nome</label>
        <input
          id="nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="age">Data de nascimento</label>
        <input
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />
        <p id="idade">idade: {getAge(birthday)}</p>
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="profession">Profissão</label>
        <input
          type="text"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {/* PERGUNTAS */}
        <div className="checkboxes">
          <h3>VATA</h3>
          <p
            onChange={e => {
              setV1(e.target.value);
            }}
          >
            1. Executo minhas atividades muito rapidamente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="ativdades" value="1" />
                <label htmlFor="atividades">1</label>
                <input type="radio" name="ativdades" value="2" />
                <label htmlFor="atividades">2</label>
              </div>{" "}
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="ativdades" value="3" />
                <label htmlFor="atividades">3</label>
                <input type="radio" name="ativdades" value="4" />
                <label htmlFor="atividades">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="ativdades" value="5" />
                <label htmlFor="atividades">5</label>
                <input type="radio" name="ativdades" value="6" />
                <label htmlFor="atividades">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV2(e.target.value);
            }}
          >
            2. Não sou bom em memorizar alguma coisa e lembrá-la mais tarde.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="memoria" value="1" />
                <label htmlFor="memoria">1</label>
                <input type="radio" name="memoria" value="2" />
                <label htmlFor="memoria">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="memoria" value="3" />
                <label htmlFor="memoria">3</label>
                <input type="radio" name="memoria" value="4" />
                <label htmlFor="memoria">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="memoria" value="5" />
                <label htmlFor="memoria">5</label>
                <input type="radio" name="memoria" value="6" />
                <label htmlFor="memoria">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV3(e.target.value);
            }}
          >
            3. Sou entusiasta por natureza.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="natureza" value="1" />
                <label htmlFor="natureza">1</label>
                <input type="radio" name="natureza" value="2" />
                <label htmlFor="natureza">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="natureza" value="3" />
                <label htmlFor="natureza">3</label>
                <input type="radio" name="natureza" value="4" />
                <label htmlFor="natureza">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="natureza" value="5" />
                <label htmlFor="natureza">5</label>
                <input type="radio" name="natureza" value="6" />
                <label htmlFor="natureza">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV4(e.target.value);
            }}
          >
            4. Meu tipo físico é magro. Não engordo facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="fisico" value="1" />
                <label htmlFor="fisico">1</label>
                <input type="radio" name="fisico" value="2" />
                <label htmlFor="fisico">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="fisico" value="3" />
                <label htmlFor="fisico">3</label>
                <input type="radio" name="fisico" value="4" />
                <label htmlFor="fisico">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="fisico" value="5" />
                <label htmlFor="fisico">5</label>
                <input type="radio" name="fisico" value="6" />
                <label htmlFor="fisico">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV5(e.target.value);
            }}
          >
            5. Sempre aprendi coisas rapidamente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="aprender" value="1" />
                <label htmlFor="aprender">1</label>
                <input type="radio" name="aprender" value="2" />
                <label htmlFor="aprender">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="aprender" value="3" />
                <label htmlFor="aprender">3</label>
                <input type="radio" name="aprender" value="4" />
                <label htmlFor="aprender">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="aprender" value="5" />
                <label htmlFor="aprender">5</label>
                <input type="radio" name="aprender" value="6" />
                <label htmlFor="aprender">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV6(e.target.value);
            }}
          >
            6. Meu andar é rápido e leve.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="andar" value="1" />
                <label htmlFor="andar">1</label>
                <input type="radio" name="andar" value="2" />
                <label htmlFor="andar">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="andar" value="3" />
                <label htmlFor="andar">3</label>
                <input type="radio" name="andar" value="4" />
                <label htmlFor="andar">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="andar" value="5" />
                <label htmlFor="andar">5</label>
                <input type="radio" name="andar" value="6" />
                <label htmlFor="andar">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV7(e.target.value);
            }}
          >
            7. Minha tendência é ter dificuldades para tomar decisões.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="decisoes" value="1" />
                <label htmlFor="decisoes">1</label>
                <input type="radio" name="decisoes" value="2" />
                <label htmlFor="decisoes">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="decisoes" value="3" />
                <label htmlFor="decisoes">3</label>
                <input type="radio" name="decisoes" value="4" />
                <label htmlFor="decisoes">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="decisoes" value="5" />
                <label htmlFor="decisoes">5</label>
                <input type="radio" name="decisoes" value="6" />
                <label htmlFor="decisoes">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV8(e.target.value);
            }}
          >
            8. Tenho tendência a gases e prisão de ventre.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="gases" value="1" />
                <label htmlFor="gases">1</label>
                <input type="radio" name="gases" value="2" />
                <label htmlFor="gases">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="gases" value="3" />
                <label htmlFor="gases">3</label>
                <input type="radio" name="gases" value="4" />
                <label htmlFor="gases">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="gases" value="5" />
                <label htmlFor="gases">5</label>
                <input type="radio" name="gases" value="6" />
                <label htmlFor="gases">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV9(e.target.value);
            }}
          >
            9. Costumo ter as mãos e os pés frios.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="pefrio" value="1" />
                <label htmlFor="pefrio">1</label>
                <input type="radio" name="pefrio" value="2" />
                <label htmlFor="pefrio">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="pefrio" value="3" />
                <label htmlFor="pefrio">3</label>
                <input type="radio" name="pefrio" value="4" />
                <label htmlFor="pefrio">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="pefrio" value="5" />
                <label htmlFor="pefrio">5</label>
                <input type="radio" name="pefrio" value="6" />
                <label htmlFor="pefrio">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV10(e.target.value);
            }}
          >
            10. Fico ansioso e preocupado facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="preocupado" value="1" />
                <label htmlFor="preocupado">1</label>
                <input type="radio" name="preocupado" value="2" />
                <label htmlFor="preocupado">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="preocupado" value="3" />
                <label htmlFor="preocupado">3</label>
                <input type="radio" name="preocupado" value="4" />
                <label htmlFor="preocupado">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="preocupado" value="5" />
                <label htmlFor="preocupado">5</label>
                <input type="radio" name="preocupado" value="6" />
                <label htmlFor="preocupado">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV11(e.target.value);
            }}
          >
            11. Não tolero clima frio como a maioria das pessoas.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="climafrio" value="1" />
                <label htmlFor="climafrio">1</label>
                <input type="radio" name="climafrio" value="2" />
                <label htmlFor="climafrio">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="climafrio" value="3" />
                <label htmlFor="climafrio">3</label>
                <input type="radio" name="climafrio" value="4" />
                <label htmlFor="climafrio">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="climafrio" value="5" />
                <label htmlFor="climafrio">5</label>
                <input type="radio" name="climafrio" value="6" />
                <label htmlFor="climafrio">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV12(e.target.value);
            }}
          >
            12. Falo rápido e meus colegas pensam que falo muito.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="falorapido" value="1" />
                <label htmlFor="falorapido">1</label>
                <input type="radio" name="falorapido" value="2" />
                <label htmlFor="falorapido">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="falorapido" value="3" />
                <label htmlFor="falorapido">3</label>
                <input type="radio" name="falorapido" value="4" />
                <label htmlFor="falorapido">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="falorapido" value="5" />
                <label htmlFor="falorapido">5</label>
                <input type="radio" name="falorapido" value="6" />
                <label htmlFor="falorapido">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV13(e.target.value);
            }}
          >
            13. Mudo de temperamento facilmente e sou um tanto emocional.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="emocional" value="1" />
                <label htmlFor="emocional">1</label>
                <input type="radio" name="emocional" value="2" />
                <label htmlFor="emocional">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="emocional" value="3" />
                <label htmlFor="emocional">3</label>
                <input type="radio" name="emocional" value="4" />
                <label htmlFor="emocional">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="emocional" value="5" />
                <label htmlFor="emocional">5</label>
                <input type="radio" name="emocional" value="6" />
                <label htmlFor="emocional">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV14(e.target.value);
            }}
          >
            14. Custo a dormir ou a ter um sono profundo.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="sonoprofundo" value="1" />
                <label htmlFor="sonoprofundo">1</label>
                <input type="radio" name="sonoprofundo" value="2" />
                <label htmlFor="sonoprofundo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="sonoprofundo" value="3" />
                <label htmlFor="sonoprofundo">3</label>
                <input type="radio" name="sonoprofundo" value="4" />
                <label htmlFor="sonoprofundo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="sonoprofundo" value="5" />
                <label htmlFor="sonoprofundo">5</label>
                <input type="radio" name="sonoprofundo" value="6" />
                <label htmlFor="sonoprofundo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV15(e.target.value);
            }}
          >
            15. Minha pele tende a ser seca, principalmente no inverno.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="peleseca" value="1" />
                <label htmlFor="peleseca">1</label>
                <input type="radio" name="peleseca" value="2" />
                <label htmlFor="peleseca">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="peleseca" value="3" />
                <label htmlFor="peleseca">3</label>
                <input type="radio" name="peleseca" value="4" />
                <label htmlFor="peleseca">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="peleseca" value="5" />
                <label htmlFor="peleseca">5</label>
                <input type="radio" name="peleseca" value="6" />
                <label htmlFor="peleseca">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV16(e.target.value);
            }}
          >
            16. Minha mente é muito ativa, às vezes um tanto inquieta, mas
            também imaginativa.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="menteativa" value="1" />
                <label htmlFor="menteativa">1</label>
                <input type="radio" name="menteativa" value="2" />
                <label htmlFor="menteativa">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="menteativa" value="3" />
                <label htmlFor="menteativa">3</label>
                <input type="radio" name="menteativa" value="4" />
                <label htmlFor="menteativa">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="menteativa" value="5" />
                <label htmlFor="menteativa">5</label>
                <input type="radio" name="menteativa" value="6" />
                <label htmlFor="menteativa">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV17(e.target.value);
            }}
          >
            17. Meus movimentos são rápidos e ativos; minha energia tende a vir
            explosivamente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="movimentorapido" value="1" />
                <label htmlFor="movimentorapido">1</label>
                <input type="radio" name="movimentorapido" value="2" />
                <label htmlFor="movimentorapido">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="movimentorapido" value="3" />
                <label htmlFor="movimentorapido">3</label>
                <input type="radio" name="movimentorapido" value="4" />
                <label htmlFor="movimentorapido">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="movimentorapido" value="5" />
                <label htmlFor="movimentorapido">5</label>
                <input type="radio" name="movimentorapido" value="6" />
                <label htmlFor="movimentorapido">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV18(e.target.value);
            }}
          >
            18. Fico entusiasmado facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="entusiasmo" value="1" />
                <label htmlFor="entusiasmo">1</label>
                <input type="radio" name="entusiasmo" value="2" />
                <label htmlFor="entusiasmo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="entusiasmo" value="3" />
                <label htmlFor="entusiasmo">3</label>
                <input type="radio" name="entusiasmo" value="4" />
                <label htmlFor="entusiasmo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="entusiasmo" value="5" />
                <label htmlFor="entusiasmo">5</label>
                <input type="radio" name="entusiasmo" value="6" />
                <label htmlFor="entusiasmo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV19(e.target.value);
            }}
          >
            19. Quando sozinho(a), meus hábitos de dormir e alimentares tendem a
            ser regulares.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="habitoregular" value="1" />
                <label htmlFor="habitoregular">1</label>
                <input type="radio" name="habitoregular" value="2" />
                <label htmlFor="habitoregular">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="habitoregular" value="3" />
                <label htmlFor="habitoregular">3</label>
                <input type="radio" name="habitoregular" value="4" />
                <label htmlFor="habitoregular">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="habitoregular" value="5" />
                <label htmlFor="habitoregular">5</label>
                <input type="radio" name="habitoregular" value="6" />
                <label htmlFor="habitoregular">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setV20(e.target.value);
            }}
          >
            20. Aprendo rápido, mas também esqueço rápido.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="aprendorapido" value="1" />
                <label htmlFor="aprendorapido">1</label>
                <input type="radio" name="aprendorapido" value="2" />
                <label htmlFor="aprendorapido">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="aprendorapido" value="3" />
                <label htmlFor="aprendorapido">3</label>
                <input type="radio" name="aprendorapido" value="4" />
                <label htmlFor="aprendorapido">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="aprendorapido" value="5" />
                <label htmlFor="aprendorapido">5</label>
                <input type="radio" name="aprendorapido" value="6" />
                <label htmlFor="aprendorapido">6</label>
              </div>
            </div>
          </p>
          <h4>
            total vata:{" "}
            {sumVata(
              +v1,
              +v2,
              +v3,
              +v4,
              +v5,
              +v6,
              +v7,
              +v8,
              +v9,
              +v10,
              +v11,
              +v12,
              +v13,
              +v14,
              +v15,
              +v16,
              +v17,
              +v18,
              +v19,
              +v20
            )}{" "}
            <br />
          </h4>
          <p onChange={e => setSumV(e.target.value)}>
            Por favor, confirme o total do seu Vata:
            <input
              type="number"
              value={sumV}
              onFocus={e => e.currentTarget.select()}
              placeholder="total vata"
            />
          </p>
          <hr />
          <h3>PITTA</h3>
          <p
            onChange={e => {
              setP1(e.target.value);
            }}
          >
            1. Considero-me muito eficiente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="eficiente" value="1" />
                <label htmlFor="eficiente">1</label>
                <input type="radio" name="eficiente" value="2" />
                <label htmlFor="eficiente">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="eficiente" value="3" />
                <label htmlFor="eficiente">3</label>
                <input type="radio" name="eficiente" value="4" />
                <label htmlFor="eficiente">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="eficiente" value="5" />
                <label htmlFor="eficiente">5</label>
                <input type="radio" name="eficiente" value="6" />
                <label htmlFor="eficiente">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP2(e.target.value);
            }}
          >
            2. Tendo a ser extremamente preciso e organizado em minhas
            atividades.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="oroganizado" value="1" />
                <label htmlFor="oroganizado">1</label>
                <input type="radio" name="oroganizado" value="2" />
                <label htmlFor="oroganizado">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="oroganizado" value="3" />
                <label htmlFor="oroganizado">3</label>
                <input type="radio" name="oroganizado" value="4" />
                <label htmlFor="oroganizado">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="oroganizado" value="5" />
                <label htmlFor="oroganizado">5</label>
                <input type="radio" name="oroganizado" value="6" />
                <label htmlFor="oroganizado">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP3(e.target.value);
            }}
          >
            3. Tenho força de vontade e sou um tanto perseverante.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="perseverante" value="1" />
                <label htmlFor="perseverante">1</label>
                <input type="radio" name="perseverante" value="2" />
                <label htmlFor="perseverante">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="perseverante" value="3" />
                <label htmlFor="perseverante">3</label>
                <input type="radio" name="perseverante" value="4" />
                <label htmlFor="perseverante">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="perseverante" value="5" />
                <label htmlFor="perseverante">5</label>
                <input type="radio" name="perseverante" value="6" />
                <label htmlFor="perseverante">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP4(e.target.value);
            }}
          >
            4. Sinto incômodo e me canso facilmente em clima mais quente que o
            normal.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="incomodo" value="1" />
                <label htmlFor="incomodo">1</label>
                <input type="radio" name="incomodo" value="2" />
                <label htmlFor="incomodo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="incomodo" value="3" />
                <label htmlFor="incomodo">3</label>
                <input type="radio" name="incomodo" value="4" />
                <label htmlFor="incomodo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="incomodo" value="5" />
                <label htmlFor="incomodo">5</label>
                <input type="radio" name="incomodo" value="6" />
                <label htmlFor="incomodo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP5(e.target.value);
            }}
          >
            5. Tendo a transpirar facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="transpirar" value="1" />
                <label htmlFor="transpirar">1</label>
                <input type="radio" name="transpirar" value="2" />
                <label htmlFor="transpirar">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="transpirar" value="3" />
                <label htmlFor="transpirar">3</label>
                <input type="radio" name="transpirar" value="4" />
                <label htmlFor="transpirar">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="transpirar" value="5" />
                <label htmlFor="transpirar">5</label>
                <input type="radio" name="transpirar" value="6" />
                <label htmlFor="transpirar">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP6(e.target.value);
            }}
          >
            6. Nem sempre aparento, mas me irrito facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="irrito" value="1" />
                <label htmlFor="irrito">1</label>
                <input type="radio" name="irrito" value="2" />
                <label htmlFor="irrito">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="irrito" value="3" />
                <label htmlFor="irrito">3</label>
                <input type="radio" name="irrito" value="4" />
                <label htmlFor="irrito">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="irrito" value="5" />
                <label htmlFor="irrito">5</label>
                <input type="radio" name="irrito" value="6" />
                <label htmlFor="irrito">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP7(e.target.value);
            }}
          >
            7. É difícil pra mim, atrasar ou suprimir alguma refeição.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="refeicao" value="1" />
                <label htmlFor="refeicao">1</label>
                <input type="radio" name="refeicao" value="2" />
                <label htmlFor="refeicao">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="refeicao" value="3" />
                <label htmlFor="refeicao">3</label>
                <input type="radio" name="refeicao" value="4" />
                <label htmlFor="refeicao">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="refeicao" value="5" />
                <label htmlFor="refeicao">5</label>
                <input type="radio" name="refeicao" value="6" />
                <label htmlFor="refeicao">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP8(e.target.value);
            }}
          >
            8. Meu cabelo é grisalho desde cedo, fino, liso, loiro e perco-o
            precocemente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="grisalho" value="1" />
                <label htmlFor="grisalho">1</label>
                <input type="radio" name="grisalho" value="2" />
                <label htmlFor="grisalho">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="grisalho" value="3" />
                <label htmlFor="grisalho">3</label>
                <input type="radio" name="grisalho" value="4" />
                <label htmlFor="grisalho">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="grisalho" value="5" />
                <label htmlFor="grisalho">5</label>
                <input type="radio" name="grisalho" value="6" />
                <label htmlFor="grisalho">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP9(e.target.value);
            }}
          >
            9. Tenho bom apetite, se quiser posso comer muito.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="bomapetite" value="1" />
                <label htmlFor="bomapetite">1</label>
                <input type="radio" name="bomapetite" value="2" />
                <label htmlFor="bomapetite">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="bomapetite" value="3" />
                <label htmlFor="bomapetite">3</label>
                <input type="radio" name="bomapetite" value="4" />
                <label htmlFor="bomapetite">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="bomapetite" value="5" />
                <label htmlFor="bomapetite">5</label>
                <input type="radio" name="bomapetite" value="6" />
                <label htmlFor="bomapetite">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP10(e.target.value);
            }}
          >
            10. Muitos me acham cabeça-dura.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="cabecadura" value="1" />
                <label htmlFor="cabecadura">1</label>
                <input type="radio" name="cabecadura" value="2" />
                <label htmlFor="cabecadura">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="cabecadura" value="3" />
                <label htmlFor="cabecadura">3</label>
                <input type="radio" name="cabecadura" value="4" />
                <label htmlFor="cabecadura">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="cabecadura" value="5" />
                <label htmlFor="cabecadura">5</label>
                <input type="radio" name="cabecadura" value="6" />
                <label htmlFor="cabecadura">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP11(e.target.value);
            }}
          >
            11. Minha digestão é regular e não é comum eu ter prisão de ventre.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="prisaoventre" value="1" />
                <label htmlFor="prisaoventre">1</label>
                <input type="radio" name="prisaoventre" value="2" />
                <label htmlFor="prisaoventre">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="prisaoventre" value="3" />
                <label htmlFor="prisaoventre">3</label>
                <input type="radio" name="prisaoventre" value="4" />
                <label htmlFor="prisaoventre">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="prisaoventre" value="5" />
                <label htmlFor="prisaoventre">5</label>
                <input type="radio" name="prisaoventre" value="6" />
                <label htmlFor="prisaoventre">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP12(e.target.value);
            }}
          >
            2. Fico impaciente com facilidade.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="impaciente" value="1" />
                <label htmlFor="impaciente">1</label>
                <input type="radio" name="impaciente" value="2" />
                <label htmlFor="impaciente">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="impaciente" value="3" />
                <label htmlFor="impaciente">3</label>
                <input type="radio" name="impaciente" value="4" />
                <label htmlFor="impaciente">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="impaciente" value="5" />
                <label htmlFor="impaciente">5</label>
                <input type="radio" name="impaciente" value="6" />
                <label htmlFor="impaciente">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP13(e.target.value);
            }}
          >
            13.Tendo a ser perfeccionista com detalhes.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="perfeccionista" value="1" />
                <label htmlFor="perfeccionista">1</label>
                <input type="radio" name="perfeccionista" value="2" />
                <label htmlFor="perfeccionista">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="perfeccionista" value="3" />
                <label htmlFor="perfeccionista">3</label>
                <input type="radio" name="perfeccionista" value="4" />
                <label htmlFor="perfeccionista">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="perfeccionista" value="5" />
                <label htmlFor="perfeccionista">5</label>
                <input type="radio" name="perfeccionista" value="6" />
                <label htmlFor="perfeccionista">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP14(e.target.value);
            }}
          >
            14. Zango-me com facilidade, mas esqueço logo.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="zango" value="1" />
                <label htmlFor="zango">1</label>
                <input type="radio" name="zango" value="2" />
                <label htmlFor="zango">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="zango" value="3" />
                <label htmlFor="zango">3</label>
                <input type="radio" name="zango" value="4" />
                <label htmlFor="zango">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="zango" value="5" />
                <label htmlFor="zango">5</label>
                <input type="radio" name="zango" value="6" />
                <label htmlFor="zango">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP15(e.target.value);
            }}
          >
            15. Gosto de comidas e bebidas frias (como sorvete).
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="sorvete" value="1" />
                <label htmlFor="sorvete">1</label>
                <input type="radio" name="sorvete" value="2" />
                <label htmlFor="sorvete">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="sorvete" value="3" />
                <label htmlFor="sorvete">3</label>
                <input type="radio" name="sorvete" value="4" />
                <label htmlFor="sorvete">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="sorvete" value="5" />
                <label htmlFor="sorvete">5</label>
                <input type="radio" name="sorvete" value="6" />
                <label htmlFor="sorvete">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP16(e.target.value);
            }}
          >
            16. É mais comum que eu perceba que um ambiente está muito quente do
            que frio.{" "}
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="ambiente" value="1" />
                <label htmlFor="ambiente">1</label>
                <input type="radio" name="ambiente" value="2" />
                <label htmlFor="ambiente">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="ambiente" value="3" />
                <label htmlFor="ambiente">3</label>
                <input type="radio" name="ambiente" value="4" />
                <label htmlFor="ambiente">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="ambiente" value="5" />
                <label htmlFor="ambiente">5</label>
                <input type="radio" name="ambiente" value="6" />
                <label htmlFor="ambiente">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP17(e.target.value);
            }}
          >
            17. Não tolero comidas quentes ou apimentadas.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="apimentadas" value="1" />
                <label htmlFor="apimentadas">1</label>
                <input type="radio" name="apimentadas" value="2" />
                <label htmlFor="apimentadas">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="apimentadas" value="3" />
                <label htmlFor="apimentadas">3</label>
                <input type="radio" name="apimentadas" value="4" />
                <label htmlFor="apimentadas">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="apimentadas" value="5" />
                <label htmlFor="apimentadas">5</label>
                <input type="radio" name="apimentadas" value="6" />
                <label htmlFor="apimentadas">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP18(e.target.value);
            }}
          >
            18. Não tolero discórdia.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="discordia" value="1" />
                <label htmlFor="discordia">1</label>
                <input type="radio" name="discordia" value="2" />
                <label htmlFor="discordia">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="discordia" value="3" />
                <label htmlFor="discordia">3</label>
                <input type="radio" name="discordia" value="4" />
                <label htmlFor="discordia">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="discordia" value="5" />
                <label htmlFor="discordia">5</label>
                <input type="radio" name="discordia" value="6" />
                <label htmlFor="discordia">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP19(e.target.value);
            }}
          >
            19. Gosto de desafios e quando quero algo sou muito determinado.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="desafios" value="1" />
                <label htmlFor="desafios">1</label>
                <input type="radio" name="desafios" value="2" />
                <label htmlFor="desafios">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="desafios" value="3" />
                <label htmlFor="desafios">3</label>
                <input type="radio" name="desafios" value="4" />
                <label htmlFor="desafios">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="desafios" value="5" />
                <label htmlFor="desafios">5</label>
                <input type="radio" name="desafios" value="6" />
                <label htmlFor="desafios">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setP20(e.target.value);
            }}
          >
            20. Tendo a ser bastante crítico com os outros e comigo mesmo.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="critico" value="1" />
                <label htmlFor="critico">1</label>
                <input type="radio" name="critico" value="2" />
                <label htmlFor="critico">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="critico" value="3" />
                <label htmlFor="critico">3</label>
                <input type="radio" name="critico" value="4" />
                <label htmlFor="critico">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="critico" value="5" />
                <label htmlFor="critico">5</label>
                <input type="radio" name="critico" value="6" />
                <label htmlFor="critico">6</label>
              </div>
            </div>
          </p>
          <h4>
            total pitta:
            {sumPitta(
              +p1,
              +p2,
              +p3,
              +p4,
              +p5,
              +p6,
              +p7,
              +p8,
              +p9,
              +p10,
              +p11,
              +p12,
              +p13,
              +p14,
              +p15,
              +p16,
              +p17,
              +p18,
              +p19,
              +p20
            )}{" "}
            <br />
          </h4>
          <p onChange={e => setSumP(e.target.value)}>
            Por favor, confirme o total do seu Pitta:
            <input
              type="number"
              value={sumP}
              onFocus={e => e.currentTarget.select()}
              placeholder="total pitta"
            />
          </p>
          <hr />
          <h3>KAPHA</h3>
          <p
            onChange={e => {
              setK1(e.target.value);
            }}
          >
            {/* PERGUNTAS */}
            1. Minha tendência natural é de fazer as coisas de maneira lenta e
            relaxada.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="relaxada" value="1" />
                <label htmlFor="relaxada">1</label>
                <input type="radio" name="relaxada" value="2" />
                <label htmlFor="relaxada">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="relaxada" value="3" />
                <label htmlFor="relaxada">3</label>
                <input type="radio" name="relaxada" value="4" />
                <label htmlFor="relaxada">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="relaxada" value="5" />
                <label htmlFor="relaxada">5</label>
                <input type="radio" name="relaxada" value="6" />
                <label htmlFor="relaxada">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK2(e.target.value);
            }}
          >
            2. Engordo mais facilmente que a maioria das pessoas e perco peso
            mais devagar.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="engordo" value="1" />
                <label htmlFor="engordo">1</label>
                <input type="radio" name="engordo" value="2" />
                <label htmlFor="engordo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="engordo" value="3" />
                <label htmlFor="engordo">3</label>
                <input type="radio" name="engordo" value="4" />
                <label htmlFor="engordo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="engordo" value="5" />
                <label htmlFor="engordo">5</label>
                <input type="radio" name="engordo" value="6" />
                <label htmlFor="engordo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK3(e.target.value);
            }}
          >
            3. Tenho uma disposição calma e plácida.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="placida" value="1" />
                <label htmlFor="placida">1</label>
                <input type="radio" name="placida" value="2" />
                <label htmlFor="placida">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="placida" value="3" />
                <label htmlFor="placida">3</label>
                <input type="radio" name="placida" value="4" />
                <label htmlFor="placida">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="placida" value="5" />
                <label htmlFor="placida">5</label>
                <input type="radio" name="placida" value="6" />
                <label htmlFor="placida">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK4(e.target.value);
            }}
          >
            4. Posso deixar de comer uma refeição facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="refeicaoperder" value="1" />
                <label htmlFor="refeicaoperder">1</label>
                <input type="radio" name="refeicaoperder" value="2" />
                <label htmlFor="refeicaoperder">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="refeicaoperder" value="3" />
                <label htmlFor="refeicaoperder">3</label>
                <input type="radio" name="refeicaoperder" value="4" />
                <label htmlFor="refeicaoperder">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="refeicaoperder" value="5" />
                <label htmlFor="refeicaoperder">5</label>
                <input type="radio" name="refeicaoperder" value="6" />
                <label htmlFor="refeicaoperder">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK5(e.target.value);
            }}
          >
            5. Tendo a ter excesso de muco, congestão nasal, asma ou problemas
            de sinusite.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="muco" value="1" />
                <label htmlFor="muco">1</label>
                <input type="radio" name="muco" value="2" />
                <label htmlFor="muco">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="muco" value="3" />
                <label htmlFor="muco">3</label>
                <input type="radio" name="muco" value="4" />
                <label htmlFor="muco">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="muco" value="5" />
                <label htmlFor="muco">5</label>
                <input type="radio" name="muco" value="6" />
                <label htmlFor="muco">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK6(e.target.value);
            }}
          >
            6. Preciso de pelo menos 8h de sono para me sentir bem.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="sono" value="1" />
                <label htmlFor="sono">1</label>
                <input type="radio" name="sono" value="2" />
                <label htmlFor="sono">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="sono" value="3" />
                <label htmlFor="sono">3</label>
                <input type="radio" name="sono" value="4" />
                <label htmlFor="sono">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="sono" value="5" />
                <label htmlFor="sono">5</label>
                <input type="radio" name="sono" value="6" />
                <label htmlFor="sono">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK7(e.target.value);
            }}
          >
            7. Meu sono é bem profundo.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="sonoprofundo" value="1" />
                <label htmlFor="sonoprofundo">1</label>
                <input type="radio" name="sonoprofundo" value="2" />
                <label htmlFor="sonoprofundo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="sonoprofundo" value="3" />
                <label htmlFor="sonoprofundo">3</label>
                <input type="radio" name="sonoprofundo" value="4" />
                <label htmlFor="sonoprofundo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="sonoprofundo" value="5" />
                <label htmlFor="sonoprofundo">5</label>
                <input type="radio" name="sonoprofundo" value="6" />
                <label htmlFor="sonoprofundo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK8(e.target.value);
            }}
          >
            8. Sou calmo por natureza e não me zango facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="calmo" value="1" />
                <label htmlFor="calmo">1</label>
                <input type="radio" name="calmo" value="2" />
                <label htmlFor="calmo">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="calmo" value="3" />
                <label htmlFor="calmo">3</label>
                <input type="radio" name="calmo" value="4" />
                <label htmlFor="calmo">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="calmo" value="5" />
                <label htmlFor="calmo">5</label>
                <input type="radio" name="calmo" value="6" />
                <label htmlFor="calmo">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK9(e.target.value);
            }}
          >
            9. Não aprendo rápido, mas tenho forte poder de retenção e memória a
            longo prazo.
            <p>não</p>
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="retencao" value="1" />
                <label htmlFor="retencao">1</label>
                <input type="radio" name="retencao" value="2" />
                <label htmlFor="retencao">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="retencao" value="3" />
                <label htmlFor="retencao">3</label>
                <input type="radio" name="retencao" value="4" />
                <label htmlFor="retencao">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="retencao" value="5" />
                <label htmlFor="retencao">5</label>
                <input type="radio" name="retencao" value="6" />
                <label htmlFor="retencao">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK10(e.target.value);
            }}
          >
            10. Tenho tendência a obesidade e adquiro gordura facilmente.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="obesidade" value="1" />
                <label htmlFor="obesidade">1</label>
                <input type="radio" name="obesidade" value="2" />
                <label htmlFor="obesidade">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="obesidade" value="3" />
                <label htmlFor="obesidade">3</label>
                <input type="radio" name="obesidade" value="4" />
                <label htmlFor="obesidade">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="obesidade" value="5" />
                <label htmlFor="obesidade">5</label>
                <input type="radio" name="obesidade" value="6" />
                <label htmlFor="obesidade">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK11(e.target.value);
            }}
          >
            11. Não gosto de clima frio e úmido.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="umidade" value="1" />
                <label htmlFor="umidade">1</label>
                <input type="radio" name="umidade" value="2" />
                <label htmlFor="umidade">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="umidade" value="3" />
                <label htmlFor="umidade">3</label>
                <input type="radio" name="umidade" value="4" />
                <label htmlFor="umidade">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="umidade" value="5" />
                <label htmlFor="umidade">5</label>
                <input type="radio" name="umidade" value="6" />
                <label htmlFor="umidade">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK12(e.target.value);
            }}
          >
            12. Meu cabelo é grosso, escuro e liso.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="cabeloliso" value="1" />
                <label htmlFor="cabeloliso">1</label>
                <input type="radio" name="cabeloliso" value="2" />
                <label htmlFor="cabeloliso">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="cabeloliso" value="3" />
                <label htmlFor="cabeloliso">3</label>
                <input type="radio" name="cabeloliso" value="4" />
                <label htmlFor="cabeloliso">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="cabeloliso" value="5" />
                <label htmlFor="cabeloliso">5</label>
                <input type="radio" name="cabeloliso" value="6" />
                <label htmlFor="cabeloliso">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK13(e.target.value);
            }}
          >
            13. Minha pele é suave, lisa e clara.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="lisa" value="1" />
                <label htmlFor="lisa">1</label>
                <input type="radio" name="lisa" value="2" />
                <label htmlFor="lisa">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="lisa" value="3" />
                <label htmlFor="lisa">3</label>
                <input type="radio" name="lisa" value="4" />
                <label htmlFor="lisa">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="lisa" value="5" />
                <label htmlFor="lisa">5</label>
                <input type="radio" name="lisa" value="6" />
                <label htmlFor="lisa">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK14(e.target.value);
            }}
          >
            14. Tenho um porte forte e sólido.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="solido" value="1" />
                <label htmlFor="solido">1</label>
                <input type="radio" name="solido" value="2" />
                <label htmlFor="solido">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="solido" value="3" />
                <label htmlFor="solido">3</label>
                <input type="radio" name="solido" value="4" />
                <label htmlFor="solido">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="solido" value="5" />
                <label htmlFor="solido">5</label>
                <input type="radio" name="solido" value="6" />
                <label htmlFor="solido">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK15(e.target.value);
            }}
          >
            15. Os seguintes adjetivos me descrevem bem: sereno, gentil,
            compreensivo, afetivo.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="sereno" value="1" />
                <label htmlFor="sereno">1</label>
                <input type="radio" name="sereno" value="2" />
                <label htmlFor="sereno">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="sereno" value="3" />
                <label htmlFor="sereno">3</label>
                <input type="radio" name="sereno" value="4" />
                <label htmlFor="sereno">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="sereno" value="5" />
                <label htmlFor="sereno">5</label>
                <input type="radio" name="sereno" value="6" />
                <label htmlFor="sereno">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK16(e.target.value);
            }}
          >
            16. Minha digestão é lenta, o que faz que eu me sinta pesado após
            comer.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="pesado" value="1" />
                <label htmlFor="pesado">1</label>
                <input type="radio" name="pesado" value="2" />
                <label htmlFor="pesado">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="pesado" value="3" />
                <label htmlFor="pesado">3</label>
                <input type="radio" name="pesado" value="4" />
                <label htmlFor="pesado">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="pesado" value="5" />
                <label htmlFor="pesado">5</label>
                <input type="radio" name="pesado" value="6" />
                <label htmlFor="pesado">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK17(e.target.value);
            }}
          >
            17.Tenho uma resistência física muito boa, bem como um nível estável
            de energia.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="estavel" value="1" />
                <label htmlFor="estavel">1</label>
                <input type="radio" name="estavel" value="2" />
                <label htmlFor="estavel">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="estavel" value="3" />
                <label htmlFor="estavel">3</label>
                <input type="radio" name="estavel" value="4" />
                <label htmlFor="estavel">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="estavel" value="5" />
                <label htmlFor="estavel">5</label>
                <input type="radio" name="estavel" value="6" />
                <label htmlFor="estavel">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK18(e.target.value);
            }}
          >
            18. Geralmente meu andar é lento e calculado.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="calculado" value="1" />
                <label htmlFor="calculado">1</label>
                <input type="radio" name="calculado" value="2" />
                <label htmlFor="calculado">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="calculado" value="3" />
                <label htmlFor="calculado">3</label>
                <input type="radio" name="calculado" value="4" />
                <label htmlFor="calculado">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="calculado" value="5" />
                <label htmlFor="calculado">5</label>
                <input type="radio" name="calculado" value="6" />
                <label htmlFor="calculado">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK19(e.target.value);
            }}
          >
            19. Tendo a dormir demais, sentir moleza ao acordar e custo a entrar
            em atividade pela manhã.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="moleza" value="1" />
                <label htmlFor="moleza">1</label>
                <input type="radio" name="moleza" value="2" />
                <label htmlFor="moleza">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="moleza" value="3" />
                <label htmlFor="moleza">3</label>
                <input type="radio" name="moleza" value="4" />
                <label htmlFor="moleza">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="moleza" value="5" />
                <label htmlFor="moleza">5</label>
                <input type="radio" name="moleza" value="6" />
                <label htmlFor="moleza">6</label>
              </div>
            </div>
          </p>
          <p
            onChange={e => {
              setK20(e.target.value);
            }}
          >
            20. Como devagar e sou lento e metódico em minhas ações.
            <div className="boxes">
              <div className="nao">
                <p>não</p>
                <input type="radio" name="metodico" value="1" />
                <label htmlFor="metodico">1</label>
                <input type="radio" name="metodico" value="2" />
                <label htmlFor="metodico">2</label>
              </div>
              <div className="as-vezes">
                <p>às vezes</p>
                <input type="radio" name="metodico" value="3" />
                <label htmlFor="metodico">3</label>
                <input type="radio" name="metodico" value="4" />
                <label htmlFor="metodico">4</label>
              </div>
              <div className="sim">
                <p>sim</p>
                <input type="radio" name="metodico" value="5" />
                <label htmlFor="metodico">5</label>
                <input type="radio" name="metodico" value="6" />
                <label htmlFor="metodico">6</label>
              </div>
            </div>
          </p>
          <h4>
            total kapha:{" "}
            {sumKapha(
              +k1,
              +k2,
              +k3,
              +k4,
              +k5,
              +k6,
              +k7,
              +k8,
              +k9,
              +k10,
              +k11,
              +k12,
              +k13,
              +k14,
              +k15,
              +k16,
              +k17,
              +k18,
              +k19,
              +k20
            )}{" "}
            <br />
          </h4>
          <p onChange={e => setSumK(e.target.value)}>
            Por favor, confirme o total do seu Kapha:
            <input
              type="number"
              onFocus={e => e.currentTarget.select()}
              value={sumK}
              placeholder="total kapha"
            />
          </p>
          <hr />

          <button type="submit">gravar</button>
        </div>
      </form>

      <button onClick={showDoshas}>mostrar</button>
      <h2>dados doshas</h2>
      <ul>
        {doshasDados.map(dosha => {
          return (
            <li key={dosha.id}>
              <p>Nome: {dosha.nome}</p>
              <p>Nascimento: {dosha.nascimento}</p>
              <p>Endereço: {dosha.endereco}</p>
              <p>Profissão: {dosha.profissao}</p>
              <p>Vata: {dosha.vata}</p>
              <p>Pitta: {dosha.pitta}</p>
              <p>Kapha: {dosha.kapha}</p>
              <div className="btn-anamnese">
                <button
                  onClick={() => (
                    setIdDoshas(dosha.id),
                    setName(dosha.nome),
                    setBirthday(dosha.nascimento),
                    setAddress(dosha.endereco),
                    setProfession(dosha.profissao),
                    setSumV(dosha.vata),
                    setSumP(dosha.pitta),
                    setSumK(dosha.kapha)
                  )}
                >
                  <a href="#nome" style={{ textDecoration: "none" }}>
                    carregar
                  </a>
                </button>
                <button
                  className="alert-danger"
                  onClick={() => handleDelete(dosha.id)}
                >
                  deletar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Doshas;
