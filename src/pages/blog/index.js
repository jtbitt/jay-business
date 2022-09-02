import * as React from "react";
import { graphql } from "gatsby";

import { Layout, Article } from "@components";

const BlogPage = ({ data }) => {
  return (
    <Layout className="space-y-20">
      {data.allMdx.nodes.map((node, key) => (
        <Article
          image={node.frontmatter.hero_image}
          alt={node.frontmatter.hero_image_alt}
          title={node.frontmatter.title}
          slug={node.slug}
          key={key}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/i" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
            }
          }
        }
        slug
      }
    }
  }
`;

export default BlogPage;
