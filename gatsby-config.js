const siteUrl = process.env.URL || `https://jaybittner.com`;

module.exports = {
  siteMetadata: {
    title: `Front-End Developer | Jay Bittner`,
    description: `I'm always interested in collaborating on ambitious projects, helping other developers, and consulting with tech companies and startups.`,
    siteUrl: `https://jaybittner.com`,
    twitterUsername: `@jtbitt`,
  },
  trailingSlash: "always",
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              showCaptions: true,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jay Bittner | Front-End Developer`,
        short_name: `Jay Bittner`,
        description: `I'm always interested in collaborating on ambitious projects, helping other developers, and consulting with tech companies and startups.`,
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
            {
              allSitePage {
                nodes {
                  path
                }
              }
            }
          `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
