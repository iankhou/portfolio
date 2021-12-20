/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import ScrollAnimation from 'react-animate-on-scroll';
import dataFile from './data.json';
import '../common.scss';
import './styles.scss';

const { entries } = dataFile;

const Professional = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [content, setContent] = useState(true);

  const ProfessionalComponent = () => (
    <div>
      <div className="content">
        <Parallax
          x={['300px', '-300px']}
          className="parallax-image"
        >
          <img src="/images/iphone.png" alt="iPhone" className="side-image fade-in" />
        </Parallax>

        <div className="main-text">PROFESSIONAL</div>
        <Parallax
          className="parallax-image"
          x={['-300px', '300px']}
        >
          <img src="/images/mbp.png" alt="Macbook Pro" className="tigers tiger-right fade-in" />
          <img src="/images/terminal.png" alt="Macbook Pro" className="tigers tiger-right fade-in" />
        </Parallax>

      </div>
      <nav className="switcher">
        <h2 className={`button ${content ? 'buttonOn' : ''}`} onClick={() => setContent(true)}>Work</h2>
        <h2 className={`button ${content ? '' : 'buttonOn'}`} onClick={() => setContent(false)}>Resume</h2>
      </nav>
      {content ? <Work /> : <Resume />}
    </div>
  );

  return (
    isLoading ? <Loading />
      : <ProfessionalComponent />
  );
};

const ProfessionalEntry = ({
  index, image, tags, title, text, alt,
}) => {
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
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p>{text}</p>
    </div>
  );

  return (
    <ScrollAnimation animateIn="fadeIn" duration={0.5}>
      <div className={`work-box wb-${index % 2 ? 'right' : 'left'}`}>
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
};

const Work = () => (
  <>
    {entries.map((entry, index) => (
      <ProfessionalEntry index={index} image={entry.image} tags={entry.tags} title={entry.title} text={entry.text} alt={entry.alt} />
    ))}
  </>
);

const Resume = () => (
  <div className="resume-box">
    <div className="professional-text">
      <p>
        Please contact me by
        {' '}
        <a className="nav-link-button" href="mailto:iankwanhou@gmail.com">email</a>
        {' '}
        for my resume.
      </p>
    </div>

  </div>
);

export default Professional;
