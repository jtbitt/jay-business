import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const useImages = () => {
  const [images, setImages] = useState([]);
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "nomad" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const newImages = [...data.allFile.edges].map((img, i) =>
      getImage(img.node.childImageSharp)
    );
    setImages(newImages);
  }, [data]);

  return { images };
};
