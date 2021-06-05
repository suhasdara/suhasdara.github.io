import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout hideFooter={true}>
      <SEO title="404: Not found" />
      <div className="pt-2 my-auto">
        <h1 className="mb-5 text-center">
          Page not found
        </h1>
        <h3 className="text-center">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          I don’t have what you were looking for.
          Do you know something I don't?
          <br />
          <Link to="/">Try again?</Link>
        </h3>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
