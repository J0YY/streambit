import './calltoaction.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

function CallToAction() {
  return (
    <Fade left duration={2000} distance="100px">
      <div className="final-call-to-action">
        <p className="title-cta" style={{ fontFamily: 'Arial' }}>
          Take part in this wholesome community
        </p>
        <div className="btn-cta" style={{ fontFamily: 'Arial' }}>
          <Link
            to="/streams"
            style={{ textDecoration: 'none', color: 'black' }}>
            let's goooo 🥰
          </Link>
        </div>
      </div>
    </Fade>
  );
}

export default CallToAction;
