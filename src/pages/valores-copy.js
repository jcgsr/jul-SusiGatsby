import React, { useState } from "react";
import Layout from "../components/Layout";

import SEO from "../components/SEO";
import prices from "../constants/prices";

import terapias from "../constants/prices"

const Valores = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Layout>
      <SEO
        title="Valores"
        description="Página informativa sobre os valores cobrados em cada terapia"
      />
      <h1>Valores*</h1>
      {/*<div className="price-container">*/}{" "}
      <section className="amazon">
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B082G3CT1K&asins=B082G3CT1K&linkId=521af61bb93393f6278853973498dfda&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B087Y36J2C&asins=B087Y36J2C&linkId=52b53543258c70340162fbb0c3fa6263&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07VCB6CRK&asins=B07VCB6CRK&linkId=46a6a1a3cd662c122809b43b11c3ea2a&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
      <section className="prices">
        {prices.map(price => {
          const { id, title, m1, m2, p1, p2, p3, p4, includes } = price;
          return (
            <article key={id} className="price">
              <div className="">
                <h3>
                  <strong>{title}</strong>
                </h3>
                <p className="padrao">Padrão</p>
                <p>{m1}</p>
                <p className="price-value">{p1}</p>
                <p>{m2}</p>
                <p className="price-value">{p2}</p>

                <hr />

                <p className="casa">Em Domicílio</p>
                <p>{m1}</p>
                <p className="price-value">{p3}</p>
                <p>{m2}</p>
                <p className="price-value">{p4}</p>
                <hr />
                <div className="includes">
                  <p>
                    {readMore ? includes : `${includes.substring(0, 50)}...`}
                  </p>
                  {includes.length > 0 ? (
                    <button onClick={() => setReadMore(!readMore)}>
                      {readMore ? "mostrar menos" : "mostrar mais"}
                    </button>
                  ) : (
                    <button style={{ display: "none" }}></button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <p id="price-message">*Todos os valores com preço de à vista.</p>
      {/*</div>*/}
      <section className="amazon">
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B08WRJCJRJ&asins=B08WRJCJRJ&linkId=f400ee3a90ec980fa1072401dfa04c42&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B08P7NQC6Y&asins=B08P7NQC6Y&linkId=6a3ea1feca548c5e4efa9f351322032a&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
        <iframe
          style={{
            width: "120px",
            height: "240px",
            textAlign: "center",
            margin: "0 auto",
          }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B077BY7H35&asins=B077BY7H35&linkId=5b3a2202f8d4c894117170cc1c3ff5f2&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Valores;
