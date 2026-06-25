import React, { useState } from 'react';

export default function DevicesSection() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section className="devices-section">
      <div className="container">
        <div className="devices-header reveal">
          <p className="section-label">Seamless across devices</p>
          <h2 className="section-title">Work from anywhere,<br />stay in sync</h2>
        </div>
        <div className="device-tabs reveal reveal-delay-1">
          <button 
            className={`device-tab ${activeTab === 'mobile' ? 'active' : ''}`} 
            onClick={() => setActiveTab('mobile')}
          >📱 Mobile App</button>
          <button 
            className={`device-tab ${activeTab === 'web' ? 'active' : ''}`} 
            onClick={() => setActiveTab('web')}
          >🖥️ Web App</button>
        </div>
        <div className="device-display">
          {/* MOBILE */}
          <div className={`device-frame ${activeTab === 'mobile' ? 'active' : ''}`}>
            <div className="phone-frame">
              <div className="phone-inner">
                <div className="phone-status" style={{ background: '#0a0a0a', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="phone-notch"></div>
                </div>
                <div className="phone-body">
                  <div style={{ height: '12px' }}></div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#0a0a0a', marginBottom: '14px', fontFamily: "'Sora', sans-serif" }}>Dashboard</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ background: '#f5f5ff', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '10px', color: '#5b5ef4', fontWeight: '700', marginBottom: '4px' }}>PROJECTS</div>
                      <div style={{ fontSize: '22px', fontWeight: '800', color: '#0a0a0a', fontFamily: "'Sora', sans-serif" }}>12</div>
                    </div>
                    <div style={{ background: '#f0fff4', borderRadius: '10px', padding: '12px' }}>
                      <div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '700', marginBottom: '4px' }}>EARNINGS</div>
                      <div style={{ fontSize: '18px', fontWeight: '800', color: '#0a0a0a', fontFamily: "'Sora', sans-serif" }}>$8.4k</div>
                    </div>
                  </div>
                  <div style={{ background: '#f9f9f9', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#6b6b6b', marginBottom: '10px' }}>RECENT TASKS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5b5ef4' }}></div>
                        <div style={{ color: '#0a0a0a', fontWeight: '600' }}>Design mockups</div>
                        <div style={{ marginLeft: 'auto', color: '#a0a0a0' }}>Today</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></div>
                        <div style={{ color: '#0a0a0a', fontWeight: '600' }}>Client proposal</div>
                        <div style={{ marginLeft: 'auto', color: '#a0a0a0' }}>Tomorrow</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></div>
                        <div style={{ color: '#0a0a0a', fontWeight: '600' }}>Invoice sent</div>
                        <div style={{ marginLeft: 'auto', color: '#a0a0a0' }}>Done ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* WEB */}
          <div className={`device-frame ${activeTab === 'web' ? 'active' : ''}`}>
            <div className="web-frame">
              <div className="web-bar">
                <div className="app-dot" style={{ background: '#ff5f57' }}></div>
                <div className="app-dot" style={{ background: '#ffbd2e' }}></div>
                <div className="app-dot" style={{ background: '#28ca41' }}></div>
                <div style={{ flex: '1', height: '16px', background: '#f3f3f3', borderRadius: '6px', marginLeft: '8px' }}></div>
              </div>
              <div className="web-inner">
                <div className="web-grid">
                  <div className="web-side">
                    <div className="web-side-item hi"></div>
                    <div className="web-side-item"></div>
                    <div className="web-side-item"></div>
                    <div className="web-side-item"></div>
                    <div className="web-side-item"></div>
                  </div>
                  <div className="web-content">
                    <div className="web-row">
                      <div className="web-stat"><div className="web-stat-t"></div><div className="web-stat-n" style={{ background: '#e0e0ff' }}></div></div>
                      <div className="web-stat"><div className="web-stat-t"></div><div className="web-stat-n" style={{ background: '#e0f0e0' }}></div></div>
                      <div className="web-stat"><div className="web-stat-t"></div><div className="web-stat-n" style={{ background: '#fff0e0' }}></div></div>
                    </div>
                    <div style={{ flex: '1', background: 'var(--gray-50)', borderRadius: '10px', border: '1px solid var(--gray-200)', overflow: 'hidden' }}>
                      <svg viewBox="0 0 500 180" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#5b5ef4" stop-opacity=".15"/>
                            <stop offset="100%" stop-color="#5b5ef4" stop-opacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M0,140 C60,120 100,60 180,75 C260,90 300,120 360,95 C400,78 440,55 500,65 L500,180 L0,180 Z" fill="url(#g2)"/>
                        <path d="M0,140 C60,120 100,60 180,75 C260,90 300,120 360,95 C400,78 440,55 500,65" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



