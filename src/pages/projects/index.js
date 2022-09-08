import * as React from "react";
import { graphql } from "gatsby";

import { SEO, Layout, Project } from "@components";

const ProjectsPage = ({ data }) => {
  return (
    <Layout className="space-y-20">
      {data.allMdx.nodes.map((node, key) => (
        <Project
          image={node.frontmatter.hero_image}
          alt={node.frontmatter.hero_image_alt}
          title={node.frontmatter.title}
          subtitle={"lorem ipsum"}
          description={"lorem ipsum"}
          tools={["cool", "cool", "cool"]}
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
      filter: { fileAbsolutePath: { regex: "/projects/i" } }
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

export default ProjectsPage;

export const Head = () => (
  <SEO
    title="Projects | Jay Bittner"
    description="Check some of my favorite projects I've built with HTML, CSS, Javascript, and React"
  />
);
