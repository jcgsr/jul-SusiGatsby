/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Susi Pessôa",
    description: "Site de Susi Pessôa - Terapeuta Holística",
    url: "https://www.susipessoa.com.br",
    image: `/susiMain.png`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    // Needed for dynamic images
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_PUBLIC_FIREBASE_API_KEY,
          authDomain: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}firebaseapp.com`,
          databaseURL: `https://${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,

          projectId: process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID,

          storageBucket: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
          messagingSenderId: "309172066111",
          appId: "1:309172066111:web:c31f3c2465c15c50a7a58a",
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `terapias`,
        path: `${__dirname}/terapias-mdx`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lora\:400;400i,700`, `noticia text\:400;700 `],
        display: "swap",
      },
    },
  ],
};
