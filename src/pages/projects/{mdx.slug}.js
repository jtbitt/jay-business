import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Analysis } from "@components";

const ProjectPost = ({ data }) => {
  return (
    <Layout>
      <Analysis
        date={data.mdx.frontmatter.date}
        title={data.mdx.frontmatter.title}
        image={data.mdx.frontmatter.hero_image}
        alt={data.mdx.frontmatter.hero_image_alt}
        designCredit={data.mdx.frontmatter.design_credit_text}
        designLink={data.mdx.frontmatter.design_credit_link}
        githubLink={data.mdx.frontmatter.github_link}
        projectLink={data.mdx.frontmatter.project_link}
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
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
        design_credit_text
        design_credit_link
        github_link
        project_link
      }
    }
  }
`;

export default ProjectPost;

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title + " | Jay Bittner"}
    description={data.mdx.body}
    pathname={"/projects/" + data.mdx.frontmatter.title}
  />
);
