import React from "react";

import { Helmet } from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ title, description, image, url }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "pt-BR" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        {
          name: `keywords`,
          content:
            "Susi Pessôa, Aracaju, Massoterapeuta, Aromaterapia, Reiki, Massagem, Ventosas, Magnetoterapia, Auricoloterapia",
        },
        { name: `image`, content: image },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:url`, content: url },
        { property: `og:image`, content: image },
        { name: `twitter:card`, content: "summary_large_image" },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: image },
      ]}
    ></Helmet>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
        image
        url
      }
    }
  }
`;
export default SEO;
