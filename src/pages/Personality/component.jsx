/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import '../common.scss';
import './styles.scss';
import Loading from '../Loading';

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [content, setContent] = useState(true);

  const Personality = () => (
    <div>
      <div className="content">
        <Parallax
          className="parallax-image"
          x={['-300px', '350px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_left.png" alt="white tiger" className="tigers tiger-left fade-in" />
        </Parallax>

        <div className="main-text">PERSONALITY</div>
        <Parallax
          className="parallax-image"
          x={['350px', '-300px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_right.png" alt="white tiger" className="tigers tiger-right fade-in" />
        </Parallax>

      </div>

      <nav className="switcher">
        <h2 className={`button ${content ? 'buttonOn' : ''}`} onClick={() => setContent(true)}>Gallery</h2>
        <h2 className={`button ${content ? '' : 'buttonOn'}`} onClick={() => setContent(false)}>About</h2>
      </nav>
      {content ? <Gallery /> : <About />}
    </div>
  );

  return (
    isLoading ? <Loading />
      : <Personality />
  );
};

const GalleryEntry = ({
  topLeft, bottomLeft, center, topRight, bottomRight, caption, tags,
}) => (
  <div className="story-group">
    <div className="two-stack">
      <div>
        <img src={topLeft} alt="" />
      </div>
      <div>
        <img src={bottomLeft} alt="" />
      </div>

    </div>
    <div className="main-story-image">
      <img src={center} alt="" />
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
        <img src={topRight} alt="" />
      </div>
      <div>
        <img src={bottomRight} alt="" />
      </div>
    </div>
  </div>
);

GalleryEntry.propTypes = {
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
    <GalleryEntry
      topLeft="/images/nature/summer_hike.jpg"
      bottomLeft="/images/nature/acadia_ray.jpg"
      center="/images/nature/cape_cod.jpg"
      topRight="/images/nature/hogs.jpg"
      bottomRight="/images/nature/jack_bike.jpg"
      caption="Although the pandemic turned my routines and plans upside-down, I still managed to find pleasure in traveling locally. Enjoy these scenes and images from the Great Northeast."
      tags={['outdoors', 'nature', 'family', 'travel']}
    />

    <GalleryEntry
      topLeft="/images/army/graduation.jpg"
      bottomLeft="/images/army/mre.jpg"
      center="/images/army/winter_bike.jpg"
      topRight="/images/army/formation.jpg"
      bottomRight="/images/army/army_ftx_me.jpg"
      caption="I enlisted in the Army out of high school, having been bored by constant schooling for over 12 years. I went to basic training and advanced individual training over what would have been a normal school year. I&#39;m now a cadet in Army ROTC at Dartmouth."
      tags={['military', 'leadership']}
    />

    <GalleryEntry
      topLeft="/images/outdoors/trips_2018.jpg"
      bottomLeft="/images/outdoors/ice_climbing.jpg"
      center="/images/outdoors/trips_2019.jpg"
      topRight="/images/outdoors/kayak_nour.jpg"
      bottomRight="/images/outdoors/sport_climb.jpg"
      caption="My experience in the Dartmouth Outing Club began with attending First-Year Trips in 2018. Since then, I&#39;ve gone on many more trips with friends and strangers, and become a trip leader myself, as well as a leader in People of Color Outdoors, Ledyard Canoe Club, and Bait and Bullet."
      tags={['outdoors', 'leadership', 'trips']}
    />

    <GalleryEntry
      topLeft="/images/food/cookies.jpg"
      bottomLeft="/images/food/jamaican.jpg"
      center="/images/food/cider_carboys.jpg"
      topRight="/images/food/oven_wings.jpg"
      bottomRight="/images/food/hotpot_table.jpg"
      caption="I once started experimenting with apple cider fermentation with my roommate at Dartmouth. Two years later my projects are still going strong. Having made over 20 gallons of the stuff, it only gets better with experience. I&#39;ve since expanded to kombucha and mead. The other images reflect my increased appreciation for food once the pandemic hit (cooking, baking, and takeout!)."
      tags={['project', 'food', 'campus life']}
    />
  </div>
);

const About = () => (
  <div>
    About
  </div>
);
