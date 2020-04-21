import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageHolder = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "calistus.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 125, maxHeight: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid}
   style={{borderRadius: '50%', border: '2px solid #1ab36b'}} />
}

export default ImageHolder;
