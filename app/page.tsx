'use client';

import { useState } from 'react';

const services = [
  ['01', 'Interior Painting', 'Walls, ceilings, doors and trim finished with clean lines and careful attention to every detail.'],
  ['02', 'Exterior Painting', 'Long-lasting protection for siding, stucco, fences and exterior surfaces under the California sun.'],
  ['03', 'Commercial Painting', 'Professional painting for offices, retail spaces and small businesses with flexible scheduling.'],
  ['04', 'Preparation & Finishes', 'Surface repairs, drywall preparation, texture work and detailed finishing before the final coat.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio"><img className="brand-logo" src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC logo"/><span>Any Time Painting<small>Professional painting services</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Close' : 'Menu'}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}><a href="#servicios">Services</a><a href="#proyectos">Our Work</a><a href="#nosotros">About</a><a className="nav-cta" href="#contacto">Free Estimate</a></nav>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Residential & commercial painting</p>
        <h1>A fresh finish, <em>any time you need it.</em></h1>
        <p className="hero-text">Any Time Painting LLC brings dependable craftsmanship to homes and businesses in Chino and surrounding Southern California communities.</p>
        <div className="hero-actions"><a className="button primary" href="mailto:anytimepainting2024@gmail.com?subject=Free%20Painting%20Estimate">Request a free estimate <span>↗</span></a><a className="text-link" href="#servicios">Explore our services →</a></div>
        <div className="hero-proof"><div><strong>Clean</strong><span>Careful<br/>preparation</span></div><div><strong>Clear</strong><span>Honest<br/>communication</span></div><div><strong>Quality</strong><span>Professional<br/>results</span></div></div>
      </div>
      <div className="hero-art" aria-label="Any Time Painting brand colors"><div className="paint-wall"><span className="paint-arch"/><span className="paint-sun"/></div><div className="swatch-card logo-card"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><div><small>LOCAL PAINTING TEAM</small><strong>Ready when you are</strong><span>Chino, California</span></div></div><div className="quality-seal">DETAILS<br/><b>✓</b><br/>MATTER</div></div>
    </section>
    <section className="promise-strip"><span>Preparation you can see</span><i>✦</i><span>Finishes made to last</span><i>✦</i><span>Spaces that feel renewed</span></section>
    <section className="section services" id="servicios">
      <div className="section-heading"><div><p className="eyebrow"><span/> What we do</p><h2>Expert color for<br/><em>every kind of space.</em></h2></div><p>From a single room to a complete property refresh, we take care of the preparation, application and final details.</p></div>
      <div className="service-grid">{services.map(([n,t,d]) => <article className="service-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contacto">Get an estimate →</a></article>)}</div>
    </section>
    <section className="section projects" id="proyectos">
      <div className="section-heading"><div><p className="eyebrow light"><span/> Our work</p><h2>A visible change.<br/><em>A finish you can feel.</em></h2></div><a className="button outline" href="#contacto">Plan my project</a></div>
      <div className="project-grid">{['Residential Interiors','Exterior Refresh','Commercial Spaces'].map((name,i)=><article className={`project-card project-${i+1}`} key={name}><div className="project-scene"><span className="scene-window"/><span className="scene-sofa"/><span className="scene-plant"/></div><div><small>{i===0?'Walls · Ceilings · Trim':i===1?'Stucco · Siding · Details':'Offices · Retail · Small Business'}</small><h3>{name}</h3></div></article>)}</div>
    </section>
    <section className="section about" id="nosotros"><div className="about-art"><span className="roller">▰</span><div>“We paint every space with the care we would give our own.”</div></div><div className="about-copy"><p className="eyebrow"><span/> Our commitment</p><h2>Professional work with <em>pride and care.</em></h2><p>We believe the best paint job begins before the first coat. Our team protects your space, prepares every surface carefully and leaves the work area clean when the project is complete.</p><ul><li><b>✓</b> Free estimates</li><li><b>✓</b> Dependable local service</li><li><b>✓</b> Quality materials</li><li><b>✓</b> Detailed preparation</li></ul></div></section>
    <section className="testimonial"><p>Careful preparation. Clear communication. A professional finish designed to make your home or business feel renewed.</p><div><span>AT</span><strong>Any Time Painting LLC<small>Chino, California</small></strong><b>★★★★★</b></div></section>
    <section className="contact" id="contacto"><div><p className="eyebrow light"><span/> Let’s talk about your project</p><h2>Ready for a<br/><em>fresh new finish?</em></h2><p>Tell us what you have in mind. Email us for a free estimate or follow our latest work on Instagram.</p></div><div className="contact-card"><h3>Request a Free Estimate</h3><p>Residential · Commercial · Interior · Exterior</p><a className="whatsapp" href="mailto:anytimepainting2024@gmail.com?subject=Free%20Painting%20Estimate">Email Any Time Painting <span>↗</span></a><a href="https://www.google.com/maps/search/?api=1&query=12669+17th+St%2C+Chino%2C+CA+91710" target="_blank" rel="noreferrer"><b>12669 17th St, Chino, CA 91710</b></a><a className="instagram-link" href="https://www.instagram.com/paintinganytime?igsi=cHM5d25hMmwwODNp" target="_blank" rel="noreferrer">Follow @paintinganytime on Instagram</a><small>anytimepainting2024@gmail.com</small></div></section>
    <footer><a className="brand" href="#inicio"><img className="brand-logo" src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC logo"/><span>Any Time Painting<small>Professional painting services</small></span></a><p>Serving Chino and surrounding Southern California communities.</p><p>© 2026 Any Time Painting LLC</p></footer>
  </main>;
}
