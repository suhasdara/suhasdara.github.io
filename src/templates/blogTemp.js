import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogTemplate({ data }) {
  const blog = data.markdownRemark;
  let date = new Date(blog.frontmatter.date);
  date = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Layout>
      <SEO title={blog.frontmatter.title} />
      <div className="pt-5">
        <h1 className="text-light mb-3">{blog.frontmatter.title}</h1>
        <h4 className="text-muted mb-3">
          <p className="my-0">
            <span className="d-inline-block">{date}</span>
          </p>
          <p className="my-0">
            <span className="d-inline-block">{blog.timeToRead} min. read</span>
          </p>
        </h4>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: blog.html }}
        />
      </div>
    </Layout>
  );
}

export const projectQuery = graphql`
  query BlogBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
