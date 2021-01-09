import React from 'react';

import './splash.scss';
import { Button } from 'src/components/shared';

const Splash = () => {
  return (
    <div className="image-hack i1">
      <div className="splash-container">
        <div className="splash-article-container">
          <h1>
            Heroic websites and apps
            <strong> for all viewports.</strong>
          </h1>
          <article className="splash-article">
            We&apos;re meltmedia and we&apos;re on a mission. Quite
            simply, it&apos;s to make our client&apos;s lives easier.
            We create an environment where business, technology, and
            design experts join forces to deliver innovative and
            sustainable digital solutions. And we have plenty of geeky
            fun along the way.
          </article>
          <Button variant="btn-white">See Our Work</Button>
        </div>
        <div className="splash-image-container">
          <img
            className="splash-image"
            src="https://clipart.info/images/ccovers/1503496390iphone-ipad-mini-2-mobile-tablet-png.png"
            alt="fancy apple products"
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
