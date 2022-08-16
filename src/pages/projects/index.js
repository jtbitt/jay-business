import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Project from "@components/projects/project";

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
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
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;

export default ProjectsPage;
