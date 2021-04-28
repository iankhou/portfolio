/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const omit = (obj, omitKey) => Object.keys(obj).reduce((result, key) => {
  if (key !== omitKey) {
    // eslint-disable-next-line no-param-reassign
    result[key] = obj[key];
  }
  return result;
}, {});

const overlayStyles = {
  position: 'absolute',
  filter: 'blur(1px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)',
};

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }

  render() {
    const {
      className, overlaySrc, src, alt,
    } = this.props;
    const { highResImageLoaded } = this.state;
    const filteredProps = omit(this.props, 'overlaySrc');
    return (
      <span>
        <img
          {...filteredProps}
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
          {...filteredProps}
          className={`${className} ${overlayStyles}`}
          {...highResImageLoaded && { style: { opacity: '0' } }}
          src={overlaySrc}
          alt={alt}
        />
      </span>
    );
  }
}

ProgressiveImage.propTypes = {
  className: PropTypes.string.isRequired,
  overlaySrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
