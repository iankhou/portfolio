import React, {
  useState,
  useEffect,
  // useRef
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
    // const contentRef = useRef(null);

    // useEffect(() => {
    //   contentRef.current.scrollIntoView({ behavior: "smooth" });
    // }, []);

    return (
      <>
        <video autoPlay muted playsinline loop class="background-video">
          <source
            src="https://cdn-101.anonfiles.com/Faf7CdP0y9/94b45fd5-1672613194/nyc.webm"
            type="video/mp4"
          />
        </video>
        <div
          // ref={contentRef}
          className="content"
        >
          <div className="quote">{data.quote}</div>
          <div className="xueImageContainer">
            <img
              className="xueImage"
              src="/images/xue.png"
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
                  {/* link for Github */}
                  <a
                    href="https://github.com/iankhou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="media-icon"
                      src="https://img.icons8.com/color-glass/48/github.png"
                      alt="github"
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
                      src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                      alt="linkedin"
                      width="48px"
                    />
                  </a>
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
