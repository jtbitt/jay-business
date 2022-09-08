module.exports = {
  siteMetadata: {
    title: `Front-End Developer | Jay Bittner`,
    description: `Stop searching endlessly for a solid contributor, elevate your projects with a seasoned Front-End Developer - React, CSS, HTML, and JS done right.`,
    siteUrl: `https://www.jaybittner.com`,
    image: `/logo.png`,
    twitterUsername: `@jtbitt`,
  },
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
        description: `Stop searching endlessly for a solid contributor, elevate your projects with a seasoned Front-End Developer - React, CSS, HTML, and JS done right.`,
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
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
