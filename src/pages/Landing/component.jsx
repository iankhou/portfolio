import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import Loading from '../Loading';
import './styles.scss';

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
              <img src="/images/profile1.jpg" alt="profile" />
            </div>

            <div className="profile-text">
              <h1>Hello World.</h1>
              <p>
                I&apos;m Ian, a senior at Dartmouth College studying computer science and Chinese.
                I currently work part-time as a software engineer at Requipper, a startup that
                helps outdoorsy people buy and sell used gear. At school, I am an SMP cadet in
                Dartmouth ROTC, serving with the 424th EN CO. Learn more about my career here:
              </p>
              <Link to="/professional" className="nav-link-button">Professional</Link>
              <p>
                I love food, exercise, and the outdoors. At Dartmouth, I lead organizations within
                the Dartmouth Outdoors Club such as People of Color Outdoors and Bait and Bullet.
                In the Ledyard Canoe Club, I am a flatwater trip leader and lead canoe trips
                anywhere from down the Connecticut River to Everglades National Park!
                You can often find me cooking hotpot in a common room on campus.
                Learn more about my personal life here:
              </p>
              <Link to="/personality" className="nav-link-button">Personal</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    isLoading ? <Loading />
      : <Landing />
  );
};
