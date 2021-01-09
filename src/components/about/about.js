import React from 'react';

import './about.scss';

import { url } from './iconUrls';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-article-container">
        <h2 className="about-header">
          What We <strong>Do.</strong>
        </h2>
        <p>
          We create an experience that transforms your business for
          your brand and your users across all devices for the digital
          economy.
        </p>
      </div>

      <div className="about-icons">
        <img className="icon-click" src={url.click} alt="bam!" />
        <img className="icon-smile" src={url.smile} alt="smiley" />
        <img className="icon-graph" src={url.graph} alt="charts" />
        <img className="icon-heart" src={url.heart} alt="hearty" />
        <img className="icon-people" src={url.people} alt="mitosis" />
      </div>
    </div>
  );
};

export default About;
