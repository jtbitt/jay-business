import * as React from "react";
import { graphql } from "gatsby";

import { Seo, Layout, Analysis } from "@components";

const ProjectPost = ({ data: { mdx }, children }) => {
  return (
    <Layout>
      <Analysis
        date={mdx.frontmatter.date}
        title={mdx.frontmatter.title}
        image={mdx.frontmatter.hero_image}
        alt={mdx.frontmatter.hero_image_alt}
        designCredit={mdx.frontmatter.design_credit_text}
        designLink={mdx.frontmatter.design_credit_link}
        githubLink={mdx.frontmatter.github_link}
        projectLink={mdx.frontmatter.project_link}
        children={children}
      ></Analysis>
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
