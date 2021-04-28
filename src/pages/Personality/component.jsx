/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import '../common.scss';
import './styles.scss';
import ProgressiveImage from '../../components/ProgressiveImage';

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
  // eslint-disable-next-line no-unused-vars
  dir, smallDir, topLeft, bottomLeft, center, topRight, bottomRight, caption, tags,
}) => (
  <div className="story-group">
    <div className="two-stack">
      <div>
        <ProgressiveImage
          overlaySrc={`${smallDir}/${topLeft}`}
          src={`${dir}/${topLeft}`}
        />
      </div>
      <div>
        <ProgressiveImage
          overlaySrc={`${smallDir}/${bottomLeft}`}
          src={`${dir}/${bottomLeft}`}
        />
      </div>

    </div>
    <div className="main-story-image">
      <ProgressiveImage
        overlaySrc={`${smallDir}/${center}`}
        src={`${dir}/${center}`}
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
        <ProgressiveImage
          overlaySrc={`${smallDir}/${topRight}`}
          src={`${dir}/${topRight}`}
        />
      </div>
      <div>
        <ProgressiveImage
          overlaySrc={`${smallDir}/${bottomRight}`}
          src={`${dir}/${bottomRight}`}
        />
      </div>
    </div>
  </div>
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
    <GalleryEntry
      dir="/images/nature"
      smallDir="/images/nature_small"
      topLeft="summer_hike.jpg"
      bottomLeft="acadia_ray.jpg"
      center="cape_cod.jpg"
      topRight="hogs.jpg"
      bottomRight="jack_bike.jpg"
      caption="Although the pandemic turned my routines and plans upside-down, I still managed to find pleasure in traveling locally. Enjoy these scenes and images from the Great Northeast."
      tags={['outdoors', 'nature', 'family', 'travel']}
    />

    <GalleryEntry
      dir="/images/army"
      smallDir="/images/army_small"
      topLeft="graduation.jpg"
      bottomLeft="mre.jpg"
      center="winter_bike.jpg"
      topRight="formation.jpg"
      bottomRight="army_ftx_me.jpg"
      caption="I enlisted in the Army out of high school, having been bored by constant schooling for over 12 years. I went to basic training and advanced individual training over what would have been a normal school year. I&#39;m now a cadet in Army ROTC at Dartmouth."
      tags={['military', 'leadership']}
    />

    <GalleryEntry
      dir="/images/outdoors"
      smallDir="/images/outdoors_small"
      topLeft="trips_2018.jpg"
      bottomLeft="ice_climbing.jpg"
      center="trips_2019.jpg"
      topRight="kayak_nour.jpg"
      bottomRight="sport_climb.jpg"
      caption="My experience in the Dartmouth Outing Club began with attending First-Year Trips in 2018. Since then, I&#39;ve gone on many more trips with friends and strangers, and become a trip leader myself, as well as a leader in People of Color Outdoors, Ledyard Canoe Club, and Bait and Bullet."
      tags={['outdoors', 'leadership', 'trips']}
    />

    <GalleryEntry
      dir="/images/food"
      smallDir="/images/food_small"
      topLeft="cookies.jpg"
      bottomLeft="jamaican.jpg"
      center="cider_carboys.jpg"
      topRight="oven_wings.jpg"
      bottomRight="hotpot_table.jpg"
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
