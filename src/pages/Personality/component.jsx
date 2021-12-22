/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import dataFile from './data.json';
import Loading from '../Loading';
import ScrollAnimation from 'react-animate-on-scroll';
import '../common.scss';
import './styles.scss';
import './timeline.scss';

const { entries } = dataFile;

const Personality = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // const [content, setContent] = useState(true);
  const content = true;

  const PersonalityComponent = () => (
    <div>
      <div className="content">
        <Parallax
          className="parallax-image"
          x={['-300px', '350px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_left.png" alt="white tiger" className="tigers tiger-left fade-in" />
        </Parallax>

        <div className="main-text">PERSONAL</div>
        <Parallax
          className="parallax-image"
          x={['350px', '-300px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_right.png" alt="white tiger" className="tigers tiger-right fade-in" />
        </Parallax>

      </div>
      {content ? <Gallery /> : <About />}
      {/* {Timeline()} */}
    </div>
  );

  return (
    isLoading ? <Loading />
      : <PersonalityComponent />
  );
};

const GalleryEntry = ({
  // eslint-disable-next-line no-unused-vars
  dir, smallDir, topLeft, bottomLeft, center, topRight, bottomRight, caption, tags,
}) => (
  <ScrollAnimation animateIn="fadeIn" duration={0.5}>

    <div className="story-group">
      <div className="two-stack">
        <div>
          <img
            src={`${dir}/${topLeft}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${dir}/${bottomLeft}`}
            alt=""
          />
        </div>

      </div>
      <div className="main-story-image">
        <img
          src={`${dir}/${center}`}
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text">{caption}</div>
        </div>
        <div className="story-tags">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>

      </div>

      <div className="two-stack">
        <div>
          <img
            src={`${dir}/${topRight}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${dir}/${bottomRight}`}
            alt=""
          />
        </div>
      </div>
    </div>
  </ScrollAnimation>
);

GalleryEntry.propTypes = {
  dir: PropTypes.string.isRequired,
  smallDir: PropTypes.string.isRequired,
  topLeft: PropTypes.string.isRequired,
  bottomLeft: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  topRight: PropTypes.string.isRequired,
  bottomRight: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

const Gallery = () => (
  <div className="gallery-box">
    {entries.map((entry) => (
      <GalleryEntry
        dir={entry.dir}
        smallDir={entry.smallDir}
        topLeft={entry.topLeft}
        bottomLeft={entry.bottomLeft}
        center={entry.center}
        topRight={entry.topRight}
        bottomRight={entry.bottomRight}
        caption={entry.caption}
        tags={entry.tags}

      />
    ))}
  </div>
);

const timelineData = [
  {
    text: "Hello",
    date: "Dec 20 2021",
    category: {
      tag: "medium",
      color: "#018f69"
    },
    link: {
      url:
        'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
      text: 'Read more'
    }
  },
  {
    text: "Hello",
    date: "Dec 20 2021",
    category: {
      tag: "medium",
      color: "#018f69"
    },
    link: {
      url:
        'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
      text: 'Read more'
    }
  }
]

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
)

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

const About = () => (
  <div>
    About
  </div>
);

export default Personality;
