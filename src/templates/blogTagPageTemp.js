import React from "react";
import { graphql } from "gatsby";

import BlogList from "../components/blogList";

export default function BlogTagPageTemp({ data, pageContext }) {
  let tag = pageContext.tag;
  let tagCapitalize = tag[0].toUpperCase() + tag.slice(1);
  return (
    <BlogList data={data} category={tagCapitalize} />
  );
}

export const blogsTagQuery = graphql`
  query BlogsByTagIndexQuery($tag: String!) {
    posts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { postType: { eq: "blog" }, tags: { in: [$tag] } } } 
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
