import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Article } from "@components";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="space-y-20">
        {data.allMdx.nodes.map((node, key) => (
          <Article
            image={node.frontmatter.hero_image}
            alt={node.frontmatter.hero_image_alt}
            title={node.frontmatter.title}
            slug={node.frontmatter.slug}
            key={key}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/blog/i" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => (
  <Seo
    title="Blog | Jay Bittner"
    description="Read about the modern Frontend world - I write guides, share insights, and explain some of my experiences"
    pathname="/blog"
  />
);
