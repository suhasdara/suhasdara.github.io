import React from "react";
import { Badge } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DateRange from "../components/dateRange";
import Content from "../components/content";

export default function ExperienceTemplate({ data }) {
  const experience = data.mdx;

  return (
    <Layout backLink="/experience/">
      <Seo
        title={experience.frontmatter.title}
        description={experience.fields.excerpt}
      />
      <div className="pt-md-5 pt-3">
        <h1 className="text-light mb-3">{experience.frontmatter.title}</h1>
        <h4 className="text-muted mb-3">
          <DateRange
            startDates={experience.frontmatter.startDates}
            endDates={experience.frontmatter.endDates}
          />
        </h4>
        <div className="mb-1">
          <p className="d-flex align-items-center mb-0">
            Company:&nbsp;
            <a
              href={experience.frontmatter.companyLink}
              rel="noopener noreferrer"
              target="_blank"
              className="d-inline-flex align-items-center"
            >
              <img
                src={experience.frontmatter.image.childImageSharp.fluid.src}
                alt={experience.frontmatter.title}
                height={16}
              />
              &nbsp;
              {experience.frontmatter.company}
            </a>
          </p>
        </div>
        {experience.frontmatter.languages && (
          <div className="mb-1">
            <p className="d-flex flex-wrap align-items-center mb-0">
              Languages used:&nbsp;
              {experience.frontmatter.languages.map((l, i) => (
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
        {experience.frontmatter.tools && (
          <div className="mb-1">
            <p className="d-flex flex-wrap align-items-center mb-0">
              Tools used:&nbsp;
              {experience.frontmatter.tools.map((t, i) => (
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
        <Content className="mt-4">{experience.body}</Content>
      </div>
    </Layout>
  );
}

export const experienceQuery = graphql`
  query ExperienceBySlug($path: String!) {
    mdx(frontmatter: { slug: { eq: $path } }) {
      body
      fields { 
        excerpt
      }
      frontmatter {
        title
        company
        companyLink
        startDates
        endDates
        languages
        tools
        slug
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
