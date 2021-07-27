import React, { useState } from "react";

import firebase from "firebase";

const Doshas = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
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

  // FUNCTIONS
  const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  const sumVata = (...args) => {
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
      })
      .then(() => {
        handleReset();
        idade();
      });
  };
  const handleReset = () => {
    setName("");
    setBirthday("");
    setAddress("");
    setProfession("");
    setPhone("");
    setSumV("");
    setAge("");
  };

  const idade = () => {
    let idadeAtual = document.getElementById("idade").innerText;
    console.log(idadeAtual);
    setAge(idadeAtual);
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
  return (
    <div>
      <h1>Doshas</h1>
      <h2>VATA</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idDoshas}
          onChange={e => setIdDoshas(e.target.value)}
          style={{ display: "none" }}
        />
        <label htmlFor="name">Nome</label>
        <input
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
        <div
          onChange={e => {
            setV1(e.target.value);
          }}
        >
          {/* PERGUNTAS */}
          <p>1. Executo minhas atividades muito rapidamente.</p>
          <span>não</span>
          <input type="radio" name="ativdades" value="1" />
          <label htmlFor="atividades">1</label>
          <input type="radio" name="ativdades" value="2" />
          <label htmlFor="atividades">2</label>
          <span>às vezes</span>
          <input type="radio" name="ativdades" value="3" />
          <label htmlFor="atividades">3</label>
          <input type="radio" name="ativdades" value="4" />
          <label htmlFor="atividades">4</label>
          <span>sim</span>
          <input type="radio" name="ativdades" value="5" />
          <label htmlFor="atividades">5</label>
          <input type="radio" name="ativdades" value="6" />
          <label htmlFor="atividades">6</label>
        </div>
        <div
          onChange={e => {
            setV2(e.target.value);
          }}
        >
          <p>
            2. Não sou bom em memorizar alguma coisa e lembrá-la mais tarde.
          </p>
          <span>não</span>
          <input type="radio" name="memoria" value="1" />
          <label htmlFor="memoria">1</label>
          <input type="radio" name="memoria" value="2" />
          <label htmlFor="memoria">2</label>
          <span>às vezes</span>
          <input type="radio" name="memoria" value="3" />
          <label htmlFor="memoria">3</label>
          <input type="radio" name="memoria" value="4" />
          <label htmlFor="memoria">4</label>
          <span>sim</span>
          <input type="radio" name="memoria" value="5" />
          <label htmlFor="memoria">5</label>
          <input type="radio" name="memoria" value="6" />
          <label htmlFor="memoria">6</label>
        </div>
        <div
          onChange={e => {
            setV3(e.target.value);
          }}
        >
          <p>3. Sou entusiasta por natureza.</p>
          <span>não</span>
          <input type="radio" name="natureza" value="1" />
          <label htmlFor="natureza">1</label>
          <input type="radio" name="natureza" value="2" />
          <label htmlFor="natureza">2</label>
          <span>às vezes</span>
          <input type="radio" name="natureza" value="3" />
          <label htmlFor="natureza">3</label>
          <input type="radio" name="natureza" value="4" />
          <label htmlFor="natureza">4</label>
          <span>sim</span>
          <input type="radio" name="natureza" value="5" />
          <label htmlFor="natureza">5</label>
          <input type="radio" name="natureza" value="6" />
          <label htmlFor="natureza">6</label>
        </div>
        <div
          onChange={e => {
            setV4(e.target.value);
          }}
        >
          <p>4. Meu tipo físico é magro. Não engordo facilmente.</p>
          <span>não</span>
          <input type="radio" name="fisico" value="1" />
          <label htmlFor="fisico">1</label>
          <input type="radio" name="fisico" value="2" />
          <label htmlFor="fisico">2</label>
          <span>às vezes</span>
          <input type="radio" name="fisico" value="3" />
          <label htmlFor="fisico">3</label>
          <input type="radio" name="fisico" value="4" />
          <label htmlFor="fisico">4</label>
          <span>sim</span>
          <input type="radio" name="fisico" value="5" />
          <label htmlFor="fisico">5</label>
          <input type="radio" name="fisico" value="6" />
          <label htmlFor="fisico">6</label>
        </div>
        <div
          onChange={e => {
            setV5(e.target.value);
          }}
        >
          <p>5. Sempre aprendi coisas rapidamente.</p>
          <span>não</span>
          <input type="radio" name="aprender" value="1" />
          <label htmlFor="aprender">1</label>
          <input type="radio" name="aprender" value="2" />
          <label htmlFor="aprender">2</label>
          <span>às vezes</span>
          <input type="radio" name="aprender" value="3" />
          <label htmlFor="aprender">3</label>
          <input type="radio" name="aprender" value="4" />
          <label htmlFor="aprender">4</label>
          <span>sim</span>
          <input type="radio" name="aprender" value="5" />
          <label htmlFor="aprender">5</label>
          <input type="radio" name="aprender" value="6" />
          <label htmlFor="aprender">6</label>
        </div>
        <div
          onChange={e => {
            setV6(e.target.value);
          }}
        >
          <p>6. Meu andar é rápido e leve.</p>
          <span>não</span>
          <input type="radio" name="andar" value="1" />
          <label htmlFor="andar">1</label>
          <input type="radio" name="andar" value="2" />
          <label htmlFor="andar">2</label>
          <span>às vezes</span>
          <input type="radio" name="andar" value="3" />
          <label htmlFor="andar">3</label>
          <input type="radio" name="andar" value="4" />
          <label htmlFor="andar">4</label>
          <span>sim</span>
          <input type="radio" name="andar" value="5" />
          <label htmlFor="andar">5</label>
          <input type="radio" name="andar" value="6" />
          <label htmlFor="andar">6</label>
        </div>
        <div
          onChange={e => {
            setV7(e.target.value);
          }}
        >
          <p>7. Minha tendência é ter dificuldades para tomar decisões.</p>
          <span>não</span>
          <input type="radio" name="decisoes" value="1" />
          <label htmlFor="decisoes">1</label>
          <input type="radio" name="decisoes" value="2" />
          <label htmlFor="decisoes">2</label>
          <span>às vezes</span>
          <input type="radio" name="decisoes" value="3" />
          <label htmlFor="decisoes">3</label>
          <input type="radio" name="decisoes" value="4" />
          <label htmlFor="decisoes">4</label>
          <span>sim</span>
          <input type="radio" name="decisoes" value="5" />
          <label htmlFor="decisoes">5</label>
          <input type="radio" name="decisoes" value="6" />
          <label htmlFor="decisoes">6</label>
        </div>
        <div
          onChange={e => {
            setV8(e.target.value);
          }}
        >
          <p>8. Tenho tendência a gases e prisão de ventre.</p>
          <span>não</span>
          <input type="radio" name="gases" value="1" />
          <label htmlFor="gases">1</label>
          <input type="radio" name="gases" value="2" />
          <label htmlFor="gases">2</label>
          <span>às vezes</span>
          <input type="radio" name="gases" value="3" />
          <label htmlFor="gases">3</label>
          <input type="radio" name="gases" value="4" />
          <label htmlFor="gases">4</label>
          <span>sim</span>
          <input type="radio" name="gases" value="5" />
          <label htmlFor="gases">5</label>
          <input type="radio" name="gases" value="6" />
          <label htmlFor="gases">6</label>
        </div>
        <div
          onChange={e => {
            setV9(e.target.value);
          }}
        >
          <p>9. Costumo ter as mãos e os pés frios.</p>
          <span>não</span>
          <input type="radio" name="pefrio" value="1" />
          <label htmlFor="pefrio">1</label>
          <input type="radio" name="pefrio" value="2" />
          <label htmlFor="pefrio">2</label>
          <span>às vezes</span>
          <input type="radio" name="pefrio" value="3" />
          <label htmlFor="pefrio">3</label>
          <input type="radio" name="pefrio" value="4" />
          <label htmlFor="pefrio">4</label>
          <span>sim</span>
          <input type="radio" name="pefrio" value="5" />
          <label htmlFor="pefrio">5</label>
          <input type="radio" name="pefrio" value="6" />
          <label htmlFor="pefrio">6</label>
        </div>
        <div
          onChange={e => {
            setV10(e.target.value);
          }}
        >
          <p>10. Fico ansioso e preocupado facilmente.</p>
          <span>não</span>
          <input type="radio" name="procupado" value="1" />
          <label htmlFor="procupado">1</label>
          <input type="radio" name="procupado" value="2" />
          <label htmlFor="procupado">2</label>
          <span>às vezes</span>
          <input type="radio" name="procupado" value="3" />
          <label htmlFor="procupado">3</label>
          <input type="radio" name="procupado" value="4" />
          <label htmlFor="procupado">4</label>
          <span>sim</span>
          <input type="radio" name="procupado" value="5" />
          <label htmlFor="procupado">5</label>
          <input type="radio" name="procupado" value="6" />
          <label htmlFor="procupado">6</label>
        </div>
        <div
          onChange={e => {
            setV11(e.target.value);
          }}
        >
          <p>11. Não tolero clima frio como a maioria das pessoas.</p>
          <span>não</span>
          <input type="radio" name="climafrio" value="1" />
          <label htmlFor="climafrio">1</label>
          <input type="radio" name="climafrio" value="2" />
          <label htmlFor="climafrio">2</label>
          <span>às vezes</span>
          <input type="radio" name="climafrio" value="3" />
          <label htmlFor="climafrio">3</label>
          <input type="radio" name="climafrio" value="4" />
          <label htmlFor="climafrio">4</label>
          <span>sim</span>
          <input type="radio" name="climafrio" value="5" />
          <label htmlFor="climafrio">5</label>
          <input type="radio" name="climafrio" value="6" />
          <label htmlFor="climafrio">6</label>
        </div>
        <div
          onChange={e => {
            setV12(e.target.value);
          }}
        >
          <p>12. Falo rápido e meus colegas pensam que falo muito.</p>
          <span>não</span>
          <input type="radio" name="falorapido" value="1" />
          <label htmlFor="falorapido">1</label>
          <input type="radio" name="falorapido" value="2" />
          <label htmlFor="falorapido">2</label>
          <span>às vezes</span>
          <input type="radio" name="falorapido" value="3" />
          <label htmlFor="falorapido">3</label>
          <input type="radio" name="falorapido" value="4" />
          <label htmlFor="falorapido">4</label>
          <span>sim</span>
          <input type="radio" name="falorapido" value="5" />
          <label htmlFor="falorapido">5</label>
          <input type="radio" name="falorapido" value="6" />
          <label htmlFor="falorapido">6</label>
        </div>
        <div
          onChange={e => {
            setV13(e.target.value);
          }}
        >
          <p>13. Mudo de temperamento facilmente e sou um tanto emocional.</p>
          <span>não</span>
          <input type="radio" name="emocional" value="1" />
          <label htmlFor="emocional">1</label>
          <input type="radio" name="emocional" value="2" />
          <label htmlFor="emocional">2</label>
          <span>às vezes</span>
          <input type="radio" name="emocional" value="3" />
          <label htmlFor="emocional">3</label>
          <input type="radio" name="emocional" value="4" />
          <label htmlFor="emocional">4</label>
          <span>sim</span>
          <input type="radio" name="emocional" value="5" />
          <label htmlFor="emocional">5</label>
          <input type="radio" name="emocional" value="6" />
          <label htmlFor="emocional">6</label>
        </div>
        <div
          onChange={e => {
            setV14(e.target.value);
          }}
        >
          <p>14. Custo a dormir ou a ter um sono profundo.</p>
          <span>não</span>
          <input type="radio" name="sonoprofundo" value="1" />
          <label htmlFor="sonoprofundo">1</label>
          <input type="radio" name="sonoprofundo" value="2" />
          <label htmlFor="sonoprofundo">2</label>
          <span>às vezes</span>
          <input type="radio" name="sonoprofundo" value="3" />
          <label htmlFor="sonoprofundo">3</label>
          <input type="radio" name="sonoprofundo" value="4" />
          <label htmlFor="sonoprofundo">4</label>
          <span>sim</span>
          <input type="radio" name="sonoprofundo" value="5" />
          <label htmlFor="sonoprofundo">5</label>
          <input type="radio" name="sonoprofundo" value="6" />
          <label htmlFor="sonoprofundo">6</label>
        </div>
        <div
          onChange={e => {
            setV15(e.target.value);
          }}
        >
          <p>15. Minha pele tende a ser seca, principalmente no inverno.</p>
          <span>não</span>
          <input type="radio" name="peleseca" value="1" />
          <label htmlFor="peleseca">1</label>
          <input type="radio" name="peleseca" value="2" />
          <label htmlFor="peleseca">2</label>
          <span>às vezes</span>
          <input type="radio" name="peleseca" value="3" />
          <label htmlFor="peleseca">3</label>
          <input type="radio" name="peleseca" value="4" />
          <label htmlFor="peleseca">4</label>
          <span>sim</span>
          <input type="radio" name="peleseca" value="5" />
          <label htmlFor="peleseca">5</label>
          <input type="radio" name="peleseca" value="6" />
          <label htmlFor="peleseca">6</label>
        </div>
        <div
          onChange={e => {
            setV16(e.target.value);
          }}
        >
          <p>
            16. Minha mente é muito ativa, às vezes um tanto inquieta, mas
            também imaginativa.
          </p>
          <span>não</span>
          <input type="radio" name="menteativa" value="1" />
          <label htmlFor="menteativa">1</label>
          <input type="radio" name="menteativa" value="2" />
          <label htmlFor="menteativa">2</label>
          <span>às vezes</span>
          <input type="radio" name="menteativa" value="3" />
          <label htmlFor="menteativa">3</label>
          <input type="radio" name="menteativa" value="4" />
          <label htmlFor="menteativa">4</label>
          <span>sim</span>
          <input type="radio" name="menteativa" value="5" />
          <label htmlFor="menteativa">5</label>
          <input type="radio" name="menteativa" value="6" />
          <label htmlFor="menteativa">6</label>
        </div>
        <div
          onChange={e => {
            setV17(e.target.value);
          }}
        >
          <p>
            17. Meus movimentos são rápidos e ativos; minha energia tende a vir
            explosivamente.
          </p>
          <span>não</span>
          <input type="radio" name="movimentorapido" value="1" />
          <label htmlFor="movimentorapido">1</label>
          <input type="radio" name="movimentorapido" value="2" />
          <label htmlFor="movimentorapido">2</label>
          <span>às vezes</span>
          <input type="radio" name="movimentorapido" value="3" />
          <label htmlFor="movimentorapido">3</label>
          <input type="radio" name="movimentorapido" value="4" />
          <label htmlFor="movimentorapido">4</label>
          <span>sim</span>
          <input type="radio" name="movimentorapido" value="5" />
          <label htmlFor="movimentorapido">5</label>
          <input type="radio" name="movimentorapido" value="6" />
          <label htmlFor="movimentorapido">6</label>
        </div>
        <div
          onChange={e => {
            setV18(e.target.value);
          }}
        >
          <p>18. Fico entusiasmado facilmente.</p>
          <span>não</span>
          <input type="radio" name="entusiasmo" value="1" />
          <label htmlFor="entusiasmo">1</label>
          <input type="radio" name="entusiasmo" value="2" />
          <label htmlFor="entusiasmo">2</label>
          <span>às vezes</span>
          <input type="radio" name="entusiasmo" value="3" />
          <label htmlFor="entusiasmo">3</label>
          <input type="radio" name="entusiasmo" value="4" />
          <label htmlFor="entusiasmo">4</label>
          <span>sim</span>
          <input type="radio" name="entusiasmo" value="5" />
          <label htmlFor="entusiasmo">5</label>
          <input type="radio" name="entusiasmo" value="6" />
          <label htmlFor="entusiasmo">6</label>
        </div>
        <div
          onChange={e => {
            setV19(e.target.value);
          }}
        >
          <p>
            19. Quando sozinho(a), meus hábitos de dormir e alimentares tendem a
            ser regulares.
          </p>
          <span>não</span>
          <input type="radio" name="habitoregular" value="1" />
          <label htmlFor="habitoregular">1</label>
          <input type="radio" name="habitoregular" value="2" />
          <label htmlFor="habitoregular">2</label>
          <span>às vezes</span>
          <input type="radio" name="habitoregular" value="3" />
          <label htmlFor="habitoregular">3</label>
          <input type="radio" name="habitoregular" value="4" />
          <label htmlFor="habitoregular">4</label>
          <span>sim</span>
          <input type="radio" name="habitoregular" value="5" />
          <label htmlFor="habitoregular">5</label>
          <input type="radio" name="habitoregular" value="6" />
          <label htmlFor="habitoregular">6</label>
        </div>
        <div
          onChange={e => {
            setV20(e.target.value);
          }}
        >
          <p>20. Aprendo rápido, mas também esqueço rápido.</p>
          <span>não</span>
          <input type="radio" name="aprenderrapido" value="1" />
          <label htmlFor="aprenderrapido">1</label>
          <input type="radio" name="aprenderrapido" value="2" />
          <label htmlFor="aprenderrapido">2</label>
          <span>às vezes</span>
          <input type="radio" name="aprenderrapido" value="3" />
          <label htmlFor="aprenderrapido">3</label>
          <input type="radio" name="aprenderrapido" value="4" />
          <label htmlFor="aprenderrapido">4</label>
          <span>sim</span>
          <input type="radio" name="aprenderrapido" value="5" />
          <label htmlFor="aprenderrapido">5</label>
          <input type="radio" name="aprenderrapido" value="6" />
          <label htmlFor="aprenderrapido">6</label>
        </div>
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
          <input type="number" value={sumV} placeholder="total vata" />
        </p>
        <p id="idade">idade: {getAge(birthday)}</p>
        <button type="submit">gravar</button>
      </form>
      <button onClick={showDoshas}>mostrar</button>
      <h2>dados doshas</h2>
      <ul>
        {doshasDados.map(dosha => {
          return (
            <li key={dosha.id}>
              <p>Nome: {dosha.nome}</p>
              <p>Nascimento: {dosha.nascimento}</p>
              <p>Idade: {dosha.idade}</p>
              <p>Endereço: {dosha.endereco}</p>
              <p>Profissão: {dosha.profissao}</p>
              <p>Vata: {dosha.vata}</p>
              <button
                onClick={() => (
                  setIdDoshas(dosha.id),
                  setName(dosha.nome),
                  setBirthday(dosha.nascimento),
                  setAge(dosha.idade),
                  setAddress(dosha.endereco),
                  setProfession(dosha.profissao),
                  setSumV(dosha.vata)
                )}
              >
                carregar
              </button>
              <button onClick={() => handleDelete(dosha.id)}>deletar</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Doshas;
