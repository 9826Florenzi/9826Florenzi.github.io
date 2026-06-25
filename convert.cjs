const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('florenzi.html', 'utf8');

// A primitive way to convert style="key:value; key:value;" to style={{key: 'value', key: 'value'}}
function convertStyle(match, styles) {
  const rules = styles.split(';').filter(r => r.trim());
  const objStr = rules.map(r => {
    let [key, val] = r.split(':');
    if (!key || !val) return '';
    key = key.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    val = val.trim();
    return `${key}: '${val}'`;
  }).filter(Boolean).join(', ');
  return `style={{ ${objStr} }}`;
}

function processHTML(str) {
  let res = str.replace(/class=/g, 'className=');
  res = res.replace(/for=/g, 'htmlFor=');
  res = res.replace(/style="([^"]*)"/g, convertStyle);
  res = res.replace(/<br>/g, '<br />');
  res = res.replace(/<hr>/g, '<hr />');
  res = res.replace(/<img([^>]*)>/g, '<img$1 />');
  res = res.replace(/<input([^>]*)>/g, '<input$1 />');
  res = res.replace(/onclick="([^"]*)"/g, ''); // Remove inline onclicks
  return res;
}

const sections = [
  { name: 'Navbar', start: '<!-- NAV -->', end: '<!-- HERO -->' },
  { name: 'Hero', start: '<!-- HERO -->', end: '<!-- TICKER -->' },
  { name: 'Ticker', start: '<!-- TICKER -->', end: '<!-- DEVICE TABS SECTION -->' },
  { name: 'DevicesSection', start: '<!-- DEVICE TABS SECTION -->', end: '<!-- FEATURES SPLIT -->' },
  { name: 'Features', start: '<!-- FEATURES SPLIT -->', end: '<!-- BENTO FEATURES -->' },
  { name: 'FeaturesBento', start: '<!-- BENTO FEATURES -->', end: '<!-- TESTIMONIALS -->' },
  { name: 'Testimonials', start: '<!-- TESTIMONIALS -->', end: '<!-- PRICING -->' },
  { name: 'Pricing', start: '<!-- PRICING -->', end: '<!-- BLOG -->' },
  { name: 'Blog', start: '<!-- BLOG -->', end: '<!-- COMMUNITY -->' },
  { name: 'Community', start: '<!-- COMMUNITY -->', end: '<!-- CTA -->' },
  { name: 'CTA', start: '<!-- CTA -->', end: '<!-- FOOTER -->' },
  { name: 'Footer', start: '<!-- FOOTER -->', end: '<script>' },
];

if (!fs.existsSync('src/components')) {
  fs.mkdirSync('src/components', { recursive: true });
}

let appImports = [];
let appComponents = [];

for (const sec of sections) {
  const startIndex = html.indexOf(sec.start);
  const endIndex = html.indexOf(sec.end);
  if (startIndex !== -1 && endIndex !== -1) {
    let snippet = html.substring(startIndex + sec.start.length, endIndex).trim();
    snippet = processHTML(snippet);
    
    // Some minor fixes for specific things
    if (sec.name === 'Navbar') {
      snippet = snippet.replace(/<a href="#" className="nav-logo">9826\.Florenzi<\/a>/, `<a href="#" className="nav-logo"><img src="/logo.png" alt="Florenzi Logo" style={{height: '32px'}} /></a>`);
    }

    let code = `import React from 'react';\n\nexport default function ${sec.name}() {\n  return (\n    <>\n      ${snippet}\n    </>\n  );\n}\n`;
    fs.writeFileSync(`src/components/${sec.name}.jsx`, code);
    
    appImports.push(`import ${sec.name} from './components/${sec.name}';`);
    appComponents.push(`      <${sec.name} />`);
  }
}

const appCode = `import React, { useEffect } from 'react';
${appImports.join('\n')}

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
${appComponents.join('\n')}
    </>
  );
}
`;
fs.writeFileSync('src/App.jsx', appCode);

console.log('Conversion complete!');
