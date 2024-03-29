import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import ScrollAnimation from "react-animate-on-scroll";
import dataFile from "./data.json";
import "./styles.scss";

const { data } = dataFile;

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const LandingComponent = () => {
    return (
      <>
        {/* <video autoPlay muted playsinline loop class="background-video">
          <source
            src="https://cdn-101.anonfiles.com/Faf7CdP0y9/94b45fd5-1672613194/nyc.webm"
            type="video/mp4"
          />
        </video> */}
        <div
          className="content"
        >
          <div className="quote">{data.quote}</div>
          <div className="xueImageContainer">
            <img
              className="xueImage"
              src="/images/xue.png"
              width={330}
              height={800}
              alt="xue wu zhi jing"
            />
          </div>
        </div>
        <div className="content">
          <div className="content-box">
            <ScrollAnimation animateIn="fadeIn">
              
              <div className="profile-box">
                <h1>{data.title}</h1>
                <p>{data.career}</p>
                <div className="professional-box">
                  <Link to="/professional" className="nav-link-button">
                    Professional
                  </Link>
                 
                 <div>
                  {/* link for Github */}
                  <a
                    href="https://github.com/iankhou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="media-icon"
                      src="/images/github.png"
                      alt="github"
                      width="48px"
                      height="48px"
                    />
                  </a>
                  {/* link for LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ian-k-hou/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* image scaled to 48px */}
                    <img
                      className="media-icon"
                      src="/images/linkedin.png"
                      alt="linkedin"
                      width="48px"
                      height="48px"
                    />
                  </a>

                  </div>
                </div>

                <p>{data.personal}</p>
                <div className="professional-box">
                  <Link to="/personality" className="nav-link-button">
                    Personal
                  </Link>
                </div>
                
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </>
    );
  };

  return isLoading ? <Loading /> : <LandingComponent />;
};

export default Landing;
