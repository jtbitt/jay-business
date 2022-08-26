import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const useImages = () => {
  const data = useStaticQuery(
    graphql`
      query ImageQuery {
        allFile(filter: { relativeDirectory: { regex: "/home/i" } }) {
          nodes {
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
                quality: 90
              )
            }
          }
        }
      }
    `
  );

  const cleanImages = () => {
    const images = {};

    [...data.allFile.nodes].forEach((img) => {
      const relativeDirectory = img.relativeDirectory.replace("home/", "");
      images[relativeDirectory] = {
        ...images[relativeDirectory],
        [img.name]: getImage(img),
      };
    });

    return images;
  };

  return cleanImages();
};
