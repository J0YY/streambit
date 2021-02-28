import Blog from './Blog';
import './BlogSection.scss';
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> branch2

function BlogSection() {
  return (
    <div className="blog-section">
      <Blog />
      <div className="blog-section-info">
<<<<<<< HEAD
        <h2 className="section-title">Sharing has never been easier</h2>
        <p className="section-desc">
          Read and share posts about your insights as a trader! Why you bought a
          stock, concerns, or anything else relevant!
=======
        <h2 className="section-title" style={{ fontFamily: 'Arial' }}>
          Watching self-care streams to improve your state of mind has never
          been easier ❤️
        </h2>
        <p className="section-desc" style={{ fontFamily: 'Arial' }}>
          Learn to love yourself, interact, and support each other!
>>>>>>> branch2
        </p>
      </div>
    </div>
  );
}

export default BlogSection;
