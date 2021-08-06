import React from "react";

import { Helmet } from "react-helmet";
import img from "../../static/susiMain.png";
import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ title, description, image, siteUrl }) => {
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
        { name: `image`, content: { img } },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:siteUrl`, content: siteUrl },
        { property: `og:image`, content: { img } },
        { name: `twitter:card`, content: "summary_large_image" },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: { img } },
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
        siteUrl
      }
    }
  }
`;
export default SEO;
