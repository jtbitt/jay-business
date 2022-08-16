import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Article from "@components/blog/article";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
