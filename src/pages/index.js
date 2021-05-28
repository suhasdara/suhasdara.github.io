import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout hideFooter={true}>
      <SEO title="Home" />
    </Layout>
  );
};

export default IndexPage;
