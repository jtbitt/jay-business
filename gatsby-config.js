module.exports = {
  siteMetadata: {
    title: `Front-End Developer | Jay Bittner`,
    description: `Accelerate your projects with a seasoned Front-End Developer - React, CSS, HTML, and JS done right.`,
    siteUrl: `https://www.jaybittner.com`,
    twitterUsername: `@jtbitt`,
  },
  partytownProxiedURLs: [
    `https://static.hotjar.com/c/hotjar-3170670.js?sv=6`,
    `https://vars.hotjar.com/box-69edcc3187336f9b0a3fbb4c73be9fe6.html`,
  ],
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jay Bittner | Front-End Developer`,
        short_name: `Jay Bittner`,
        description: `Accelerate your projects with a seasoned Front-End Developer - React, CSS, HTML, and JS done right.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/services/`, `/projects/*`, `/blog/*`],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          "Access-Control-Allow-Origin: https://static.hotjar.com/c/hotjar-3170670.js?sv=6",
          "Access-Control-Allow-Origin: https://vars.hotjar.com/box-69edcc3187336f9b0a3fbb4c73be9fe6.html",
        ],
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
