import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const imageData = {
  start: {},
  about: {},
  nomad: {},
  projects: {},
  services: {},
  connect: {},
};

export const useImages = () => {
  const [images, setImages] = useState({ ...imageData });
  const data = useStaticQuery(graphql`
    query MyQuery {
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
  `);

  useEffect(() => {
    const newImages = {};

    [...data.allFile.nodes].forEach((img) => {
      newImages[img.relativeDirectory] = {
        ...newImages[img.relativeDirectory],
        [img.name]: getImage(img.childImageSharp),
      };
    });

    setImages(newImages);
  }, [data]);

  return { images };
};
