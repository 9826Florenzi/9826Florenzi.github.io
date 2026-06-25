import React from 'react';

export default function Community() {
  return (
    <>
      <section className="community-section">
  <div className="container">
    <div className="community-header reveal">
      <p className="section-label">Community</p>
      <h2 className="section-title">Stay in the loop</h2>
    </div>
    <div className="community-grid">
      <div className="community-card reveal">
        <div className="community-platform-icon" style={{ background: '#f0f0f0' }}>𝕏</div>
        <div className="community-count">15.2K</div>
        <div className="community-followers">followers</div>
        <div className="community-name">X / Twitter</div>
        <p className="community-desc">Stay updated on new features and discover how others are using Florenzi.</p>
        <a href="#" className="btn btn-dark" style={{ width: '100%' }}>Follow us</a>
      </div>
      <div className="community-card reveal reveal-delay-1">
        <div className="community-platform-icon" style={{ background: '#fff0f0' }}>▶️</div>
        <div className="community-count">32K</div>
        <div className="community-followers">subscribers</div>
        <div className="community-name">YouTube</div>
        <p className="community-desc">Tips, tutorials, and in-depth feature guides to inspire and enhance your workflow.</p>
        <a href="#" className="btn btn-dark" style={{ width: '100%' }}>Subscribe</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



