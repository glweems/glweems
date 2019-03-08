import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Hello from "../components/hello";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hello />
    <Image />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
