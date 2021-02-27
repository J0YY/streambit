import Blog from './Blog';
import './BlogSection.scss';

function BlogSection() {
  return (
    <div className="blog-section">
      <Blog />
      <div className="blog-section-info">
        <h2 className="section-title">Sharing has never been easier</h2>
        <p className="section-desc">
          Read and share posts about your insights as a trader! Why you bought a
          stock, concerns, or anything else relevant!
        </p>
      </div>
    </div>
  );
}

export default BlogSection;
