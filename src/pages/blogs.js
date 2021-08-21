import React from "react";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogRow from "../components/blogRow";

export default function BlogPage({ data }) {
  const blogs = data.allMdx.edges;

  return (
    <Layout active="blogs">
      <SEO title="Blogs" />
      <div className="pt-5">
        <h1 className="text-center text-light">Blogs</h1>
        <Container className="pt-3">
          {blogs.map((project) => (
            <BlogRow
              key={project.node.id}
              title={project.node.frontmatter.title}
              date={project.node.frontmatter.date}
              link={project.node.frontmatter.slug}
              excerpt={project.node.fields.excerpt}
              timeToRead={Math.ceil(project.node.timeToRead * 1.25)} //I'm a slow reader
            />
          ))}
        </Container>
      </div>
    </Layout>
  );
}

export const blogsQuery = graphql`
  query BlogsIndexQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { postType: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            excerpt
          }
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;
