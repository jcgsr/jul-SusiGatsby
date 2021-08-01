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
  ],
};
