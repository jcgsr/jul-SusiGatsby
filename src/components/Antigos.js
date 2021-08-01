import React, { useState } from "react";

// import firebase from "firebase";

import AnamneseAntiga from "./antigos/anamneseAntiga";
import Arquivo from "./antigos/arquivo";
import DoshaAntigo from "./antigos/doshaAntiga";
import PacoteAntigo from "./antigos/pacoteAntigo";
import SinergiaAntiga from "./antigos/sinergiaAntiga";

const Antigos = () => {
  // const [anamnese, setAnamnese] = useState([]);
  const [showAnamnese, setShowAnamnese] = useState(false);
  const [showDosha, setShowDosha] = useState(false);
  const [showPacote, setShowPacote] = useState(false);
  const [showSinergia, setShowSinergia] = useState(false);
  const [showArquivo, setShowArquivo] = useState(false);

  return (
    <div>
      <h1>Antigos</h1>
      <div className="btn-anamnese">
        <button
          onClick={() => (
            setShowAnamnese(!showAnamnese),
            setShowDosha(false),
            setShowPacote(false),
            setShowSinergia(false),
            setShowArquivo(false)
          )}
        >
          anamnese antiga
        </button>
        <button
          onClick={() => (
            setShowAnamnese(false),
            setShowDosha(!showDosha),
            setShowPacote(false),
            setShowSinergia(false),
            setShowArquivo(false)
          )}
        >
          dosha antigo
        </button>
        <button
          onClick={() => (
            setShowAnamnese(false),
            setShowDosha(false),
            setShowPacote(!showPacote),
            setShowSinergia(false),
            setShowArquivo(false)
          )}
        >
          pacote antigo
        </button>
        <button
          onClick={() => (
            setShowAnamnese(false),
            setShowDosha(false),
            setShowPacote(false),
            setShowSinergia(!showSinergia),
            setShowArquivo(false)
          )}
        >
          sinergia antiga
        </button>
        <button
          onClick={() => (
            setShowAnamnese(false),
            setShowDosha(false),
            setShowPacote(false),
            setShowSinergia(false),
            setShowArquivo(!showArquivo)
          )}
        >
          arquivo antigo
        </button>

        {showAnamnese && <AnamneseAntiga />}
        {showDosha && <DoshaAntigo />}
        {showPacote && <PacoteAntigo />}
        {showSinergia && <SinergiaAntiga />}
        {showArquivo && <Arquivo />}
      </div>
    </div>
  );
};

export default Antigos;
