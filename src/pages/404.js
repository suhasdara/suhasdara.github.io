import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout hideFooter={true}>
      <SEO title="404: Not found" />
      <h1 className="my-5" style={{maxWidth: 320}}>
        Page not found
      </h1>
      <p className="mb-5">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        I don’t have what you were looking for.
        Do you know something I don't?
        <br />
        <Link to="/">Try again?</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
