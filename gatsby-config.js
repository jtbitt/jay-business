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
    `https://js.sentry-cdn.com/37a0156551a747eaa3ba96a5060c886e.min.js`,
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
          "Access-Control-Allow-Origin: https://js.sentry-cdn.com/37a0156551a747eaa3ba96a5060c886e.min.js",
        ],
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
