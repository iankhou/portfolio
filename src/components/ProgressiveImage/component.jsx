/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }

  render() {
    const { overlaySrc, src, alt } = this.props;
    const { highResImageLoaded } = this.state;
    return (
      <>
        <img
          {...this.props}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={(img) => {
            this.highResImage = img;
          }}
          src={src}
          alt={alt}
        />
        <img
          {...this.props}
          className="overlay"
          {...highResImageLoaded && { style: { opacity: '0' } }}
          src={overlaySrc}
          alt={alt}
        />
      </>
    );
  }
}

ProgressiveImage.propTypes = {
  className: PropTypes.string.isRequired,
  overlaySrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
