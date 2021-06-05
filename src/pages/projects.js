import React from "react";
import { CardDeck } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/projectCard";

export default function ProjectsPage({ data }) {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout active="projects">
      <SEO title="Projects" />
      <div className="pt-5">
        <h1 className="text-center text-light">Projects</h1>
        <CardDeck className="d-flex flex-row flex-wrap justify-content-center pt-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.node.id}
              title={project.node.frontmatter.title}
              link={project.node.frontmatter.slug}
              startDates={project.node.frontmatter.startDates}
              endDates={project.node.frontmatter.endDates}
              imgSrc={project.node.frontmatter.image.childImageSharp.fluid.src}
            />
          ))}
        </CardDeck>
      </div>
    </Layout>
  );
}

export const projectsQuery = graphql`
  query ProjectsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___endDates }
      filter: { frontmatter: { postType: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
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
