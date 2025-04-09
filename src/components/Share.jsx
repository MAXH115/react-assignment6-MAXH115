import React, { useState } from 'react';
import './Share.css';
import shareIcon from '../images/icon-share.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import printerest from '../images/icon-pinterest.svg';

const Share = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="share">
      <div className="share-trigger">
        <img
          src={shareIcon}
          className="share-icon"
          alt="Share"
          onClick={toggleShareOptions}
        />
      </div>

      {showShareOptions && (
        <div className="share-popup">
          <div>
            <span>S H A R E</span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-link">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-link">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#" className="social-link">
              <img src={printerest} alt="printerest" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;