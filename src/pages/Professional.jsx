/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './common.scss';
import './Professional.scss';

const Professional = () => {
  const [content, setContent] = useState(true);
  return (
    <div>
      <div className="content">
        <Parallax
          x={['300px', '-300px']}
        >
          <img src="/images/iphone.png" alt="iPhone" className="side-image fade-in" />
        </Parallax>

        <div className="main-text">PROFESSIONAL</div>
        <Parallax
          x={['-300px', '300px']}
        >
          <img src="/images/mbp.png" alt="Macbook Pro" className="tigers tiger-right fade-in" />
          <img src="/images/terminal.png" alt="Macbook Pro" className="tigers tiger-right fade-in" />
        </Parallax>

      </div>
      <nav className="switcher">
        <h2 className={`button ${content ? 'buttonOn' : ''}`} onClick={() => setContent(true)}>Work</h2>
        <h2 className={`button ${content ? '' : 'buttonOn'}`} onClick={() => setContent(false)}>Resume</h2>
      </nav>
      {content ? <Work /> : <Resume />}
    </div>
  );
};

const professionalEntry = (side, image, tags, text, alt) => {
  const Img = () => (
    <div className="main-story-image professional-image">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div className="story-tags">
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </div>
  );

  const Txt = () => (
    <div className="story-text">
      {text}
    </div>
  );

  return (
    <div className="work-box">
      {side === 'left' ? (
        <>
          <Img />
          <Txt />
        </>
      ) : (
        <>
          <Txt />
          <Img />
        </>
      )}

    </div>
  );
};

const Work = () => (
  <>
    {professionalEntry('left', 'images/mana.png', ['ML', 'Docker', 'Python', 'Server', 'Linux', 'RPC', 'PostgreSQL', 'Git'], 'Over the summer and fall of 2020 I had the pleasure of working for Mana, a San Francisco-based company working to help people to better spend their time in their mobile app. I was hired as a machine-learning engineer, and built a pipeline that improved predictions by over 15%. Working with this team has brought me mentorship beyond any other professional experience and encouraged me to further pursue applied machine learning.', 'Mana')}
    {professionalEntry('right', 'images/dali-logo.png', ['HTML', 'CSS', 'JS', 'React', 'React Native', 'Node.js', 'MongoDB', 'Git'], 'The DALI Lab is a startup-like experiential learning program at Dartmouth College. Working at the Lab has been a transformative experience for me, as it\'s where I learned a large portion of my knowledge in application development. The range of projects I\'ve worked on there include an interactive site to educate communities about email phishing, a stock market simulator with AI-generated data, and a groundbreaking app to track and identify undiagnosed illnesses. Working there has given me opportunities to work on projects that have social impacts beyond the Lab.', 'DALI')}
    {professionalEntry('left', 'images/dartmouth.png', ['Python', 'Java', 'OOP', 'Encrytion', 'AI', 'ML', 'C', 'Bash', 'HTML', 'CSS', 'JS', 'Auth'], 'My journey in computer science began my Freshman year at Dartmouth, when I first took CS1. Since then I\'ve tutored nine students in that class and been a teaching assistant in another foundational course and Full-Stack Web Development. Many concepts I apply in my work as a software engineer are informed and inspired by concepts learned in Dartmouth classes.', 'Mana')}
    {professionalEntry('right', 'images/army.png', ['Leadership', 'Duty', 'Service'], 'Enlisting in the Army after high school was one of the most consequential decisions of my life. Between finding purpose in serving my local and national community and meeting soldiers from all walks of life, my experience in the Army has been eye-opening and deeply satisfying. I served as an intelligence analyst from 2017 to 2019. I am now a cadet in Dartmouth ROTC and will commission into the Army Reserve as an officer in 2022.', 'DALI')}
  </>
);

const Resume = () => (
  <div className="resume-box">
    <div className="resume-link">
      <a href="Resume 20201119.pdf">PDF</a>
    </div>
    <div className="resume">
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="Generator" content="Microsoft Word 15 (filtered)" />
      <style dangerouslySetInnerHTML={{ __html: '\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:Wingdings;\n\tpanose-1:5 0 0 0 0 0 0 0 0 0;}\n@font-face\n\t{font-family:"Cambria Math";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\n@font-face\n\t{font-family:"Segoe UI";\n\tpanose-1:2 11 6 4 2 2 2 2 2 4;}\n@font-face\n\t{font-family:Times;\n\tpanose-1:0 0 5 0 0 0 0 2 0 0;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{margin:0in;\n\tfont-size:12.0pt;\n\tfont-family:"Calibri",sans-serif;}\na:link, span.MsoHyperlink\n\t{color:#0563C1;\n\ttext-decoration:underline;}\n.MsoChpDefault\n\t{font-family:"Calibri",sans-serif;}\n /* Page Definitions */\n @page WordSection1\n\t{size:8.5in 11.0in;\n\tmargin:.4in .5in .5in .5in;}\ndiv.WordSection1\n\t{page:WordSection1;}\n /* List Definitions */\n ol\n\t{margin-bottom:0in;}\nul\n\t{margin-bottom:0in;}\n-->\n' }} />
      <div className="WordSection1">
        <p className="MsoNormal" align="center" style={{ textAlign: 'center' }}><b><span style={{ fontSize: '18.0pt', fontFamily: 'Times' }}>Ian Hou</span></b></p>
        <p className="MsoNormal" align="center" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            Hinman Box 2124 Dartmouth College,
            Hanover, NH 03755
            {' '}
          </span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>·</span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> 732-261-7125</span>
        </p>
        <p className="MsoNormal" align="center" style={{ textAlign: 'center' }}>
          <a href="mailto:ian.k.hou.22@dartmouth.edu"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>ian.k.hou.22@dartmouth.edu</span></a>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> </span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>·</span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> </span>
          <a href="http://linkedin.com/in/ian-k-hou"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>linkedin.com/in/ian-k-hou</span></a>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> &nbsp;</span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>·</span>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> </span>
          <a href="http://github.com/iankhou"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>github.com/iankhou</span></a>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}> </span>
        </p>
        <p className="MsoNormal"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></p>
        <div style={{ border: 'none', borderBottom: 'solid windowtext 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
          <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '11.0pt', fontFamily: 'Times' }}>EDUCATION</span></b></p>
        </div>
        <p className="MsoNormal">
          <b>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Dartmouth
              College,
              {' '}
            </span>
          </b>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            Hanover,
            NH&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June
              2022
            </b>
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Bachelor
              of Arts: Majors, Computer Science and Chinese Language&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
            </span>
          </i>
          <b><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>GPA 3.6/4.0</span></b>
        </p>
        <p className="MsoNormal">
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            Relevant
            Courses: Object-oriented Programming (Java), Software Design and Implementation
            (C), Discrete Math, Algorithms, Full-stack Web Development, Machine Learning
            and Statistical Data Analysis (Python3), Artificial Intelligence (Python3)
          </span>
        </p>
        <div style={{ border: 'none', borderBottom: 'solid windowtext 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
          <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '11.0pt', fontFamily: 'Times' }}>&nbsp;</span></b></p>
          <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '11.0pt', fontFamily: 'Times' }}>PROFESSIONAL EXPERIENCE</span></b></p>
        </div>
        <p className="MsoNormal">
          <b><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>Mana</span></b>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            , San Francisco, CA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>June 2020 – Present </b>
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Engineering
              Intern
            </span>
          </i>
        </p>
        <ul style={{ marginTop: '0in' }} type="disc">
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Built new
              iteration of machine learning model as lead developer with Python3,
              sci-kit learn, and TensorFlow for a mobile habit-tracking app to predict
              activity with up to 90% accuracy, improving by 15%
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Deployed
              an ensemble model with Docker, integrating with a full-stack app using
              RabbitMQ as a communication layer
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Deployed
              a RESTful API webserver to communicate between RPC server and a full-stack
              app
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Strategized
              with company founders based on analysis of user behavior trends during
              global pandemic to inform user data management
            </span>
          </li>
        </ul>
        <p className="MsoNormal"><b><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></b></p>
        <p className="MsoNormal">
          <b>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Digital
              Applied Learning and Innovation (DALI) Lab
            </span>
          </b>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            , Hanover, NH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <b>January 2020 – Present</b>
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Level 2
              Software Developer
            </span>
          </i>
        </p>
        <ul style={{ marginTop: '0in' }} type="disc">
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Developed
              GoPhish, an anti-Phishing web-app (React.js, Ruby on Rails) for Dartmouth
              IT department to protect students and faculty at college institutions;
              platform scheduled for release to Dartmouth’s 7,000+ students and
              employees Winter 2021
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Developed
              and deployed Bedrock Trading, a stock-market simulator (React.js, Firebase
              backend) that uses machine learning algorithms to generate market data
              based on user-defined parameters
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Awarded
              $1000 through Neukom Scholarship for research in the development of novel
              computational methods on the tracking and identification of undiagnosed
              medical conditions
            </span>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </li>
        </ul>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Dev Consultant,
              Researcher
            </span>
          </i>
        </p>
        <ul style={{ marginTop: '0in' }} type="disc">
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Conducted
              thorough competitive analysis of five main competitors for Sustainable
              Materials, a
              {' '}
            </span>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              platform
              that reduces waste and emissions in manufacturing; proposed an integrated
              development strategy for increased efficiency &nbsp;
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Identified
              key factors (socioeconomic, accessibility, retention) necessary for
              successful launch for
            </span>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              {' '}
              an app enabling medical professionals to prescribe recipes to
              patients to encourage better prognoses
            </span>
          </li>
        </ul>
        <p className="MsoNormal"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></p>
        <div style={{ border: 'none', borderBottom: 'solid windowtext 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
          <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '11.0pt', fontFamily: 'Times' }}>LEADERSHIP EXPERIENCE</span></b></p>
        </div>
        <p className="MsoNormal" style={{ marginLeft: '1.0in', textIndent: '-1.0in' }}>
          <b>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Dartmouth College Computer Science
              Department
              {' '}
            </span>
          </b>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            ,
            Hanover, NH
          </span>
          <b>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              January 2019 – August 2020
            </span>
          </b>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Teaching
              Assistant
            </span>
          </i>
          <b>
            <i>
              <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </i>
          </b>
          <i><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></i>
          <b><i><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></i></b>
        </p>
        <ul style={{ marginTop: '0in' }} type="disc">
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Held
              office hours and one-on-one meetings with students in Full Stack Web
              Development; created and troubleshooted lab assignments involving web
              development frameworks (React.js, React Native, and Node.js) for a class
              of 50 students
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Tutored 6
              students in Introduction to Programming and Computation; met with each
              student 3 hours a week to debug assignments and go over course concepts
              resulting in grade improvements of up to two letter grades
            </span>
          </li>
        </ul>
        <p className="MsoNormal"><b><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></b></p>
        <p className="MsoNormal">
          <b>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              United
              States Army Reserve
            </span>
          </b>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            ,
            <b />
            Rutland, VT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>September 2018 –</b>
            {' '}
            <b>June 2019</b>
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Intelligence
              Analyst at the 826
              <sup>th</sup>
              {' '}
              Military Intelligence Battalion (Interrogation),
              Cadet at the 424
              <sup>th</sup>
              {' '}
              Engineer Company&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>&nbsp;</b>
            </span>
          </i>
        </p>
        <ul style={{ marginTop: '0in' }} type="disc">
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Maintained
              a TS-SCI clearance, 2018 – Present
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Planned
              and executed analytical reports on short notice
            </span>
          </li>
          <li className="MsoNormal">
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Held
              financial responsibility for equipment ranging in millions of dollars
            </span>
          </li>
        </ul>
        <p className="MsoNormal"><b><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></b></p>
        <p className="MsoNormal"><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>&nbsp;</span></p>
        <div style={{ border: 'none', borderBottom: 'solid windowtext 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
          <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '11.0pt', fontFamily: 'Times' }}>SKILLS AND INTERESTS</span></b></p>
        </div>
        <p className="MsoNormal">
          <i><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>Programming</span></i>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            : Python3, Java, C, Bash, CSS, HTML,
            JavaScript, Node.js, React.js, React Native, SQL, Git, Cloud Firestore,
            MongoDB, Docker, Google Cloud
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Other
              skills
            </span>
          </i>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            : Wilderness
            EMT, risk management, Mandarin (native proficiency), Castilian Spanish (working
            proficiency)
          </span>
        </p>
        <p className="MsoNormal">
          <i>
            <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
              Campus
              involvement
            </span>
          </i>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            : Team
            Leader in Army ROTC, Lead trumpet in Dartmouth Symphony Orchestra, Leader in
            Ledyard Canoe Club, Bait and Bullet, and People of Color Outdoors
          </span>
        </p>
        <p className="MsoNormal">
          <i><span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>Interests</span></i>
          <span style={{ fontSize: '10.0pt', fontFamily: 'Times' }}>
            : homebrewing, hiking, cycling, skiing,
            swimming, Give Essential web dev volunteering
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Professional;
