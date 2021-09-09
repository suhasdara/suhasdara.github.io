import React from "react";
import { Badge } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DateRange from "../components/dateRange";
import ModalImage from "../components/modalImage";
import Content from "../components/content";

export default function ProjectTemplate({ data }) {
  const project = data.mdx;

  return (
    <Layout backLink="/projects/">
      <Seo
        title={project.frontmatter.title}
        description={project.fields.excerpt}
      />
      <div className="pt-md-5 pt-3">
        <h1 className="text-light mb-3">{project.frontmatter.title}</h1>
        <h4 className="text-muted mb-3">
          <DateRange
            startDates={project.frontmatter.startDates}
            endDates={project.frontmatter.endDates}
          />
        </h4>
        {project.frontmatter.team && (
          <div className="mb-1">
            <p className="d-flex flex-wrap align-items-center mb-0">
              <strong>Team members:</strong>&nbsp;{project.frontmatter.team.join(", ")}
            </p>
          </div>
        )}
        {project.frontmatter.languages && (
          <div className="mb-1">
            <p className="d-flex flex-wrap align-items-center mb-0">
              <strong>Languages used:</strong>&nbsp;
              {project.frontmatter.languages.map((l, i) => (
                <span key={i}>
                  <Badge pill variant="light">
                    {l}
                  </Badge>
                  &nbsp;
                </span>
              ))}
            </p>
          </div>
        )}
        {project.frontmatter.tools && (
          <div className="mb-1">
            <p className="d-flex flex-wrap align-items-center mb-0">
              <strong>Tools used:</strong>&nbsp;
              {project.frontmatter.tools.map((t, i) => (
                <span key={i}>
                  <Badge pill variant="light">
                    {t}
                  </Badge>
                  &nbsp;
                </span>
              ))}
            </p>
          </div>
        )}
        {project.frontmatter.repository && (
          <div className="mb-1">
            <p className="mb-0">
              <a
                href={project.frontmatter.repository}
                rel="noopener noreferrer"
                target="_blank"
              >
                Link to Repository
              </a>
            </p>
          </div>
        )}
        {project.frontmatter.paperSlug && (
          <div className="mb-1">
            <p className="mb-0">
              <a
                href={project.frontmatter.paperSlug}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read the Research Paper
              </a>
              &nbsp;(unpublished)
            </p>
          </div>
        )}
        {project.frontmatter.projectLink && (
          <div className="mb-1">
            <p className="mb-0">
              <a
                href={project.frontmatter.projectLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Live Website
              </a>
            </p>
          </div>
        )}
        {project.frontmatter.demoLink && (
          <div className="mb-1">
            <p className="mb-0">
              <a
                href={project.frontmatter.demoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Demo
              </a>
            </p>
          </div>
        )}
        <div className="my-1 text-center">
          <ModalImage
            src={project.frontmatter.image.childImageSharp.fluid.src}
            alt={project.frontmatter.title}
            title={project.frontmatter.title}
            height={300}
          />
        </div>
        <Content className="mt-4">{project.body}</Content>
      </div>
    </Layout>
  );
}

export const projectQuery = graphql`
  query ProjectBySlug($path: String!) {
    mdx(frontmatter: { slug: { eq: $path } }) {
      body
      fields {
        excerpt
      }
      frontmatter {
        title
        startDates
        endDates
        team
        languages
        tools
        slug
        repository
        paperSlug
        projectLink
        demoLink
        image {
          childImageSharp {
            fluid(maxWidth: 1300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
