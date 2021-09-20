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
      <section className="amazon">
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07VNCWYQB&asins=B07VNCWYQB&linkId=386cf5e32f0f7fe46daebe0c2149ac8f&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B075V856H7&asins=B075V856H7&linkId=ab13daaeb79c19dd4d64800b6af109ba&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07JMNLS9N&asins=B07JMNLS9N&linkId=005346a3583417741560a3d9ee1cd83b&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
      <div className="about-card">
        <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <section className="amazon">
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B08XNQV4ZQ&asins=B08XNQV4ZQ&linkId=0e7f7b6867cf906e01da40cbc0a1adce&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07X7HVJ8K&asins=B07X7HVJ8K&linkId=f770e50847f6af79114547fca0107b56&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{ width: "120px", height: "240px", margin: "1rem auto" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07MGRB5VW&asins=B07MGRB5VW&linkId=3c05997bfa292b8e8bf6030a8c48d4a3&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
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
              width: 700
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
