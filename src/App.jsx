import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import DevicesSection from './components/DevicesSection';
import Features from './components/Features';
import FeaturesBento from './components/FeaturesBento';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const nav = document.getElementById('navbar');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <DevicesSection />
      <Features />
      <FeaturesBento />
      <Testimonials />
      <Pricing />
      <Blog />
      <Community />
      <CTA />
      <Footer />
    </>
  );
}
