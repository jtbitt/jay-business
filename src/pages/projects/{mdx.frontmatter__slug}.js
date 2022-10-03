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
        description
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
              width: 1000
              quality: 100
            )
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

export const Head = ({ data: { mdx } }) => (
  <Seo
    title={mdx.frontmatter.title + " | Jay Bittner"}
    description={mdx.frontmatter.description}
    pathname={"/projects/" + mdx.frontmatter.title}
  />
);
