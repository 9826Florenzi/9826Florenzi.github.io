import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="hero" id="about">
  <div className="hero-badge"><span></span> Available for work</div>
  <h1>9826.Florenzi</h1>
  <p className="hero-sub">Hi, I'm <strong>Nguyễn Hữu Nghĩa</strong>. I am an <strong>AI Engineer</strong> specializing in building intelligent systems, training machine learning models, and bringing AI to life.</p>
  <div className="hero-ctas">
    <a href="#contact" className="btn btn-accent btn-lg">Contact Me</a>
    <a href="#skills" className="btn btn-outline btn-lg">View Skills</a>
  </div>
  <p className="hero-trust">Passionate about Artificial Intelligence & Machine Learning</p>
  <div className="hero-img-wrap">
    <div className="hero-img-inner">
      <div className="app-mockup">
        <div className="app-topbar">
          <div className="app-dot" style={{ background: '#ff5f57' }}></div>
          <div className="app-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="app-dot" style={{ background: '#28ca41' }}></div>
        </div>
        <div className="app-body">
          <div className="app-sidebar">
            <div className="app-sidebar-item active" style={{ width: '100%' }}></div>
            <div className="app-sidebar-item" style={{ width: '85%' }}></div>
            <div className="app-sidebar-item" style={{ width: '90%' }}></div>
            <div className="app-sidebar-item" style={{ width: '70%' }}></div>
            <div className="app-sidebar-item" style={{ width: '80%' }}></div>
            <div className="app-sidebar-item" style={{ width: '75%' }}></div>
          </div>
          <div className="app-main">
            <div className="app-row">
              <div className="app-card"><div className="app-card-label"></div><div className="app-card-value" style={{ background: '#e0e0ff' }}></div></div>
              <div className="app-card"><div className="app-card-label"></div><div className="app-card-value" style={{ background: '#e0f0e0' }}></div></div>
              <div className="app-card"><div className="app-card-label"></div><div className="app-card-value" style={{ background: '#fff0e0' }}></div></div>
            </div>
            <div className="app-chart">
              <svg viewBox="0 0 600 140" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#5b5ef4" stop-opacity=".2"/>
                    <stop offset="100%" stop-color="#5b5ef4" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,110 C50,90 80,40 150,50 C220,60 260,90 320,70 C380,50 420,30 480,40 C520,47 560,55 600,45 L600,140 L0,140 Z" fill="url(#g1)"/>
                <path d="M0,110 C50,90 80,40 150,50 C220,60 260,90 320,70 C380,50 420,30 480,40 C520,47 560,55 600,45" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
                <circle cx="150" cy="50" r="4" fill="#5b5ef4"/>
                <circle cx="320" cy="70" r="4" fill="#5b5ef4"/>
                <circle cx="480" cy="40" r="4" fill="#5b5ef4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



