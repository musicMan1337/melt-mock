import React from 'react';

import './careers.scss';
import { Button } from 'src/components/shared';

const Careers = () => {
  return (
    <>
      <div className="image-hack i2">
        <div className="careers-container">
          <h2>
            Call for <strong>Superheroes.</strong>
          </h2>
          <Button variant="btn-white">See Our Openings</Button>
        </div>
      </div>

      <div className="video-container">
        <video className="video-careers" controls>
          <source src="" type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>
    </>
  );
};

export default Careers;
