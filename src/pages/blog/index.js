import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "@components/heading";
import Button from "@components/button";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node, key) => (
        <article
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          key={key}
        >
          <GatsbyImage
            image={getImage(node.frontmatter.hero_image)}
            alt={node.frontmatter.hero_image_alt}
          />
          <div className="space-y-6 md:space-y-8">
            <Heading type="h2">{node.frontmatter.title}</Heading>
            <div className="space-y-2">
              <Heading type="h5" basicFont="true">
                Lorem ipsum dolor sit amet consectet adipiscing elit iaculis.
                Lorem ipsum.
              </Heading>
              <p className="text-sm md:text-base font-light tracking-widest">
                Lorem ipsum dolor sit amet consectet adipiscing elit iaculis.
                Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis.
                Lorem ipsum dolor sit.
              </p>
            </div>
            <div className="text-center md:text-left">
              <Link to={`/blog/${node.slug}`}>
                <Button name="READ IT"></Button>
              </Link>
            </div>
          </div>
        </article>
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
