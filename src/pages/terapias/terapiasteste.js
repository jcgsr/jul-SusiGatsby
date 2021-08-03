import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const Terapias = ({ data }) => {
	return (
		<Layout>
			{data.allMdx.nodes.map(node => (
				<article key={node.id}>
					<h2>{node.frontmatter.title}</h2>
					<p>Data: {node.frontmatter.date}</p>
					<MDXRenderer>{node.body}</MDXRenderer>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	{
		allMdx {
			nodes {
				frontmatter {
					title
					date
				}
				id
				body
			}
		}
	}
`;

export default Terapias;
