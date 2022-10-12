import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Article } from "@components";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="space-y-20">
        {data.allMdx.nodes.map((node, key) => (
          <Article
            date={node.frontmatter.date}
            image={node.frontmatter.hero_image}
            alt={node.frontmatter.hero_image_alt}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
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
          description
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO, WEBP]
                width: 610
                quality: 100
              )
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
    description="Insights and experiences from a battle-tested Software Developer. Life has been a great adventure since I learned to code."
    pathname="/blog"
  />
);
