import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";

export default function BlogTemplate({ data }) {
  const blog = data.mdx;
  let date = new Date(blog.frontmatter.date);
  date = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  let timeToRead = Math.ceil(blog.timeToRead * 1.25) //I'm a slow reader

  return (
    <Layout backLink="/blogs">
      <SEO title={blog.frontmatter.title} />
      <div className="pt-md-5 pt-3">
        <h1 className="text-light mb-3">{blog.frontmatter.title}</h1>
        <h4 className="text-muted mb-3">
          <p className="my-0">
            <span className="d-inline-block">{date}</span>
          </p>
          <p className="my-0">
            <span className="d-inline-block">{timeToRead} min. read</span>
          </p>
        </h4>
        <Content className="mt-4">{blog.body}</Content>
      </div>
    </Layout>
  );
}

export const projectQuery = graphql`
  query BlogBySlug($path: String!) {
    mdx(frontmatter: { slug: { eq: $path } }) {
      body
      timeToRead
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
