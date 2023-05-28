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
    titleTemplate: "%s | Susi Pessôa",
    description: "Site de Susi Pessôa - Terapeuta Holística",
    url: "https://www.susipessoa.com.br",
    image: `/images/susi.jpg`,
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
    //`gatsby-plugin-sitemap`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
    {
      resolve: `@w2-yamaguchi/gatsby-plugin-google-adsense`,
      options: {
        publisherId: "ca-pub-2008019372085379", // Required
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#b39ddb`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VG2BBY9L1E", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: "G-VG2BBY9L1E", // leave empty if you want to disable the tracker
    //       cookieName: "gatsby-gdpr-google-analytics", // default
    //       anonymize: true, // default
    //       allowAdFeatures: false, // default
    //     },
    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ["production", "development"],
    //   },
    // },
  ],
};
