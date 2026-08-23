'use client';

import { useState } from 'react';

const services = [
  ['01', 'Pintura interior', 'Muros, techos, puertas y detalles con acabados limpios y colores que transforman cada espacio.'],
  ['02', 'Pintura exterior', 'Protección duradera para fachadas, bardas y herrería, preparada para resistir el clima.'],
  ['03', 'Negocios y oficinas', 'Renovamos tu espacio comercial con horarios flexibles para no interrumpir tu operación.'],
  ['04', 'Texturas y acabados', 'Efectos decorativos, impermeabilización y reparación de superficies antes de aplicar color.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio"><span className="brand-mark">PN</span><span>Pinta Norte<small>Pintura profesional</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Cerrar' : 'Menú'}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#nosotros">Nosotros</a><a className="nav-cta" href="#contacto">Cotizar proyecto</a></nav>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Pintura residencial y comercial</p>
        <h1>Tu espacio merece una <em>nueva historia.</em></h1>
        <p className="hero-text">Transformamos hogares y negocios con color, detalle y un trabajo bien hecho. Cotizaciones claras, materiales de calidad y entrega puntual.</p>
        <div className="hero-actions"><a className="button primary" href="#contacto">Solicitar cotización <span>↗</span></a><a className="text-link" href="#proyectos">Ver nuestro trabajo →</a></div>
        <div className="hero-proof"><div><strong>+8</strong><span>Años de<br/>experiencia</span></div><div><strong>180</strong><span>Espacios<br/>renovados</span></div><div><strong>100%</strong><span>Trabajo<br/>garantizado</span></div></div>
      </div>
      <div className="hero-art" aria-label="Muestra abstracta de colores y acabados"><div className="paint-wall"><span className="paint-arch"/><span className="paint-sun"/></div><div className="swatch-card"><i/><div><small>COLOR DEL MES</small><strong>Terracota suave</strong><span>#C76F4E</span></div></div><div className="quality-seal">TRABAJO<br/><b>✓</b><br/>GARANTIZADO</div></div>
    </section>
    <section className="promise-strip"><span>Detalles que se notan</span><i>✦</i><span>Acabados que perduran</span><i>✦</i><span>Espacios que inspiran</span></section>
    <section className="section services" id="servicios">
      <div className="section-heading"><div><p className="eyebrow"><span/> Lo que hacemos</p><h2>Color para cada<br/><em>tipo de espacio.</em></h2></div><p>Desde una habitación hasta un negocio completo, cuidamos la preparación, la aplicación y cada último detalle.</p></div>
      <div className="service-grid">{services.map(([n,t,d]) => <article className="service-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contacto">Conocer más →</a></article>)}</div>
    </section>
    <section className="section projects" id="proyectos">
      <div className="section-heading"><div><p className="eyebrow light"><span/> Proyectos recientes</p><h2>El cambio se ve.<br/><em>La calidad se siente.</em></h2></div><a className="button outline" href="#contacto">Renovar mi espacio</a></div>
      <div className="project-grid">{['Interior residencial','Fachada renovada','Espacio comercial'].map((name,i)=><article className={`project-card project-${i+1}`} key={name}><div className="project-scene"><span className="scene-window"/><span className="scene-sofa"/><span className="scene-plant"/></div><div><small>{i===0?'Sala · Chihuahua':i===1?'Casa · Chihuahua':'Cafetería · Centro'}</small><h3>{name}</h3></div></article>)}</div>
    </section>
    <section className="section about" id="nosotros"><div className="about-art"><span className="roller">▰</span><div>“Pintamos como si fuera nuestro propio espacio.”</div></div><div className="about-copy"><p className="eyebrow"><span/> Nuestro compromiso</p><h2>Un oficio hecho con <em>orgullo y cuidado.</em></h2><p>Somos un equipo local que cree en hacer las cosas bien desde el principio. Protegemos tus muebles, preparamos cada superficie y dejamos todo limpio al terminar.</p><ul><li><b>✓</b> Cotización sin costo</li><li><b>✓</b> Personal puntual y confiable</li><li><b>✓</b> Materiales reconocidos</li><li><b>✓</b> Garantía por escrito</li></ul></div></section>
    <section className="testimonial"><p>“El resultado superó nuestras expectativas. Fueron muy ordenados, cumplieron con el tiempo y la casa quedó como nueva.”</p><div><span>ML</span><strong>Mariana L.<small>Cliente residencial</small></strong><b>★★★★★</b></div></section>
    <section className="contact" id="contacto"><div><p className="eyebrow light"><span/> Hablemos de tu proyecto</p><h2>¿Listo para darle<br/><em>color a tu espacio?</em></h2><p>Cuéntanos qué tienes en mente. Te respondemos el mismo día con los siguientes pasos para preparar tu cotización.</p></div><div className="contact-card"><h3>Solicita tu cotización</h3><p>Respuesta rápida · Sin compromiso</p><a className="whatsapp" href="https://wa.me/526141234567?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20pintura" target="_blank" rel="noreferrer">Hablar por WhatsApp <span>↗</span></a><a href="tel:+526141234567">O llámanos al <b>(614) 123 4567</b></a><small>Lunes a sábado · 8:00 a 18:00</small></div></section>
    <footer><a className="brand" href="#inicio"><span className="brand-mark">PN</span><span>Pinta Norte<small>Pintura profesional</small></span></a><p>Servicio en Chihuahua y alrededores.</p><p>© 2026 Pinta Norte</p></footer>
  </main>;
}
