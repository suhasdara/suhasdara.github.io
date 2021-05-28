import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Heading404, Paragraph404 } from "../styles/pages/404.styles";

const NotFoundPage = () => {
  return (
    <Layout hideFooter={true}>
      <SEO title="404: Not found" />
      <Heading404>Page not found</Heading404>
      <Paragraph404>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        I don’t have what you were looking for.
        Do you know something I don't?
        <br />
        <Link to="/">Go home</Link>.
      </Paragraph404>
    </Layout>
  );
};

export default NotFoundPage;
