import React from "react";
import Layout from "../../components/Layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../../components/SEO";
const Massagens = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
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
        description
      }
      id
      body
    }
  }
`;
export default Massagens;
