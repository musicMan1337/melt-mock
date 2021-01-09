import React from 'react';
import { Button } from '../shared';

import './mapModal.scss';
import { fbLogo, instaLogo, liLogo, twitterLogo } from 'src/images';

const MapModal = () => {
  const infoFields = {
    Adress: [
      '1255 W Rio Salado Pkwy',
      'Suite 209',
      'Tempe, AZ 85281',
    ],
    Phone: ['602-340-9440'],
    [`Let's be friends`]: [],
  };

  const renderInfoFields = Object.keys(infoFields).map((key) => (
    <p key={key}>
      <strong>{key}:</strong>
      {infoFields[key].map((line) => (
        <React.Fragment key={line}>
          <br />
          {line}
        </React.Fragment>
      ))}
    </p>
  ));

  return (
    <div className="map-container">
      <div className="map-modal">
        <h2>
          Get in <strong>touch.</strong>
        </h2>
        {renderInfoFields}
        <div className="map-icons">
          <Button variant="btn-icon">
            <img src={fbLogo} alt="Facebook" />
          </Button>

          <Button variant="btn-icon">
            <img src={twitterLogo} alt="Twitter" />
          </Button>

          <Button variant="btn-icon">
            <img src={liLogo} alt="LinkedIn" />
          </Button>

          <Button variant="btn-icon">
            <img src={instaLogo} alt="Instagram" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
