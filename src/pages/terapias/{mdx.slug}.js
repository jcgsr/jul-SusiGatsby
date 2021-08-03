import React from "react";
import Layout from "../../components/Layout.js";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Massagens = ({ data }) => {
	return (
		<Layout>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	);
};

export const query = graphql`
	query MyQuery($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
			body
		}
	}
`;
export default Massagens;
