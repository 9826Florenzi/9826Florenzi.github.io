import React from 'react';

export default function Features() {
  return (
    <>
      <section className="features-section" id="features">
  <div className="container">
    {/* Feature 1 */}
    <div className="features-split reveal">
      <div className="feature-img">
        <div className="feature-img-inner">
          <div className="fi-header">
            <div className="fi-tag" style={{ width: '80px' }}></div>
            <div className="fi-tag" style={{ width: '55px' }}></div>
          </div>
          <div className="fi-rows">
            <div className="fi-row"><div className="fi-dot" style={{ background: '#5b5ef4' }}></div><div className="fi-line"></div><div className="fi-badge" style={{ background: '#eeeefd', color: '#5b5ef4', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>In Progress</div></div>
            <div className="fi-row"><div className="fi-dot" style={{ background: '#fbbf24' }}></div><div className="fi-line"></div><div className="fi-badge" style={{ background: '#fef9c3', color: '#854d0e', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>Pending</div></div>
            <div className="fi-row"><div className="fi-dot" style={{ background: '#34d399' }}></div><div className="fi-line"></div><div className="fi-badge" style={{ background: '#dcfce7', color: '#16a34a', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>Done</div></div>
            <div className="fi-row"><div className="fi-dot" style={{ background: '#f87171' }}></div><div className="fi-line"></div><div className="fi-badge" style={{ background: '#fee2e2', color: '#dc2626', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>Overdue</div></div>
          </div>
        </div>
      </div>
      <div className="feature-text">
        <span className="section-label">project management</span>
        <h2>Keep every project moving forward</h2>
        <p><strong>Plan, assign, and deliver your work</strong> — all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.</p>
        <div className="feature-tags">
          <span className="feature-tag primary">Tasks</span>
          <span className="feature-tag">Time tracking</span>
          <span className="feature-tag">Timesheets</span>
          <span className="feature-tag">Reports</span>
        </div>
        <a href="#contact" className="btn btn-dark" style={{ marginTop: '28px' }}>Try Florenzi free</a>
      </div>
    </div>
    {/* Feature 2 */}
    <div className="features-split reverse reveal">
      <div className="feature-img">
        <div className="feature-img-inner">
          <div className="fi-header">
            <div className="fi-tag" style={{ width: '90px' }}></div>
            <div className="fi-tag" style={{ width: '60px' }}></div>
          </div>
          <div className="fi-rows">
            <div style={{ padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#6b6b6b' }}>Monthly Revenue</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '22px', fontWeight: '800', color: '#16a34a' }}>$24,800</div>
              </div>
              <svg viewBox="0 0 300 80" style={{ width: '100%', height: '60px' }}>
                <defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#16a34a" stop-opacity=".2"/><stop offset="100%" stop-color="#16a34a" stop-opacity="0"/></linearGradient></defs>
                <path d="M0,60 C40,50 60,20 100,25 C140,30 160,50 200,35 C230,25 260,15 300,20 L300,80 L0,80Z" fill="url(#g3)"/>
                <path d="M0,60 C40,50 60,20 100,25 C140,30 160,50 200,35 C230,25 260,15 300,20" fill="none" stroke="#16a34a" stroke-width="2"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}><span style={{ color: '#6b6b6b' }}>Invoice #0042</span><span style={{ color: '#0a0a0a', fontWeight: '600' }}>$3,200</span><span style={{ background: '#dcfce7', color: '#16a34a', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px' }}>Paid</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}><span style={{ color: '#6b6b6b' }}>Invoice #0041</span><span style={{ color: '#0a0a0a', fontWeight: '600' }}>$1,800</span><span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px' }}>Pending</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-text">
        <span className="section-label">financial management</span>
        <h2>Track income, get paid, stress less</h2>
        <p><strong>Create branded invoices</strong>, log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything's automated and tax-friendly.</p>
        <div className="feature-tags">
          <span className="feature-tag primary">Invoicing</span>
          <span className="feature-tag">Budgets</span>
          <span className="feature-tag">Forecasting</span>
          <span className="feature-tag">Integrations</span>
        </div>
        <a href="#contact" className="btn btn-dark" style={{ marginTop: '28px' }}>Try Florenzi free</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}



