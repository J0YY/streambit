import Blog from './Blog';
import './BlogSection.scss';
import React from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';

function BlogSection() {
  return (
    <div className="blog-section">
      <Blog />
      <Slide right duration={1000}>
        <div className="blog-section-info">
          <h2
            className="section-title"
            style={{ fontFamily: 'Arial', fontSize: '50px' }}>
            Watching self-care streams to improve your state of mind has never
            been easier ❤️
          </h2>
          <p className="section-desc" style={{ fontFamily: 'Arial' }}>
            Learn to love yourself, interact, and support each other!
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default BlogSection;
