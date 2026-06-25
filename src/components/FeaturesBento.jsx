import React from 'react';

export default function FeaturesBento() {
  return (
    <>
      <section className="features-bento" id="skills">
  <div className="container">
    <div className="features-bento-header reveal">
      <p className="section-label">my expertise</p>
      <h2 className="section-title">Tools & Languages</h2>
      <p className="section-sub" style={{ margin: '16px auto 0' }}>Proficiency in key tools for AI and software engineering.</p>
    </div>
    <div className="bento-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
      
      {[
        { name: 'Python', percent: 80, color: '#5b5ef4' },
        { name: 'Machine Learning', percent: 85, color: '#16a34a' },
        { name: 'PyTorch / TensorFlow', percent: 70, color: '#f59e0b' },
        { name: 'Data Analysis', percent: 75, color: '#8b5cf6' },
        { name: 'SQL / Database', percent: 70, color: '#ec4899' },
        { name: 'HTML / CSS', percent: 20, color: '#64748b' },
      ].map(skill => (
        <div key={skill.name} className="skill-row reveal" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', fontSize: '15px' }}>
            <span>{skill.name}</span>
            <span style={{ color: 'var(--gray-600)' }}>{skill.percent}%</span>
          </div>
          <div style={{ width: '100%', height: '12px', background: 'var(--gray-200)', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{ width: `${skill.percent}%`, height: '100%', background: skill.color, borderRadius: '999px', transition: 'width 1s ease-in-out' }}></div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
}



