import React, { useState } from 'react';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <p className="section-label">services</p>
          <h2 className="section-title">Freelance AI<br />Services</h2>
        </div>
        <div className="billing-toggle reveal">
          <span className={`toggle-label ${!isMonthly ? 'active' : ''}`} id="lbl-annual">Per Project</span>
          <div 
            className={`toggle-switch ${isMonthly ? 'monthly' : ''}`} 
            id="billing-toggle" 
            onClick={() => setIsMonthly(!isMonthly)}
          ></div>
          <span className={`toggle-label ${isMonthly ? 'active' : ''}`} id="lbl-monthly">Monthly</span>
          <span className="save-badge">Flexible</span>
        </div>
        <div className="pricing-grid">
          {/* Basic */}
          <div className="price-card reveal">
            <div className="plan-name">Consulting & Analysis</div>
            <div className="plan-price" style={{ fontSize: '32px', marginTop: '16px' }}>Let's talk</div>
            <p className="plan-desc">For businesses needing data strategy.</p>
            <ul className="plan-features">
              <li>Data assessment</li>
              <li>AI/ML architecture consulting</li>
              <li>Roadmap creation</li>
              <li>Detailed reporting</li>
              <li>Email support</li>
            </ul>
            <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>Get a consultation</a>
          </div>
          {/* Premium */}
          <div className="price-card featured reveal reveal-delay-1">
            <div className="price-badge">Most Popular</div>
            <div className="plan-name" style={{ color: 'rgba(255,255,255,.5)' }}>ML Model Development</div>
            <div style={{ marginBottom: '4px' }}>
              <span className="plan-old-price" style={{ color: 'rgba(255,255,255,.35)', fontSize: '18px' }}>
                Depends on scope
              </span>
            </div>
            <div className="plan-price" style={{ fontSize: '32px', marginTop: '4px' }}>Custom</div>
            <p className="plan-desc">Build and train custom AI models.</p>
            <ul className="plan-features">
              <li>Data preprocessing & cleaning</li>
              <li>Model training</li>
              <li>Hyperparameter tuning</li>
              <li>API deployment</li>
              <li>1 month warranty</li>
            </ul>
            <a href="#contact" className="btn btn-accent" style={{ width: '100%' }}>Start building</a>
          </div>
          {/* Enterprise */}
          <div className="price-card reveal reveal-delay-2">
            <div className="plan-name">Full AI Solution</div>
            <div className="plan-price" style={{ fontSize: '32px', marginTop: '16px' }}>On request</div>
            <p className="plan-desc">Complex AI systems integrated into your workflow.</p>
            <ul className="plan-features">
              <li>Everything in Model Development</li>
              <li>Data pipeline design</li>
              <li>Automated monitoring & retraining</li>
              <li>System integration</li>
              <li>24/7 technical support</li>
            </ul>
            <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>Contact for details</a>
          </div>
        </div>
      </div>
    </section>
  );
}




