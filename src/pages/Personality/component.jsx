/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import '../App.scss';
import '../common.scss';
import './styles.scss';

export default () => {
  const [content, setContent] = useState(true);
  return (
    <div>
      <div className="content">
        <Parallax
          x={['-300px', '350px']}
          y={['-190px', '200px']}
        >
          <img src="/images/tiger_left.png" alt="white tiger" className="tigers tiger-left fade-in" />
        </Parallax>

        <div className="main-text">PERSONALITY</div>
        <Parallax
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
};

const galleryEntry = (topLeft, bottomLeft, center, topRight, bottomRight, caption, tags) => (
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
          <p>{tag}</p>
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

const Gallery = () => (
  <div className="gallery-box">
    {galleryEntry(
      '/images/nature/summer_hike.jpg',
      '/images/nature/acadia_ray.jpg',
      '/images/nature/cape_cod.jpg',
      '/images/nature/hogs.jpg',
      '/images/nature/jack_bike.jpg',
      'Although the pandemic turned my routines and plans upside-down, I still managed to find pleasure in traveling locally. Enjoy these scenes and images from the Great Northeast.',
      ['outdoors', 'nature', 'family', 'travel'],
    )}

    {galleryEntry(
      '/images/army/graduation.jpg',
      '/images/army/mre.jpg',
      '/images/army/winter_bike.jpg',
      '/images/army/formation.jpg',
      '/images/army/army_ftx_me.jpg',
      'I enlisted in the Army out of high school, having been bored by constant schooling for over 12 years. I went to basic training and advanced individual training over what would have been a normal school year. I\'m now a cadet in Army ROTC at Dartmouth.',
      ['military', 'leadership'],
    )}

    {galleryEntry(
      '/images/outdoors/trips_2018.jpg',
      '/images/outdoors/ice_climbing.jpg',
      '/images/outdoors/trips_2019.jpg',
      '/images/outdoors/kayak_nour.jpg',
      '/images/outdoors/sport_climb.jpg',
      'My experience in the Dartmouth Outing Club began with attending First-Year Trips in 2018. Since then, I\'ve gone on many more trips with friends and strangers, and become a trip leader myself, as well as a leader in People of Color Outdoors, Ledyard Canoe Club, and Bait and Bullet.',
      ['outdoors', 'leadership', 'trips'],
    )}

    {galleryEntry(
      '/images/food/cookies.jpg',
      '/images/food/jamaican.jpg',
      '/images/food/cider_carboys.jpg',
      '/images/food/oven_wings.jpg',
      '/images/food/hotpot_table.jpg',
      'I once started experimenting with apple cider fermentation with my roommate at Dartmouth. Two years later my projects are still going strong. Having made over 20 gallons of the stuff, it only gets better with experience. I\'ve since expanded to kombucha and mead. The other images reflect my increased appreciation for food once the pandemic hit (cooking, baking, and takeout!).',
      ['project', 'food', 'campus life'],
    )}
  </div>
);

const About = () => (
  <div>
    About
  </div>
);
