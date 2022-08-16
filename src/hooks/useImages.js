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
    const newImages = {};

    [...data.allFile.nodes].forEach((img) => {
      newImages[img.relativeDirectory] = {
        ...newImages[img.relativeDirectory],
        [img.name]: getImage(img.childImageSharp),
      };
    });

    return newImages;
  };

  return cleanImages();
};
