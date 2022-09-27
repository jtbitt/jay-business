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
                layout: CONSTRAINED
                formats: [AUTO, WEBP]
                quality: 100
                width: 610
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
