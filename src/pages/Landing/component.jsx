import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import Loading from '../Loading';
import { data } from './data.json';
import './styles.scss';

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const Landing = () => (
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
            <div className="profile-image">
              <img src="/images/profile1.jpg" alt="profile" />
            </div>

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
