import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectCard from "../components/projectCard";

export default function ProjectsPage({ data }) {
  const projects = data.allMdx.edges;

  return (
    <Layout active="projects">
      <Seo title="Projects" description="Suhas Dara's projects" />
      <div className="pt-5">
        <h1 className="text-center text-light">Projects</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center pt-3">
          {projects.map((project) => (
            <div key={project.node.id} className="p-2">
              <ProjectCard
                title={project.node.frontmatter.title}
                link={project.node.frontmatter.slug}
                startDates={project.node.frontmatter.startDates}
                endDates={project.node.frontmatter.endDates}
                imgSrc={project.node.frontmatter.image.childImageSharp.fluid.src}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const projectsQuery = graphql`
  query ProjectsIndexQuery {
    allMdx(
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
