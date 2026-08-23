'use client';

import { useState } from 'react';

const services = [
  ['01', 'Pintura de interiores', 'Muros, techos, puertas y molduras con líneas limpias y atención cuidadosa en cada detalle.'],
  ['02', 'Pintura de exteriores', 'Protección duradera para revestimientos, estuco, cercas y superficies expuestas al sol de California.'],
  ['03', 'Pintura comercial', 'Servicio profesional para oficinas, locales y pequeños negocios con horarios flexibles.'],
  ['04', 'Preparación y acabados', 'Reparación de superficies, preparación de paneles, texturas y acabados antes de la capa final.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const recipient = 'anytimepainting2024@gmail.com';
    const subject = 'Solicitud de cotización de pintura';
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}`, '_blank', 'noopener,noreferrer');
    }
  };
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio"><img className="brand-logo" src="/any-time-painting-logo.jfif" alt="Logotipo de Any Time Painting LLC"/><span>Any Time Painting<small>Servicios profesionales de pintura</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Cerrar' : 'Menú'}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}><a href="#servicios">Servicios</a><a href="#proyectos">Nuestro trabajo</a><a href="#nosotros">Nosotros</a><a className="nav-cta" href="#contacto">Cotización gratuita</a></nav>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Pintura residencial y comercial</p>
        <h1>Un acabado renovado, <em>cuando lo necesites.</em></h1>
        <p className="hero-text">Any Time Painting LLC lleva trabajo confiable y detallado a hogares y negocios de Chino y comunidades cercanas del sur de California.</p>
        <div className="hero-actions"><a className="button primary" href="#contacto">Solicitar cotización gratuita <span>↗</span></a><a className="text-link" href="#servicios">Conoce nuestros servicios →</a></div>
        <div className="hero-proof"><div><strong>Limpio</strong><span>Preparación<br/>cuidadosa</span></div><div><strong>Claro</strong><span>Comunicación<br/>honesta</span></div><div><strong>Calidad</strong><span>Resultados<br/>profesionales</span></div></div>
      </div>
      <div className="hero-art" aria-label="Colores de Any Time Painting"><div className="paint-wall"><span className="paint-arch"/><span className="paint-sun"/></div><div className="swatch-card logo-card"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><div><small>EQUIPO LOCAL DE PINTURA</small><strong>Listos cuando tú lo estés</strong><span>Chino, California</span></div></div><div className="quality-seal">CADA<br/><b>✓</b><br/>DETALLE</div></div>
    </section>
    <section className="promise-strip"><span>Preparación que se nota</span><i>✦</i><span>Acabados duraderos</span><i>✦</i><span>Espacios renovados</span></section>
    <section className="section services" id="servicios">
      <div className="section-heading"><div><p className="eyebrow"><span/> Lo que hacemos</p><h2>Color profesional para<br/><em>cada tipo de espacio.</em></h2></div><p>Desde una habitación hasta la renovación completa de una propiedad, cuidamos la preparación, aplicación y cada detalle final.</p></div>
      <div className="service-grid">{services.map(([n,t,d]) => <article className="service-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contacto">Solicitar cotización →</a></article>)}</div>
    </section>
    <section className="section projects" id="proyectos">
      <div className="section-heading"><div><p className="eyebrow light"><span/> Nuestro trabajo</p><h2>Un cambio visible.<br/><em>Un acabado que se siente.</em></h2></div><a className="button outline" href="#contacto">Planear mi proyecto</a></div>
      <div className="project-grid">{['Interiores residenciales','Renovación de exteriores','Espacios comerciales'].map((name,i)=><article className={`project-card project-${i+1}`} key={name}><div className="project-scene"><span className="scene-window"/><span className="scene-sofa"/><span className="scene-plant"/></div><div><small>{i===0?'Muros · Techos · Molduras':i===1?'Estuco · Revestimientos · Detalles':'Oficinas · Locales · Pequeños negocios'}</small><h3>{name}</h3></div></article>)}</div>
    </section>
    <section className="section about" id="nosotros"><div className="about-art"><span className="roller">▰</span><div>“Pintamos cada espacio con el cuidado que daríamos al nuestro.”</div></div><div className="about-copy"><p className="eyebrow"><span/> Nuestro compromiso</p><h2>Trabajo profesional con <em>orgullo y cuidado.</em></h2><p>Creemos que el mejor trabajo comienza antes de la primera capa. Protegemos tu espacio, preparamos cuidadosamente cada superficie y dejamos el área limpia al terminar.</p><ul><li><b>✓</b> Cotizaciones gratuitas</li><li><b>✓</b> Servicio local confiable</li><li><b>✓</b> Materiales de calidad</li><li><b>✓</b> Preparación detallada</li></ul></div></section>
    <section className="testimonial"><p>Preparación cuidadosa. Comunicación clara. Un acabado profesional para renovar tu hogar o negocio.</p><div><span>AT</span><strong>Any Time Painting LLC<small>Chino, California</small></strong><b>★★★★★</b></div></section>
    <section className="contact" id="contacto"><div><p className="eyebrow light"><span/> Hablemos de tu proyecto</p><h2>¿Listo para un<br/><em>acabado renovado?</em></h2><p>Cuéntanos qué tienes en mente. Escríbenos para solicitar una cotización gratuita o conoce nuestros trabajos más recientes en Instagram.</p><div className="map-preview"><iframe title="Mapa de Any Time Painting LLC" src="https://www.google.com/maps?q=12669+17th+St,+Chino,+CA+91710&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a href="https://www.google.com/maps/search/?api=1&query=12669+17th+St%2C+Chino%2C+CA+91710" target="_blank" rel="noreferrer">Abrir dirección en Google Maps ↗</a></div></div><div className="contact-card"><h3>Solicita una cotización gratuita</h3><p>Residencial · Comercial · Interior · Exterior</p><a className="whatsapp" href="mailto:anytimepainting2024@gmail.com" onClick={openEmail}>Enviar correo a Any Time Painting <span>↗</span></a><a className="phone-link" href="tel:+16266144419">Llámanos al <b>(626) 614-4419</b></a><a href="https://www.google.com/maps/search/?api=1&query=12669+17th+St%2C+Chino%2C+CA+91710" target="_blank" rel="noreferrer"><b>12669 17th St, Chino, CA 91710</b></a><a className="instagram-link" href="https://www.instagram.com/paintinganytime?igsi=cHM5d25hMmwwODNp" target="_blank" rel="noreferrer">Síguenos en Instagram: @paintinganytime</a><small>anytimepainting2024@gmail.com</small></div></section>
    <footer><a className="brand" href="#inicio"><img className="brand-logo" src="/any-time-painting-logo.jfif" alt="Logotipo de Any Time Painting LLC"/><span>Any Time Painting<small>Servicios profesionales de pintura</small></span></a><p>Servicio en Chino y comunidades cercanas del sur de California.</p><p>© 2026 Any Time Painting LLC</p></footer>
  </main>;
}
