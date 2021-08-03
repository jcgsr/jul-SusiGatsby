import React from "react";
import Layout from "../../components/Layout.js";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Massagens = ({ data }) => {
	return (
		<Layout>
			<h1>{data.mdx.frontmatter.title}</h1>
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
