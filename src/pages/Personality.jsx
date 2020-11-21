/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Personality.scss';

const Personality = () => {
  const [content, setContent] = useState(true);
  return (
    <div>
      <div className="content">
        <Parallax
          x={['-300px', '350px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_left.png" alt="white tiger" className="tigers tiger_left fade-in" />
        </Parallax>

        <div className="main_text">PERSONALITY</div>
        <Parallax
          x={['350px', '-300px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_right.png" alt="white tiger" className="tigers tiger_right fade-in" />
        </Parallax>

      </div>

      <nav className="switcher">
        <h2 className={`button ${content ? 'buttonOn' : 'buttonOff'}`} onClick={() => setContent(true)}>Gallery</h2>
        <h2 className={`button ${content ? 'buttonOff' : 'buttonOn'}`} onClick={() => setContent(false)}>About</h2>
      </nav>
      {content ? <Gallery /> : <About />}
    </div>
  );
};

const galleryEntry = (topLeft, bottomLeft, center, topRight, bottomRight, caption, tags) => (
  <div className="story_group">
    <div className="two_stack">
      <div>
        <img src={topLeft} alt="" />
      </div>
      <div>
        <img src={bottomLeft} alt="" />
      </div>

    </div>
    <div className="main_story_image">
      <img src="/images/cider_carboys.png" alt="" />
      <div className="overlay">
        <div className="overlay_text">{caption}</div>
      </div>
      <div className="story_tags">
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>

    </div>

    <div className="two_stack">
      <div>
        <img src={topRight} alt="" />
      </div>
      <div>
        <img src={bottomRight} alt="" />
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="gallery_box">
    {galleryEntry(
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ['Hi', 'Bye'],
    )}

    {galleryEntry(
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      '/images/cider_carboys.png',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ['Hi', 'Bye'],
    )}
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

export default Personality;
