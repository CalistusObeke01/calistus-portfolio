import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro";
import About from '../components/about';
import Social from "../components/social";
import Work from "../components/work";

const IndexPage = () => (
  <Layout>
    <SEO title="Obeke Calistus" />
    <Intro />
    <div className="social-index">
      <Social />
    </div>
    <About />
    <Work />
  </Layout>
)

export default IndexPage
