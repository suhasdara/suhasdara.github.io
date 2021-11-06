import React from "react";
import { graphql } from "gatsby";

import BlogList from "../components/blogList";

export default function BlogPage({ data }) {
  return (
    <BlogList data={data} />
  );
}

export const blogsQuery = graphql`
  query BlogsIndexQuery {
    posts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { postType: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            excerptHtml
            miscTimeToRead
          }
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
