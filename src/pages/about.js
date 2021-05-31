import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ModalImage from "../components/modalImage";

import Games from "../../content/images/about/games.jpg";
import Youtube from "../../content/images/about/youtube.jpg";
import Reddit from "../../content/images/about/reddit.jpg";
import Piano from "../../content/images/about/piano.png";
import Hiking from "../../content/images/about/hiking.jpg";

const MediaRow = ({ media, mediaAlt, mediaHeight, rowNum, children }) => {
  const flexDir = rowNum % 2 === 0 ? "flex-sm-row" : "flex-sm-row-reverse";
  const justifyDir = rowNum % 2 === 0 ? "justify-content-sm-end" : "justify-content-sm-start";

  return (
    <Row className={`d-flex ${flexDir} align-items-center`}>
      <Col xs="12" sm="8" md="9" className="px-0 px-sm-2">
        <p className="text-light my-2 my-sm-0">
          {children}
        </p>
      </Col>
      <Col xs="12" sm="4" md="3" className={`d-flex ${justifyDir} justify-content-center p-0`}>
        <ModalImage src={media} alt={mediaAlt} title={mediaAlt} height={mediaHeight} />
      </Col>
    </Row>
  );
};

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <Row>
          <p className="mt-3 text-light">
            Hello! I'm Suhas Dara!
          </p>
        </Row>
        <Row>
          <p className="text-light">
            I grew up in Pune, India, and studied at an IB school from
            kindergarten all the way to high school. I graduated high school
            at the age of 15 and decided to take a break before I tackled
            college. During the gap year, I experienced the joy of programming
            for the first time, and I realized it is my future. I majored in
            Computer Science at The University of Texas at Austin and received
            my Bachelors in May 2021.
          </p>
        </Row>
        <Row>
          <p className="text-light">
            I enjoy working on new projects and learning new technologies.
            I also enjoy making my life easier by making automation scripts to
            ease my developer life. Using new programming languages and finding
            differences between them provides me satisfaction. I have dabbled
            in web development, mobile application development, machine
            learning, deep learning, and a lot more, but I am yet to discover
            what interests me best.
          </p>
        </Row>
        <Row>
          <p className="text-light">
            Outside of computers and programming...
          </p>
        </Row>
        <MediaRow
          media={Games}
          mediaAlt="Brawl Stars Loading Screen"
          mediaHeight={100}
          rowNum={1}
        >
          I enjoy playing mobile games extensively. (Mobile Games Supremacy!)
        </MediaRow>
        <MediaRow
          media={Youtube}
          mediaAlt="YouTube Logo"
          mediaHeight={100}
          rowNum={2}
        >
          I binge-watch YouTube videos, whether it is science, math, gaming
          content, or good ol' cat videos.
        </MediaRow>
        <MediaRow
          media={Reddit}
          mediaAlt="Reddit Meme on MCU Plot Holes"
          mediaHeight={100}
          rowNum={3}
        >
          I browse memes and content on Reddit.
        </MediaRow>
        <MediaRow
          media={Piano}
          mediaAlt="Playing Piano at UT Jester West"
          mediaHeight={100}
          rowNum={4}
        >
          I try to perfect songs I like on the piano. I then post them on
          <a href="https://www.youtube.com/channel/UCPmmJhGiW25eVrr4uepNP1w">
            {" "}YouTube{" "}
          </a>
          if I succeed!
        </MediaRow>
        <MediaRow
          media={Hiking}
          mediaAlt="Hiking in Kerala, India"
          mediaHeight={100}
          rowNum={5}
        >
          If I'm not indoors, I enjoy hiking. Viewing the scenery atop mountains
          feels very rewarding at the end of a hike.
        </MediaRow>
        <Row>
          <p className="text-light mt-3">
            That's it about me!&ensp;
            <span className="d-inline-block small">
              However, you can see my childhood blog{" "}
              <a href="https://suhas-dara.blogspot.com/p/home.html">here</a>
            </span>
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;

