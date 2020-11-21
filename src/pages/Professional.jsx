/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Professional.scss';

const Professional = () => (
  <div>
    <div className="content">
      <Parallax
        x={['-300px', '350px']}
        y={['-190px', '200px']}
      >
        <img src="/images/iphone.png" alt="iPhone" className="tigers tiger_left fade-in" />
      </Parallax>

      <div className="main_text">PROFESSIONAL</div>
      <Parallax
        x={['350px', '-300px']}
        y={['-190px', '200px']}
      >
        <img src="/images/mbp.png" alt="Macbook Pro" className="tigers tiger_right fade-in" />
        <img src="/images/terminal.png" alt="Macbook Pro" className="tigers tiger_right fade-in" />
      </Parallax>

    </div>

  </div>
);

export default Professional;
