import './Blog.scss';
import printingImg from './3dprinting.jpg';
import React from 'react';

function Blog() {
  return (
    <div className="blog">
      <img
        style={{ height: '360px', width: '400px' }}
        src="https://media2.giphy.com/media/h4fim7zVYskrDEqvil/source.gif"
      />
      <p className="title">Let's learn yoga; 4PM today!</p>
    </div>
  );
}

export default Blog;
