import React from "react";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ExperienceRow from "../components/experienceRow";

export default function ExperiencePage({ data }) {
  const experiences = data.allMarkdownRemark.edges;

  return (
    <Layout active="experience">
      <SEO title="Experience" />
      <div className="pt-5">
        <h1 className="text-center text-light">Experience</h1>
        <Container className="pt-3">
          {experiences.map((project) => (
            <ExperienceRow
              key={project.node.id}
              title={project.node.frontmatter.title}
              company={project.node.frontmatter.company}
              link={project.node.frontmatter.slug}
              startDates={project.node.frontmatter.startDates}
              endDates={project.node.frontmatter.endDates}
              imgSrc={project.node.frontmatter.image.childImageSharp.fluid.src}
            />
          ))}
        </Container>
      </div>
    </Layout>
  );
};

export const experiencesQuery = graphql`
  query ExperienceIndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___endDates}
      filter: {frontmatter: {postType: {eq: "experience"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            company
            slug
            startDates
            endDates
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
