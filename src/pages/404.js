import React from "react";
import Layout from "../components/Layout";

import { Link } from "gatsby";

const ErrorPage = () => {
	return (
		<Layout>
			<main className="error-page">
				<section>
					<h1>404</h1>
					<h3>Essa página não existe</h3>
					<Link className="btn" to="/">
						Início
					</Link>
				</section>
			</main>
		</Layout>
	);
};

export default ErrorPage;
