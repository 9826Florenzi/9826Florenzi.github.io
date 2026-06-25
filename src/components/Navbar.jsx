import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
  <a href="#" className="nav-logo" style={{ fontSize: '18px', fontWeight: '800', textDecoration: 'none', color: 'var(--black)' }}>9826.Florenzi</a>
  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#pricing">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" className="btn btn-dark">Email Me</a>
</nav>
    </>
  );
}



