import React from "react";
import Layout from "../../components/Layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SEO from "../../components/SEO";
const Massagens = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <h1>{data.mdx.frontmatter.title}</h1>
      <div className="about-card">
        <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
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
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              height: 300
              width: 500
            )
          }
        }
      }
      id
      body
    }
  }
`;
export default Massagens;
