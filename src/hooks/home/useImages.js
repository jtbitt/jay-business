import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const useImages = () => {
  const data = useStaticQuery(
    graphql`
      query ImageQuery {
        allFile(filter: { sourceInstanceName: { eq: "home-images" } }) {
          nodes {
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
            }
          }
        }
      }
    `
  );

  const cleanImages = () => {
    const images = {};

    [...data.allFile.nodes].forEach((img) => {
      images[img.relativeDirectory] = {
        ...images[img.relativeDirectory],
        [img.name]: getImage(img),
      };
    });

    return images;
  };

  return cleanImages();
};
