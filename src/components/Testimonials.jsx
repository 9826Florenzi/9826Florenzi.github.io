import React from 'react';

export default function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
  <div className="container">
    <div className="testimonials-header reveal">
      <p className="section-label">Testimonials</p>
      <p className="featured-quote">"Florenzi is by far the best agency tool I have ever used"</p>
      <div className="featured-person">
        <div className="featured-avatar">M</div>
        <div>
          <div className="featured-name">Martha Punla</div>
          <div className="featured-role">VP Marketing, Meta</div>
        </div>
      </div>
    </div>
    <div className="testimonials-grid">
      <div className="testi-card reveal">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works — clean, fast, and beautifully built."</p>
        <div className="testi-person">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#a78bfa,#6d28d9)' }}>L</div>
          <div>
            <div className="testi-name">Leah Daniel</div>
            <div className="testi-role">Design Ops Lead, Teamwork</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-1">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro."</p>
        <div className="testi-person">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#f87171,#dc2626)' }}>J</div>
          <div>
            <div className="testi-name">Jane Jay Jay</div>
            <div className="testi-role">Project Manager, Google</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-2">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed."</p>
        <div className="testi-person">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#34d399,#059669)' }}>A</div>
          <div>
            <div className="testi-name">Amos Chen</div>
            <div className="testi-role">Art Director, Pentagram</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-3">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"As a freelancer juggling 8 clients at once, Florenzi is the only tool that makes me feel truly in control of my business from day one."</p>
        <div className="testi-person">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#fbbf24,#d97706)' }}>S</div>
          <div>
            <div className="testi-name">Sergio Walker</div>
            <div className="testi-role">Agency Owner</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



