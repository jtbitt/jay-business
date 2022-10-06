import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Seo, Layout, Analysis } from "@components";

const ProjectPost = ({ data: { mdx }, children }) => {
  return (
    <Layout>
      <Analysis
        date={mdx.frontmatter.date}
        title={mdx.frontmatter.title}
        shortTitle={mdx.frontmatter.short_title}
        image={mdx.frontmatter.hero_image}
        alt={mdx.frontmatter.hero_image_alt}
        designCredit={mdx.frontmatter.design_credit_text}
        designLink={mdx.frontmatter.design_credit_link}
        githubLink={mdx.frontmatter.github_link}
        children={children}
      ></Analysis>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        short_title
        description
        slug
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
              width: 1000
              quality: 100
            )
          }
        }
        design_credit_text
        design_credit_link
        github_link
      }
    }
  }
`;

export default ProjectPost;

export const Head = ({ data: { mdx } }) => (
  <Seo
    title={mdx.frontmatter.title + " | Jay Bittner"}
    description={mdx.frontmatter.description}
    pathname={"/projects/" + mdx.frontmatter.slug}
  >
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.jaybittner.com/projects/${mdx.frontmatter.slug}"
          },
          "headline": "${mdx.frontmatter.title}",
          "image": "https://www.jaybittner.com${
            getImage(mdx.frontmatter.hero_image).images.fallback.src
          }",
          "author": {
            "@type": "Person",
            "name": "Jay Bittner",
            "url": "https://www.jaybittner.com"
          },  
          "publisher": {
            "@type": "Organization",
            "name": "Jay Bittner",
            "logo": {
              "@type": "ImageObject",
              "url": "${"/logo.png"}"
            }
          },
          "datePublished": "${mdx.frontmatter.date}"
        }
      `}
    </script>
  </Seo>
);
