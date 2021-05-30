import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ExperienceTemplate({ data }) {
  const experience = data.markdownRemark;

  return (
    <Layout>
      <SEO title={experience.frontmatter.title} />
    </Layout>
  );
};

export const experienceQuery = graphql`
  query ExperienceBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        startDate
        endDate
        tags
        languages
        tools
        slug
      }
    }
  }
`;
