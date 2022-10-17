import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Seo, Layout, Post, Analysis } from "@components";

const BlogPost = ({ data: { mdx }, children }) => {
  console.log(mdx);
  return (
    <Layout>
      {mdx.frontmatter.type === "blog" && (
        <Post
          date={mdx.frontmatter.date}
          title={mdx.frontmatter.title}
          image={mdx.frontmatter.hero_image}
          alt={mdx.frontmatter.hero_image_alt}
          imageLink={mdx.frontmatter.hero_image_credit_link}
          imageCredit={mdx.frontmatter.hero_image_credit_text}
          children={children}
        />
      )}
      {mdx.frontmatter.type === "projects" && (
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
      )}
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
        type
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
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

export default BlogPost;

export const Head = ({ data: { mdx } }) => (
  <Seo
    title={mdx.frontmatter.title}
    description={mdx.frontmatter.description}
    pathname={"/" + mdx.frontmatter.type + "/" + mdx.frontmatter.slug}
  >
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.jaybittner.com/${mdx.frontmatter.type}/${
        mdx.frontmatter.slug
      }"
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
              "url": "https://www.jaybittner.com/logo.png"
            }
          },
          "datePublished": "${mdx.frontmatter.date}"
        }
      `}
    </script>
  </Seo>
);
