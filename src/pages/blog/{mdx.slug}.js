import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Post } from "@components";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Post
        date={data.mdx.frontmatter.date}
        title={data.mdx.frontmatter.title}
        image={data.mdx.frontmatter.hero_image}
        alt={data.mdx.frontmatter.hero_image_alt}
        imageLink={data.mdx.frontmatter.here_image_credit_link}
        imageCredit={data.mdx.frontmatter.hero_image_credit_text}
        body={data.mdx.body}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
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

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title + " | Jay Bittner"}
    description={data.mdx.body}
  />
);
