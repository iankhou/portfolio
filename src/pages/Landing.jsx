import React from 'react';
import './Landing.scss';
import {
  Link,
} from 'react-router-dom';

const Landing = () => (
  <>
    <div className="content">
      <div className="quote">THERE IS ALWAYS SOMETHING NEW TO LEARN.</div>
      <div>
        <img className="xueImage" src="/images/xue.png" alt="xue wu zhi jing" />
      </div>
    </div>
    <div className="content">
      <div className="intro">

        <div className="content-box">
          <div className="profile-image">
            <img src="/images/profile.jpg" alt="profile" />
          </div>

          <div className="profile-text">
            <h1>Hello World.</h1>
            <p>
              I&apos;m Ian, a junior at Dartmouth College studying computer science and Chinese.
              I currently work part-time as a software engineer at Mana, a startup based in San
              Francisco, and as a software developer in the DALI Lab, a startup-like
              experiential learning lab. I am a cadet in Dartmouth ROTC. Learn more about my
              career here:
            </p>
            <Link to="/professional" className="nav-link-button">Professional</Link>
            <p>
              I love food, exercise, and the outdoors. At Dartmouth, I play lead trumpet in the DSO and
              lead in the DOC in People of Color Outdoors, Ledyard Canoe Club, and Bait and
              Bullet. You can often find me cooking hotpot in a common room on campus.
              Learn more about my personal life here:
            </p>
            <Link to="/personality" className="nav-link-button">Personal</Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Landing;
