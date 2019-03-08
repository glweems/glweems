import React from "react";
import { Link } from "gatsby";
import { Avitar } from "../components/small-components";
import Layout from "../components/layout";
import Hello from "../components/hello";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hello />
    <Avitar />
  </Layout>
);

export default IndexPage;
