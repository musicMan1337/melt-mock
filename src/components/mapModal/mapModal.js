import React from 'react';
import { Button } from '../shared';

import './mapModal.scss';
import { fbLogo, instaLogo, liLogo, twitterLogo } from 'src/images';

const MapModal = () => {
  const infoFields = {
    Address: [
      '1255 W Rio Salado Pkwy',
      'Suite 209',
      'Tempe, AZ 85281',
    ],
    Phone: ['602-340-9440'],
    [`Let's be friends`]: [],
  };

  const renderInfoFields = Object.keys(infoFields).map((key) => (
    <React.Fragment key={key}>
      <h3>
        <strong>{key}:</strong>
      </h3>
      {infoFields[key].length ? (
        <>
          {infoFields[key].map((line) => (
            <span key={line}>{line}</span>
          ))}
        </>
      ) : null}
    </React.Fragment>
  ));

  return (
    <div className="map-container">
      <div className="map-modal">
        <h2>
          Get in<strong> touch.</strong>
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
