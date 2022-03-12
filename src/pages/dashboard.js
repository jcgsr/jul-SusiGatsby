import React, { useState, useEffect } from "react";

import { navigate } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import Sinergia from "../components/Sinergia";
import Pacote from "../components/Pacote";
import Anamnese from "../components/Anamnese";
import Doshas from "../components/Doshas";
import Antigos from "../components/Antigos";

import firebase from "gatsby-plugin-firebase";

const Dashboard = ({ location, ...rest }) => {
	const user = firebase.auth().currentUser;

	// SHOW COMPONENTS
	const [showSinergias, setShowSinergias] = useState(false);
	const [showPacotes, setShowPacotes] = useState(false);
	const [showAnamnese, setShowAnamnese] = useState(false);
	const [showDoshas, setShowDoshas] = useState(false);
	const [showAntigos, setShowAntigos] = useState(false);

	const handleLogout = () => {
		firebase.auth().signOut();
		navigate("/");
	};
	useEffect(() => {
		if (!user && location.pathname !== `/`) {
			navigate("/");
			return null;
		}
	}, []);

	return (
		<Layout>
			<SEO title="Dashboard" description="Painel de Controle das terapias" />
			<main className="page">
				<div id="ola">
					<h2>olá, Susi!</h2>
				</div>
				<div className="login-btn">
					<button
						onClick={() => (
							setShowAnamnese(true),
							setShowSinergias(false),
							setShowPacotes(false),
							setShowDoshas(false),
							setShowAntigos(false)
						)}
					>
						anamnese
					</button>

					<button
						onClick={() => (
							setShowSinergias(false),
							setShowPacotes(true),
							setShowAnamnese(false),
							setShowDoshas(false),
							setShowAntigos(false)
						)}
					>
						pacotes
					</button>
					<button
						onClick={() => (
							setShowSinergias(true),
							setShowPacotes(false),
							setShowAnamnese(false),
							setShowDoshas(false),
							setShowAntigos(false)
						)}
					>
						sinergias
					</button>
					<button
						onClick={() => (
							setShowDoshas(true),
							setShowSinergias(false),
							setShowPacotes(false),
							setShowAnamnese(false),
							setShowAntigos(false)
						)}
					>
						doshas
					</button>
					<button
						onClick={() => (
							setShowAntigos(true),
							setShowDoshas(false),
							setShowSinergias(false),
							setShowPacotes(false),
							setShowAnamnese(false)
						)}
					>
						antigos
					</button>
				</div>

				{showSinergias && <Sinergia />}
				{showPacotes && <Pacote />}
				{showAnamnese && <Anamnese />}
				{showDoshas && <Doshas />}
				{showAntigos && <Antigos />}
				<div className="btn-anamnese">
					<button id="btn-logout" onClick={handleLogout}>
						sair
					</button>
				</div>
			</main>
		</Layout>
	);
};
export default Dashboard;
