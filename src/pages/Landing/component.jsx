import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import Loading from '../Loading';
import ScrollAnimation from 'react-animate-on-scroll';
import dataFile from './data.json';
import './styles.scss';


const { data } = dataFile;

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const LandingComponent = () => (
    <>
      <div className="content">
        <div className="quote">{data.quote}</div>
        <div>
          <img className="xueImage" src="/images/xue.png" alt="xue wu zhi jing" />
        </div>
      </div>
      <div className="content">
        <div className="intro">
          <div className="content-box">
            <ScrollAnimation animateIn="fadeIn">
              <div className="profile-image">
                <img src="/images/profile1.jpg" alt="profile" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="profile-text">
                <h1>{data.title}</h1>
                <p>
                  {data.career}
                </p>
                <Link to="/professional" className="nav-link-button">Professional</Link>
                <p>
                  {data.personal}
                </p>
                <Link to="/personality" className="nav-link-button">Personal</Link>
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </>
  );

  return (
    isLoading ? <Loading />
      : <LandingComponent />
  );
};

export default Landing;
