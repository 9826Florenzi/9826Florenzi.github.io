import React from 'react';

export default function Blog() {
  return (
    <>
      <section className="blog-section" id="blog">
  <div className="container">
    <div className="blog-header reveal">
      <div>
        <p className="section-label">blog</p>
        <h2 className="section-title">Ideas to level-up<br />your freelance game</h2>
      </div>
      <a href="#" className="btn btn-outline">View all posts</a>
    </div>
    <div className="blog-grid reveal">
      <a className="blog-card" href="#">
        <div className="blog-img blog-img-main" style={{ background: 'linear-gradient(135deg,#f0eeff,#e0dbff)' }}>
          👩‍💼
          <div className="blog-tag">Featured</div>
        </div>
        <div className="blog-body">
          <div className="blog-meta">Must Read · Dhyna Phils</div>
          <div className="blog-title">How to start a $100k creative agency in 2025</div>
          <div className="blog-excerpt">Learn how to kickstart your journey into agency ownership with our comprehensive guide to growing a six-figure business.</div>
        </div>
      </a>
      <div className="blog-small-list">
        <a className="blog-card" href="#" style={{ display: 'flex', gap: '0' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
            <div className="blog-small-img">💻</div>
            <div>
              <div className="blog-meta" style={{ fontSize: '11px' }}>Tools</div>
              <div className="blog-title" style={{ fontSize: '16px' }}>Top 10 digital agency software</div>
            </div>
          </div>
        </a>
        <a className="blog-card" href="#" style={{ display: 'flex', gap: '0' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
            <div className="blog-small-img">☁️</div>
            <div>
              <div className="blog-meta" style={{ fontSize: '11px' }}>Insight</div>
              <div className="blog-title" style={{ fontSize: '16px' }}>A complete guide to project success in 2026</div>
            </div>
          </div>
        </a>
        <a className="blog-card" href="#" style={{ display: 'flex', gap: '0' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
            <div className="blog-small-img">🧮</div>
            <div>
              <div className="blog-meta" style={{ fontSize: '11px' }}>Management</div>
              <div className="blog-title" style={{ fontSize: '16px' }}>What Are Billable Hours?</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



