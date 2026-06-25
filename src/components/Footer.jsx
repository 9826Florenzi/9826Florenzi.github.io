import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
  <div className="footer-grid">
    <div className="footer-brand">
      <a href="#" className="nav-logo" style={{ fontSize: '18px', fontWeight: '800', textDecoration: 'none', color: 'white' }}>9826.Florenzi</a>
      <p>AI Engineer specializing in Machine Learning, data analysis, and building intelligent systems. (Nguyễn Hữu Nghĩa)</p>
      <div className="footer-social">
        <a href="#" className="social-btn">in</a>
        <a href="#" className="social-btn">𝕏</a>
      </div>
    </div>
    <div className="footer-col">
      <h5>Menu</h5>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#pricing">Services</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h5>Information</h5>
      <ul>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2026 Nguyễn Hữu Nghĩa. All rights reserved.</p>
    <p style={{ color: 'rgba(255,255,255,.25)', fontSize: '12px' }}>Built with ❤️</p>
  </div>
</footer>
    </>
  );
}



