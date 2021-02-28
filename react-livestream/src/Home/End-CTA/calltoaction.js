import './calltoaction.scss';
import React from 'react';

function CallToAction() {
  return (
    <div className="final-call-to-action">
      <p className="title-cta" style={{ fontFamily: 'Arial' }}>
        Take part in this wholesome community
      </p>
      <div
        className="btn-cta"
        style={{ fontFamily: 'Arial' }}
        onClick={e => window.open('/streams')}>
        let's goooo 🥰
      </div>
    </div>
  );
}

export default CallToAction;
