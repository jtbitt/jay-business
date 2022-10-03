Simport * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Project } from "@components";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <div className="space-y-20">
        {data.allMdx.nodes.map((node, key) => (
          <Project
            image={node.frontmatter.hero_image}
            alt={node.frontmatter.hero_image_alt}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            tools={node.frontmatter.tools}
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
      filter: { internal: { contentFilePath: { regex: "/projects/i" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          tools
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

export default ProjectsPage;

export const Head = () => (
  <Seo
    title="Projects | Jay Bittner"
    description="Check some of my favorite projects I've built with HTML, CSS, Javascript, and React"
    pathname="/projects"
  />
);
