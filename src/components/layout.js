import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";
import Footer from "./footer";

import "./layout.css";

const Layout = ({ children }) => {

  const navLink = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          aboutLink,
          workLink,
          contactLink
        }
      }
    }
  `);

  return (
    <>
      <Navbar 
        about={navLink.site.siteMetadata.aboutLink}
        work={navLink.site.siteMetadata.workLink}
        contact={navLink.site.siteMetadata.contactLink}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
