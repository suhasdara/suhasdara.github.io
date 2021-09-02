import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogRow from "../components/blogRow";
import SubscribeButton from "../components/subscribeButton";

export default function BlogList({ data, category }) {
  const blogs = data.posts.edges;
  const tags = data.tags.group;
  let totalBlogs = 0;
  data.tags.group.forEach((item) => totalBlogs += item.totalCount);

  let title, description;
  if(category === undefined) {
    title = "Blogs"; description = "All blogs of Suhas Dara";
  } else {
    title = `${category} Blogs`; description = `${category} blogs of Suhas Dara`;
  }

  return (
    <Layout active="blogs">
      <Seo title={title} description={description} />
      <div className="pt-5">
        <Container>
          <Row className="pb-1">
            <Col/>
            <Col>
              <h1 className="text-center text-light">Blogs</h1>
            </Col>
            <Col className="d-flex flex-column align-items-end">
              <SubscribeButton text="Subscribe" />
            </Col>
          </Row>
          <Row className="pb-2 d-flex flex-row justify-content-center">
            &#9679;
            <Link
              to="/blogs/"
              className="mx-2 mb-1 py-0 btn btn-dark"
              activeStyle={
                {color: "#212529", backgroundColor: "#f8f9fa", borderColor: "#f8f9fa"}
              } //explicit btn-light precedence issues
            >
              All <Badge pill variant="info">{totalBlogs}</Badge>
            </Link>
            &#9679;
            {tags.map((t, i) => (
              <Link
                key={i}
                to={`/blogs=${t.fieldValue}/`}
                className="ml-2 mb-1 py-0 btn btn-dark"
                activeStyle={
                  {color: "#212529", backgroundColor: "#f8f9fa", borderColor: "#f8f9fa"}
                } //explicit btn-light precedence issues
              >
                {t.fieldValue[0].toUpperCase() + t.fieldValue.slice(1)}
                &nbsp;
                <Badge pill variant="info">{t.totalCount}</Badge>
              </Link>
            ))}
          </Row>
          {blogs.map((project) => (
            <BlogRow
              key={project.node.id}
              title={project.node.frontmatter.title}
              date={project.node.frontmatter.date}
              link={project.node.frontmatter.slug}
              excerpt={project.node.fields.excerpt_html}
              timeToRead={Math.ceil(project.node.timeToRead * 1.25)} //I'm a slow reader
            />
          ))}
        </Container>
      </div>
    </Layout>
  );
}
