import React from "react"
import { Badge } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DateRange from "../components/dateRange";
import ModalImage from "../components/modalImage";

export default function ProjectTemplate({ data }) {
  const project = data.markdownRemark;

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <div className="pt-5">
        <h1 className="text-light mb-3">
          {project.frontmatter.title}
        </h1>
        <h4 className="text-muted small mb-3">
          <DateRange
            startDates={project.frontmatter.startDates}
            endDates={project.frontmatter.endDates}
          />
        </h4>
        {project.frontmatter.languages && (
          <div className="mb-1">
            <p className="d-flex align-items-center mb-0">
              Languages used:&nbsp;
              {project.frontmatter.languages.map((l, i) => (
                <span key={i}>
                  <Badge pill variant="light">{l}</Badge>
                  &nbsp;
                </span>
              ))}
            </p>
          </div>
        )}
        {project.frontmatter.tools && (
          <div className="mb-1">
            <p className="d-flex align-items-center mb-0">
              Tools used:&nbsp;
              {project.frontmatter.tools.map((t, i) => (
                <span key={i}>
                  <Badge pill variant="light">{t}</Badge>
                  &nbsp;
                </span>
              ))}
            </p>
          </div>
        )}
        <div className="mb-2">
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
        <div className="mb-1 text-center">
          <ModalImage
            src={project.frontmatter.image.childImageSharp.fluid.src}
            alt={project.frontmatter.title}
            height={300}
          />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{__html: project.html}}
        />
      </div>
    </Layout>
  );
};

export const projectQuery = graphql`
  query ProjectBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        startDates
        endDates
        languages
        tools
        slug
        repository
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
`;
