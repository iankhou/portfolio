/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import Loading from "../Loading";
import ScrollAnimation from "react-animate-on-scroll";
import dataFile from "./data.json";
import NavBar from "../../components/Navbar/component";
import "../common.scss";
import "./styles.scss";

const { entries } = dataFile;

const Professional = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [content, setContent] = useState(true);

  const ProfessionalComponent = () => (
    <div>
      <video autoPlay muted playsinline loop class="background-video">
        <source
          src="https://cdn-142.anonfiles.com/P5c8C7Pby4/3e000e16-1672612686/hudson_yards2048.webm"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <Parallax x={["300px", "-300px"]} className="parallax-image">
          <img
            src="/images/iphone.png"
            alt="iPhone"
            className="side-image fade-in"
          />
        </Parallax>

        <div className="main-text">PROFESSIONAL</div>
        <Parallax className="parallax-image" x={["-300px", "300px"]}>
          <div className="vert-image-stack">
            <img
              src="/images/mbp.png"
              alt="Macbook Pro"
              className="tigers tiger-right fade-in"
            />
            <img
              src="/images/terminal.png"
              alt="Macbook Pro"
              className="tigers tiger-right fade-in"
            />
          </div>
        </Parallax>
      </div>
      <nav className="switcher">
        <h2
          className={`button ${content ? "buttonOn" : ""}`}
          onClick={() => setContent(true)}
        >
          Work
        </h2>
        <h2
          className={`button ${content ? "" : "buttonOn"}`}
          onClick={() => setContent(false)}
        >
          Resume
        </h2>
      </nav>
      {content ? <Work /> : <Resume />}
    </div>
  );

  return (
    <>
      <NavBar />
      {isLoading ? <Loading /> : <ProfessionalComponent />}
    </>
  );
};

const ProfessionalEntry = ({ index, image, tags, title, text, alt, link }) => {
  const Img = () => (
    <div className="professional-image">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div className="story-tags">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );

  const Txt = () => (
    <div className="story-text">
      <span>
        <h2 style={{ margin: 0, display: "inline-block" }}>{title}</h2>
        <a className="link-icon" href={link}>
          <img src="/images/external.png" width="20" alt="" />
        </a>
      </span>
      <p>{text}</p>
    </div>
  );

  return (
    <ScrollAnimation
      className="animated-container"
      animateIn="fadeIn"
      duration={0.5}
    >
      <div className={`work-box wb-${index % 2 ? "right" : "left"}`}>
        <Img />
        <Txt />
      </div>
    </ScrollAnimation>
  );
};

ProfessionalEntry.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Work = () => (
  <>
    {entries.map((entry, index) => (
      <ProfessionalEntry
        index={index}
        image={entry.image}
        tags={entry.tags}
        title={entry.title}
        text={entry.text}
        alt={entry.alt}
        link={entry.link}
      />
    ))}
  </>
);

const Resume = () => (
  <div className="resume-box">
    <div className="professional-text">
      <p>
        Please contact me on{" "}
        <a className="email-link" href="https://www.linkedin.com/in/ian-k-hou/">
          LinkedIn
        </a>{" "}
        for my resume.
      </p>
    </div>
  </div>
);

export default Professional;
