import React from "react";
import Layout from "../../components/Layout.js";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { StaticImage } from "gatsby-plugin-image";

const Massagens = ({ data }) => {
	return (
		<Layout>
			<h1>{data.mdx.frontmatter.title}</h1>
			<StaticImage
				id={data.mdx.id}
				src="../assets/images/susi.jpg"
				alt="Foto de Reiki"
				layout="constrained"
				placeholder="blurred"
			/>
			<div className="about-card">
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query MyQuery($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
			id
			body
		}
	}
`;
export default Massagens;
