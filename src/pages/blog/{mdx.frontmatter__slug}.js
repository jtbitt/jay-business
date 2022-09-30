import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Post } from "@components";

const BlogPost = ({ data: { mdx }, children }) => {
  return (
    <Layout>
      <Post
        date={mdx.frontmatter.date}
        title={mdx.frontmatter.title}
        image={mdx.frontmatter.hero_image}
        alt={mdx.frontmatter.hero_image_alt}
        imageLink={mdx.frontmatter.here_image_credit_link}
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
    pathname={"/blog/" + data.mdx.frontmatter.title}
  />
);
