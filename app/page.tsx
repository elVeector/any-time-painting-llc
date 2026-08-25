'use client';

import { FormEvent, useEffect, useState } from 'react';

const phone = '16266144419';

const services = [
  { icon: '⌂', title: 'Pintura residencial', text: 'Casas, departamentos, interiores y exteriores. Renovamos cada ambiente con preparación cuidadosa y acabados uniformes.', list: ['Muros y techos', 'Puertas y molduras', 'Fachadas y exteriores'] },
  { icon: '▦', title: 'Comercios y oficinas', text: 'Soluciones ágiles y ordenadas con horarios adaptados para reducir interrupciones en tu operación.', list: ['Oficinas y consultorios', 'Locales comerciales', 'Espacios en renta'] },
  { icon: '✦', title: 'Servicios especializados', text: 'Corregimos la superficie antes de pintar para obtener resultados más limpios, resistentes y duraderos.', list: ['Reparación de muros', 'Texturas decorativas', 'Preparación e impermeabilización'] },
];

const benefits = [
  { n: '01', title: 'Cero desorden', text: 'Cubrimos muebles y pisos, organizamos el área de trabajo y limpiamos cuidadosamente al finalizar.' },
  { n: '02', title: 'Cotización transparente', text: 'Explicamos el alcance, los materiales y el costo antes de comenzar. Sin cargos inesperados.' },
  { n: '03', title: 'Puntualidad real', text: 'Acordamos fechas claras y mantenemos comunicación durante cada etapa del proyecto.' },
  { n: '04', title: 'Materiales de alta gama', text: 'Recomendamos pinturas duraderas, opciones de bajo olor y productos adecuados para cada superficie.' },
];

const steps = [
  ['01', 'Cotización', 'Visitamos el espacio o revisamos fotografías y medidas para entender tu proyecto.'],
  ['02', 'Asesoría', 'Te ayudamos a elegir colores, acabados y materiales adecuados para el uso del espacio.'],
  ['03', 'Ejecución', 'Protegemos, preparamos y pintamos con un proceso limpio, ordenado y eficiente.'],
  ['04', 'Entrega', 'Realizamos una inspección final contigo y corregimos cualquier detalle antes de terminar.'],
];

const reviews = [
  ['Residencial', '“Excelente cuidado de los muebles y pisos. El acabado se ve uniforme y el espacio quedó completamente limpio.”'],
  ['Oficina', '“Trabajaron de forma organizada y con buena comunicación, respetando el horario para no detener nuestras actividades.”'],
  ['Comercial', '“La cotización fue clara desde el principio y el cambio del local se nota profesional, fresco y bien terminado.”'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compare, setCompare] = useState(52);
  const openEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const recipient = 'anytimepainting2024@gmail.com';
    const subject = 'Solicitud de informes sobre servicios de pintura';
    const body = 'Hola Any Time Painting LLC,\n\nMe gustaría solicitar información sobre sus servicios de pintura.\n\nGracias.';
    const agent = navigator.userAgent;
    const isAppleSafari = /Safari/i.test(agent) && !/Chrome|CriOS|Edg|OPR|Firefox|FxiOS/i.test(agent);
    if (isAppleSafari) {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -45px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hola, quiero solicitar una cotización gratuita.%0A%0ANombre: ${encodeURIComponent(String(data.get('name')))}%0ATeléfono: ${encodeURIComponent(String(data.get('phone')))}%0ATipo de espacio: ${encodeURIComponent(String(data.get('space')))}%0AMensaje: ${encodeURIComponent(String(data.get('message')))}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return <main>
    <header className="header">
      <a href="#inicio" className="brand"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><span>Any Time Painting LLC<small>Pintura profesional</small></span></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Cerrar' : 'Menú'}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal">
        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a><a href="#ventajas" onClick={() => setMenuOpen(false)}>Por qué elegirnos</a><a href="#galeria" onClick={() => setMenuOpen(false)}>Resultados</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <a className="header-cta" href="#contacto">Cotización gratuita <span>↗</span></a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-image"><img src="/hero-painter.jpg" alt="Pintor profesional trabajando cuidadosamente en una habitación"/><div className="hero-shade"/></div>
      <div className="hero-content">
        <div className="pill"><span>●</span> Servicio profesional en Chino, California</div>
        <h1>Transformamos tus espacios con <em>acabados impecables</em> y sin complicaciones.</h1>
        <p>Pintura profesional a domicilio para casas, oficinas y locales comerciales. Compromiso con la limpieza, la puntualidad y cada detalle.</p>
        <div className="hero-actions"><a className="btn primary" href="#contacto">Solicita tu cotización gratuita <span>→</span></a><a className="btn ghost" href={`tel:+${phone}`}>Llamar al (626) 614-4419</a></div>
        <div className="hero-note"><b>✓</b><span>Atención directa y sin intermediarios</span><b>✓</b><span>Presupuesto claro antes de comenzar</span></div>
      </div>
    </section>

    <section className="trust" aria-label="Compromisos de servicio">
      <div><strong>3</strong><span>Tipos de espacios<br/>atendidos</span></div><div><strong>100%</strong><span>Cotización inicial<br/>sin costo</span></div><div><strong>Local</strong><span>Atención directa<br/>en Chino, CA</span></div><div><strong>✓</strong><span>Compromiso de<br/>orden y limpieza</span></div>
    </section>

    <section className="section services" id="servicios">
      <div className="section-intro" data-reveal><div><span className="kicker">Nuestros servicios</span><h2>Una solución profesional para <em>cada espacio.</em></h2></div><p>Trabajamos con un proceso organizado y materiales seleccionados para que el resultado luzca bien desde el primer día y se mantenga por más tiempo.</p></div>
      <div className="services-grid">{services.map((service, i) => <article className="service-card" data-reveal style={{'--delay': `${i * 100}ms`} as React.CSSProperties} key={service.title}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.list.map(item => <li key={item}>✓ {item}</li>)}</ul><a href="#contacto">Cotizar este servicio <span>→</span></a></article>)}</div>
    </section>

    <section className="why" id="ventajas">
      <div className="why-image" data-reveal><img src="/office-room.webp" alt="Oficina moderna con acabados limpios en color azul"/><div className="image-badge"><b>Calidad que se nota</b><span>Desde la preparación hasta la última revisión.</span></div></div>
      <div className="why-copy" data-reveal><span className="kicker light">Por qué elegirnos</span><h2>Tu espacio en buenas manos, <em>de principio a fin.</em></h2><p>Un buen trabajo de pintura no se trata solamente de aplicar color. Se trata de proteger, preparar, cumplir lo acordado y cuidar el lugar donde vives o trabajas.</p><div className="benefits">{benefits.map(item => <div key={item.n}><span>{item.n}</span><section><h3>{item.title}</h3><p>{item.text}</p></section></div>)}</div></div>
    </section>

    <section className="section gallery" id="galeria">
      <div className="gallery-heading" data-reveal><div><span className="kicker">Antes y después</span><h2>Desliza para descubrir <em>la transformación.</em></h2></div><p>Usa el control para comparar un espacio en proceso con un acabado limpio, luminoso y listo para disfrutarse.</p></div>
      <div className="compare" data-reveal style={{'--position': `${compare}%`} as React.CSSProperties}>
        <img className="after" src="/finished-room.jpg" alt="Después: sala moderna con acabado profesional"/><div className="before"><img src="/before-room.webp" alt="Antes: habitación preparada para renovación"/></div>
        <span className="tag before-tag">ANTES</span><span className="tag after-tag">DESPUÉS</span><span className="compare-line"><i>↔</i></span>
        <input type="range" min="5" max="95" value={compare} onChange={(e) => setCompare(Number(e.target.value))} aria-label="Comparar espacio antes y después"/>
      </div>
      <p className="gallery-note">Imágenes ilustrativas de referencia. Añade fotografías reales de tus proyectos para mostrar resultados verificables.</p>
    </section>

    <section className="process">
      <div className="process-head" data-reveal><span className="kicker light">Así trabajamos</span><h2>Un proceso claro en <em>cuatro pasos.</em></h2></div>
      <div className="steps">{steps.map(([n,title,text], i)=><article data-reveal style={{'--delay': `${i*90}ms`} as React.CSSProperties} key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section reviews">
      <div className="reviews-head" data-reveal><span className="kicker">Experiencia del cliente</span><h2>El servicio que queremos que <em>cada cliente recuerde.</em></h2></div>
      <div className="reviews-grid">{reviews.map(([type,text], i)=><article data-reveal style={{'--delay':`${i*100}ms`} as React.CSSProperties} key={type}><div className="stars">★★★★★</div><p>{text}</p><div><span>{type.charAt(0)}</span><b>{type}<small>Reseña de muestra</small></b></div></article>)}</div>
      <p className="sample-note">Textos de muestra. Reemplázalos por reseñas verificadas de clientes cuando estén disponibles.</p>
    </section>

    <section className="quote" id="contacto">
      <div className="quote-copy" data-reveal><span className="kicker light">Cotización sin costo</span><h2>Cuéntanos sobre <em>tu próximo proyecto.</em></h2><p>Completa el formulario y abriremos WhatsApp con los datos listos para enviar. También puedes llamarnos o escribirnos directamente.</p><div className="contact-lines"><a href={`tel:+${phone}`}><span>☎</span><div><small>Teléfono</small><b>(626) 614-4419</b></div></a><a href="mailto:anytimepainting2024@gmail.com" onClick={openEmail}><span>✉</span><div><small>Correo</small><b>anytimepainting2024@gmail.com</b></div></a><a href="https://www.google.com/maps/search/?api=1&query=12669+17th+St%2C+Chino%2C+CA+91710" target="_blank" rel="noreferrer"><span>⌖</span><div><small>Dirección</small><b>12669 17th St, Chino, CA 91710</b></div></a></div></div>
      <form className="quote-form" onSubmit={submitQuote} data-reveal><div className="form-title"><h3>Solicita tu cotización</h3><span>Respondemos lo antes posible</span></div><label>Nombre completo<input name="name" required placeholder="Tu nombre"/></label><label>Teléfono<input name="phone" required type="tel" placeholder="(000) 000-0000"/></label><label>Tipo de espacio<select name="space" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Casa o departamento</option><option>Oficina</option><option>Negocio o local comercial</option><option>Otro</option></select></label><label>Cuéntanos qué necesitas<textarea name="message" required rows={4} placeholder="Ej. Pintura interior para sala y dos habitaciones..."/></label><button type="submit">Enviar solicitud por WhatsApp <span>→</span></button><small>Al enviar, se abrirá WhatsApp con tu información lista para compartir.</small></form>
    </section>

    <footer><div className="footer-brand"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><p>Servicio profesional de pintura para hogares, oficinas y negocios en Chino y comunidades cercanas.</p></div><div><b>Explora</b><a href="#servicios">Servicios</a><a href="#ventajas">Por qué elegirnos</a><a href="#galeria">Resultados</a></div><div><b>Contacto</b><a href={`tel:+${phone}`}>(626) 614-4419</a><a href="mailto:anytimepainting2024@gmail.com" onClick={openEmail}>anytimepainting2024@gmail.com</a><a href="https://www.instagram.com/paintinganytime?igsi=cHM5d25hMmwwODNp" target="_blank" rel="noreferrer">Instagram ↗</a></div><div className="copyright">© 2026 Any Time Painting LLC</div></footer>
    <a className="whatsapp-float" href={`https://wa.me/${phone}?text=Hola%2C%20quiero%20solicitar%20una%20cotización%20de%20pintura.`} target="_blank" rel="noreferrer" aria-label="Hablar con un especialista por WhatsApp"><span>◉</span><b>Hablar con un especialista</b></a>
  </main>;
}
