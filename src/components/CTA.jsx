import React from 'react';

export default function CTA() {
  return (
    <>
      <section className="cta-section" id="contact">
  <div className="container">
    <div className="cta-content reveal">
      <p className="section-label" style={{ color: 'rgba(255,255,255,.4)' }}>work with me</p>
      <h2 className="section-title">Have a project in mind?</h2>
      <p className="cta-sub">Leave a message or send me an email to collaborate on high-quality AI solutions.</p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:contact@example.com" className="btn btn-accent btn-lg">Send me an Email</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn" style={{ background: 'rgba(255,255,255,.1)', color: 'white', padding: '14px 30px', fontSize: '15px', border: '1px solid rgba(255,255,255,.2)' }}>Connect on LinkedIn</a>
      </div>
    </div>
    <div className="cta-img reveal reveal-delay-1">
      <div className="cta-img-inner">
        <div className="cta-app">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div style={{ height: '10px', width: '80px', background: 'rgba(255,255,255,.15)', borderRadius: '4px' }}></div>
            <div style={{ height: '10px', width: '50px', background: 'rgba(255,255,255,.1)', borderRadius: '4px', marginLeft: 'auto' }}></div>
          </div>
          <div className="cta-app-row">
            <div className="cta-app-block"></div>
            <div className="cta-app-block"></div>
            <div className="cta-app-block"></div>
          </div>
          <div className="cta-app-row">
            <div style={{ flex: '2', height: '100px', borderRadius: '8px', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.08)', overflow: 'hidden' }}>
              <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5b5ef4" stop-opacity=".4"/><stop offset="100%" stop-color="#5b5ef4" stop-opacity="0"/></linearGradient></defs>
                <path d="M0,70 C40,60 80,20 130,30 C180,40 210,65 250,50 C270,42 285,35 300,30 L300,100 L0,100Z" fill="url(#g4)"/>
                <path d="M0,70 C40,60 80,20 130,30 C180,40 210,65 250,50 C270,42 285,35 300,30" fill="none" stroke="#5b5ef4" stroke-width="2"/>
              </svg>
            </div>
            <div style={{ flex: '1', height: '100px', borderRadius: '8px', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.08)' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



