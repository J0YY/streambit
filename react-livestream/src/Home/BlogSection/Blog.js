import './Blog.scss';
import printingImg from './3dprinting.jpg';
import React from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';

function Blog() {
  return (
    <Fade left duration={1500}>
      <div className="blog">
        <img
          style={{ height: '360px', width: '400px' }}
          src="https://media2.giphy.com/media/h4fim7zVYskrDEqvil/source.gif"
        />
        <p className="title">Let's learn yoga; 4PM today!</p>
      </div>
    </Fade>
  );
}

export default Blog;
