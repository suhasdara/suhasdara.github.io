import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ProjectTemplate({ data }) {
  const project = data.markdownRemark;

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
    </Layout>
  );
};

export const projectQuery = graphql`
  query ProjectBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        tags
        languages
        tools
        slug
      }
    }
  }
`;
