import React from 'react';
import { Scroll } from '@react-three/drei';

export default function ContentOverlay() {
  const skills = [
    { name: 'Python', percent: 80, color: '#8b5cf6' },
    { name: 'Machine Learning', percent: 85, color: '#2dd4bf' },
    { name: 'PyTorch / TensorFlow', percent: 70, color: '#f59e0b' },
    { name: 'Data Analysis', percent: 75, color: '#10b981' },
    { name: 'SQL / Database', percent: 70, color: '#3b82f6' },
    { name: 'HTML / CSS', percent: 20, color: '#ec4899' }
  ];

  return (
    <Scroll html className="overlay-container">
      {/* SECTION 1: HERO */}
      <div className="section">
        <div className="glass-panel">
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">9826.Florenzi</h1>
          <p className="hero-subtitle">
            Hi, I'm <strong>Nguyễn Hữu Nghĩa</strong>. I am an <strong>AI Engineer</strong> specializing in building intelligent systems, training machine learning models, and bringing data to life.
          </p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>

      {/* SECTION 2: SKILLS */}
      <div className="section" style={{ alignItems: 'flex-end', paddingRight: '10vw' }}>
        <div className="glass-panel" style={{ maxWidth: '700px' }}>
          <h2 className="section-title">Tools & <span>Languages</span></h2>
          <p className="hero-subtitle">Proficiency in key tools for AI and software engineering.</p>
          
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{skill.percent}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: skill.percent + '%', background: skill.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: SERVICES */}
      <div className="section">
        <div className="glass-panel">
          <h2 className="section-title">Freelance <span>AI Services</span></h2>
          <p className="hero-subtitle">Tailored AI solutions for your business needs.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Consulting & Analysis</h3>
              <div className="service-price">Let's talk</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Data assessment, AI/ML architecture consulting, roadmap creation.</p>
            </div>
            <div className="service-card" style={{ borderColor: '#2dd4bf' }}>
              <h3>ML Model Development</h3>
              <div className="service-price" style={{ color: '#2dd4bf' }}>Custom</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Build and train custom AI models, hyperparameter tuning, API deployment.</p>
            </div>
            <div className="service-card" style={{ borderColor: '#f59e0b' }}>
              <h3>Full AI Solution</h3>
              <div className="service-price" style={{ color: '#f59e0b' }}>On request</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Complex AI systems integrated into your workflow, automated monitoring.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: CONTACT */}
      <div className="section" id="contact" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="badge" style={{ background: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf', borderColor: 'rgba(45, 212, 191, 0.3)' }}>Collaborate</div>
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="hero-subtitle" style={{ margin: '1rem auto' }}>
            Leave a message or send me an email to collaborate on high-quality AI solutions.
          </p>
          <a href="mailto:contact@example.com" className="btn">Send me an Email</a>
        </div>
        
        <footer style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; 2026 Nguyễn Hữu Nghĩa (9826.Florenzi)
        </footer>
      </div>
    </Scroll>
  );
}
