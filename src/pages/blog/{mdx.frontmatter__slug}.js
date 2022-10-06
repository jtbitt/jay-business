import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Seo, Layout, Post } from "@components";

const BlogPost = ({ data: { mdx }, children }) => {
  return (
    <Layout>
      <Post
        date={mdx.frontmatter.date}
        title={mdx.frontmatter.title}
        image={mdx.frontmatter.hero_image}
        alt={mdx.frontmatter.hero_image_alt}
        imageLink={mdx.frontmatter.hero_image_credit_link}
        imageCredit={mdx.frontmatter.hero_image_credit_text}
        children={children}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        slug
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

export default BlogPost;

export const Head = ({ data: { mdx } }) => (
  <Seo
    title={mdx.frontmatter.title + " | Jay Bittner"}
    description={mdx.frontmatter.description}
    pathname={"/blog/" + mdx.frontmatter.slug}
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
              "url": "https://www.jaybittner.com/logo.png"
            }
          },
          "datePublished": "${mdx.frontmatter.date}"
        }
      `}
    </script>
  </Seo>
);
