import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "calistus.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} 
  style={{borderRadius: '50%', border: '2px solid #1ab36b'}} />
}

export default Image
