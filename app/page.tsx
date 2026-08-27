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

const content = {
  es: {
    professional: 'Pintura profesional', menu: 'Menú', close: 'Cerrar', nav: ['Servicios', 'Por qué elegirnos', 'Resultados', 'Contacto'], freeQuote: 'Cotización gratuita',
    location: 'Servicio profesional en Chino, California', hero: <>Transformamos tus espacios con <em>acabados impecables</em> y sin complicaciones.</>,
    heroText: 'Pintura profesional a domicilio para casas, oficinas y locales comerciales. Compromiso con la limpieza, la puntualidad y cada detalle.', request: 'Solicita tu cotización gratuita', call: 'Llamar al (626) 614-4419', direct: 'Atención directa y sin intermediarios', clear: 'Presupuesto claro antes de comenzar',
    trust: [['3','Tipos de espacios atendidos'],['100%','Cotización inicial sin costo'],['Local','Atención directa en Chino, CA'],['✓','Compromiso de orden y limpieza']],
    servicesKicker: 'Nuestros servicios', servicesTitle: <>Una solución profesional para <em>cada espacio.</em></>, servicesText: 'Trabajamos con un proceso organizado y materiales seleccionados para que el resultado luzca bien desde el primer día y se mantenga por más tiempo.', quoteService: 'Cotizar este servicio',
    whyKicker: 'Por qué elegirnos', badgeTitle: 'Calidad que se nota', badgeText: 'Desde la preparación hasta la última revisión.', whyTitle: <>Tu espacio en buenas manos, <em>de principio a fin.</em></>, whyText: 'Un buen trabajo de pintura no se trata solamente de aplicar color. Se trata de proteger, preparar, cumplir lo acordado y cuidar el lugar donde vives o trabajas.',
    galleryKicker: 'Antes y después', galleryTitle: <>Desliza para descubrir <em>la transformación.</em></>, galleryText: 'Usa el control para comparar un espacio en proceso con un acabado limpio, luminoso y listo para disfrutarse.', before: 'ANTES', after: 'DESPUÉS', compareLabel: 'Comparar espacio antes y después',
    processKicker: 'Así trabajamos', processTitle: <>Un proceso claro en <em>cuatro pasos.</em></>, reviewsKicker: 'Experiencia del cliente', reviewsTitle: <>El servicio que queremos que <em>cada cliente recuerde.</em></>, sampleReview: 'Reseña de muestra',
    quoteKicker: 'Cotización sin costo', quoteTitle: <>Cuéntanos sobre <em>tu próximo proyecto.</em></>, quoteText: 'Completa el formulario y abriremos WhatsApp con los datos listos para enviar. También puedes llamarnos o escribirnos directamente.', phoneLabel: 'Teléfono', emailLabel: 'Correo', addressLabel: 'Dirección',
    formTitle: 'Solicita tu cotización', respond: 'Respondemos lo antes posible', fullName: 'Nombre completo', namePlaceholder: 'Tu nombre', spaceType: 'Tipo de espacio', choose: 'Selecciona una opción', spaces: ['Casa o departamento','Oficina','Negocio o local comercial','Otro'], messageLabel: 'Cuéntanos qué necesitas', messagePlaceholder: 'Ej. Pintura interior para sala y dos habitaciones...', send: 'Enviar solicitud por WhatsApp', sendNote: 'Al enviar, se abrirá WhatsApp con tu información lista para compartir.',
    footerText: 'Servicio profesional de pintura para hogares, oficinas y negocios en Chino y comunidades cercanas.', explore: 'Explora', specialist: 'Hablar con un especialista'
  },
  en: {
    professional: 'Professional painting', menu: 'Menu', close: 'Close', nav: ['Services', 'Why choose us', 'Results', 'Contact'], freeQuote: 'Free estimate',
    location: 'Professional service in Chino, California', hero: <>We transform your spaces with <em>flawless finishes</em> and no hassle.</>,
    heroText: 'Professional on-site painting for homes, offices, and commercial spaces. Committed to cleanliness, punctuality, and every detail.', request: 'Request your free estimate', call: 'Call (626) 614-4419', direct: 'Direct service with no middlemen', clear: 'Clear estimate before we begin',
    trust: [['3','Types of spaces served'],['100%','Free initial estimate'],['Local','Direct service in Chino, CA'],['✓','Commitment to order and cleanliness']],
    servicesKicker: 'Our services', servicesTitle: <>A professional solution for <em>every space.</em></>, servicesText: 'We follow an organized process and use carefully selected materials so your results look great from day one and last longer.', quoteService: 'Estimate this service',
    whyKicker: 'Why choose us', badgeTitle: 'Quality you can see', badgeText: 'From preparation to the final inspection.', whyTitle: <>Your space in good hands, <em>from start to finish.</em></>, whyText: 'A great paint job is about more than applying color. It means protecting, preparing, honoring our commitments, and caring for the place where you live or work.',
    galleryKicker: 'Before and after', galleryTitle: <>Slide to discover <em>the transformation.</em></>, galleryText: 'Use the control to compare a space in progress with a clean, bright finish ready to enjoy.', before: 'BEFORE', after: 'AFTER', compareLabel: 'Compare the space before and after',
    processKicker: 'How we work', processTitle: <>A clear process in <em>four steps.</em></>, reviewsKicker: 'Client experience', reviewsTitle: <>The service we want <em>every client to remember.</em></>, sampleReview: 'Sample review',
    quoteKicker: 'Free estimate', quoteTitle: <>Tell us about <em>your next project.</em></>, quoteText: 'Complete the form and we will open WhatsApp with your details ready to send. You can also call or email us directly.', phoneLabel: 'Phone', emailLabel: 'Email', addressLabel: 'Address',
    formTitle: 'Request your estimate', respond: 'We respond as soon as possible', fullName: 'Full name', namePlaceholder: 'Your name', spaceType: 'Type of space', choose: 'Select an option', spaces: ['House or apartment','Office','Business or retail space','Other'], messageLabel: 'Tell us what you need', messagePlaceholder: 'Example: Interior painting for a living room and two bedrooms...', send: 'Send request via WhatsApp', sendNote: 'When you submit, WhatsApp will open with your information ready to share.',
    footerText: 'Professional painting services for homes, offices, and businesses in Chino and nearby communities.', explore: 'Explore', specialist: 'Talk to a specialist'
  }
};

const servicesEn = [
  { icon: '⌂', title: 'Residential painting', text: 'Homes, apartments, interiors, and exteriors. We renew every room with careful preparation and smooth, consistent finishes.', list: ['Walls and ceilings', 'Doors and trim', 'Facades and exteriors'] },
  { icon: '▦', title: 'Commercial and office painting', text: 'Fast, organized solutions with flexible schedules designed to minimize interruptions to your operations.', list: ['Offices and clinics', 'Retail spaces', 'Rental properties'] },
  { icon: '✦', title: 'Specialized services', text: 'We correct and prepare surfaces before painting for cleaner, stronger, longer-lasting results.', list: ['Wall repairs', 'Decorative textures', 'Preparation and waterproofing'] },
];
const benefitsEn = [
  { n: '01', title: 'No mess', text: 'We cover furniture and floors, organize the work area, and clean carefully when finished.' },
  { n: '02', title: 'Transparent estimates', text: 'We explain the scope, materials, and cost before starting. No unexpected charges.' },
  { n: '03', title: 'True punctuality', text: 'We agree on clear dates and keep you informed throughout every stage of the project.' },
  { n: '04', title: 'Premium materials', text: 'We recommend durable paints, low-odor options, and the right products for every surface.' },
];
const stepsEn = [
  ['01', 'Estimate', 'We visit your space or review photos and measurements to understand your project.'],
  ['02', 'Guidance', 'We help you choose the right colors, finishes, and materials for your space.'],
  ['03', 'Painting', 'We protect, prepare, and paint through a clean, organized, and efficient process.'],
  ['04', 'Delivery', 'We complete a final inspection with you and address every detail before finishing.'],
];
const reviewsEn = [
  ['Residential', '“They took excellent care of the furniture and floors. The finish looks even, and the space was left completely clean.”'],
  ['Office', '“They worked in an organized way, communicated clearly, and respected our schedule so our activities could continue.”'],
  ['Commercial', '“The estimate was clear from the beginning, and the business now looks professional, fresh, and beautifully finished.”'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compare, setCompare] = useState(52);
  const [language, setLanguage] = useState<'es' | 'en'>('en');
  const [scrolled, setScrolled] = useState(false);
  const t = content[language];
  const activeServices = language === 'es' ? services : servicesEn;
  const activeBenefits = language === 'es' ? benefits : benefitsEn;
  const activeSteps = language === 'es' ? steps : stepsEn;
  const activeReviews = language === 'es' ? reviews : reviewsEn;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const openEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const recipient = 'anytimepainting2024@gmail.com';
    const subject = language === 'en' ? 'Request for painting service information' : 'Solicitud de informes sobre servicios de pintura';
    const body = language === 'en'
      ? 'Hello Any Time Painting LLC,\n\nI would like to request information about your painting services.\n\nThank you.'
      : 'Hola Any Time Painting LLC,\n\nMe gustaría solicitar información sobre sus servicios de pintura.\n\nGracias.';
    const agent = navigator.userAgent;
    const isAppleSafari = /Safari/i.test(agent) && !/Chrome|CriOS|Edg|OPR|Firefox|FxiOS/i.test(agent);
    const emailUrl = isAppleSafari
      ? `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank', 'noopener,noreferrer');
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
    const message = language === 'es'
      ? `Hola, quiero solicitar una cotización gratuita.%0A%0ANombre: ${encodeURIComponent(String(data.get('name')))}%0ATeléfono: ${encodeURIComponent(String(data.get('phone')))}%0ATipo de espacio: ${encodeURIComponent(String(data.get('space')))}%0AMensaje: ${encodeURIComponent(String(data.get('message')))}`
      : `Hello, I would like to request a free estimate.%0A%0AName: ${encodeURIComponent(String(data.get('name')))}%0APhone: ${encodeURIComponent(String(data.get('phone')))}%0AType of space: ${encodeURIComponent(String(data.get('space')))}%0AMessage: ${encodeURIComponent(String(data.get('message')))}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return <main>
    <header className={`header site-header${scrolled ? ' scrolled' : ''}`}>
      <a href="#inicio" className="brand"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><span>Any Time Painting LLC<small>{t.professional}</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a><a href="#ventajas" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a><a href="#galeria" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a><a href="#contacto" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
      </nav>
      <div className="header-controls">
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? t.close : t.menu}</button>
        <button className="language-toggle" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={language === 'es' ? 'Translate page to English' : 'Traducir la página al español'}>{language === 'es' ? 'EN' : 'ES'} <span>文</span></button>
        <a className="header-cta" href="#contacto">{t.freeQuote} <span>↗</span></a>
      </div>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-image"><img src="/hero-painter.jpg" alt="Pintor profesional trabajando cuidadosamente en una habitación"/><div className="hero-shade"/></div>
      <div className="hero-content">
        <div className="pill"><span>●</span> {t.location}</div>
        <h1>{t.hero}</h1>
        <p>{t.heroText}</p>
        <div className="hero-actions"><a className="btn primary" href="#contacto">{t.request} <span>→</span></a><a className="btn ghost" href={`tel:+${phone}`}>{t.call}</a></div>
        <div className="hero-note"><b>✓</b><span>{t.direct}</span><b>✓</b><span>{t.clear}</span></div>
      </div>
    </section>

    <section className="trust" aria-label="Compromisos de servicio">
      {t.trust.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </section>

    <section className="section services" id="servicios">
      <div className="section-intro" data-reveal><div><span className="kicker">{t.servicesKicker}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div>
      <div className="services-grid">{activeServices.map((service, i) => <article className="service-card" data-reveal style={{'--delay': `${i * 100}ms`} as React.CSSProperties} key={i}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.list.map((item, itemIndex) => <li key={itemIndex}>✓ {item}</li>)}</ul><a href="#contacto">{t.quoteService} <span>→</span></a></article>)}</div>
    </section>

    <section className="why" id="ventajas">
      <div className="why-image" data-reveal><img src="/office-room.webp" alt={language === 'es' ? 'Oficina moderna con acabados limpios en color azul' : 'Modern office with clean blue finishes'}/><div className="image-badge"><b>{t.badgeTitle}</b><span>{t.badgeText}</span></div></div>
      <div className="why-copy" data-reveal><span className="kicker light">{t.whyKicker}</span><h2>{t.whyTitle}</h2><p>{t.whyText}</p><div className="benefits">{activeBenefits.map(item => <div key={item.n}><span>{item.n}</span><section><h3>{item.title}</h3><p>{item.text}</p></section></div>)}</div></div>
    </section>

    <section className="section gallery" id="galeria">
      <div className="gallery-heading" data-reveal><div><span className="kicker">{t.galleryKicker}</span><h2>{t.galleryTitle}</h2></div><p>{t.galleryText}</p></div>
      <div className="compare" data-reveal style={{'--position': `${compare}%`} as React.CSSProperties}>
        <img className="after" src="/finished-room.jpg" alt="Después: sala moderna con acabado profesional"/><div className="before"><img src="/before-room.webp" alt="Antes: habitación preparada para renovación"/></div>
        <span className="tag before-tag">{t.before}</span><span className="tag after-tag">{t.after}</span><span className="compare-line"><i>↔</i></span>
        <input type="range" min="5" max="95" value={compare} onChange={(e) => setCompare(Number(e.target.value))} aria-label={t.compareLabel}/>
      </div>
    </section>

    <section className="process">
      <div className="process-head" data-reveal><span className="kicker light">{t.processKicker}</span><h2>{t.processTitle}</h2></div>
      <div className="steps">{activeSteps.map(([n,title,text], i)=><article data-reveal style={{'--delay': `${i*90}ms`} as React.CSSProperties} key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section reviews">
      <div className="reviews-head" data-reveal><span className="kicker">{t.reviewsKicker}</span><h2>{t.reviewsTitle}</h2></div>
      <div className="reviews-grid">{activeReviews.map(([type,text], i)=><article data-reveal style={{'--delay':`${i*100}ms`} as React.CSSProperties} key={i}><div className="stars">★★★★★</div><p>{text}</p><div><span>{type.charAt(0)}</span><b>{type}<small>{t.sampleReview}</small></b></div></article>)}</div>
    </section>

    <section className="quote" id="contacto">
      <div className="quote-copy" data-reveal><span className="kicker light">{t.quoteKicker}</span><h2>{t.quoteTitle}</h2><p>{t.quoteText}</p><div className="contact-lines"><a href={`tel:+${phone}`}><span>☎</span><div><small>{t.phoneLabel}</small><b>(626) 614-4419</b></div></a><a href="mailto:anytimepainting2024@gmail.com" onClick={openEmail}><span>✉</span><div><small>{t.emailLabel}</small><b>anytimepainting2024@gmail.com</b></div></a><a href="https://www.google.com/maps/search/?api=1&query=12669+17th+St%2C+Chino%2C+CA+91710" target="_blank" rel="noreferrer"><span>⌖</span><div><small>{t.addressLabel}</small><b>12669 17th St, Chino, CA 91710</b></div></a></div></div>
      <form className="quote-form" onSubmit={submitQuote} data-reveal><div className="form-title"><h3>{t.formTitle}</h3><span>{t.respond}</span></div><label>{t.fullName}<input name="name" required placeholder={t.namePlaceholder}/></label><label>{t.phoneLabel}<input name="phone" required type="tel" placeholder="(000) 000-0000"/></label><label>{t.spaceType}<select name="space" required defaultValue=""><option value="" disabled>{t.choose}</option>{t.spaces.map(space => <option key={space}>{space}</option>)}</select></label><label>{t.messageLabel}<textarea name="message" required rows={4} placeholder={t.messagePlaceholder}/></label><button type="submit">{t.send} <span>→</span></button><small>{t.sendNote}</small></form>
    </section>

    <footer><div className="footer-brand"><img src="/any-time-painting-logo.jfif" alt="Any Time Painting LLC"/><p>{t.footerText}</p></div><div><b>{t.explore}</b><a href="#servicios">{t.nav[0]}</a><a href="#ventajas">{t.nav[1]}</a><a href="#galeria">{t.nav[2]}</a></div><div><b>{t.nav[3]}</b><a href={`tel:+${phone}`}>(626) 614-4419</a><a href="mailto:anytimepainting2024@gmail.com" onClick={openEmail}>anytimepainting2024@gmail.com</a><a href="https://www.instagram.com/paintinganytime?igsi=cHM5d25hMmwwODNp" target="_blank" rel="noreferrer">Instagram ↗</a></div><div className="copyright">© 2026 Any Time Painting LLC</div></footer>
    <a className="whatsapp-float" href={`https://wa.me/${phone}?text=${language === 'es' ? 'Hola%2C%20quiero%20solicitar%20una%20cotización%20de%20pintura.' : 'Hello%2C%20I%20would%20like%20to%20request%20a%20painting%20estimate.'}`} target="_blank" rel="noreferrer" aria-label={`${t.specialist} WhatsApp`}><span>◉</span><b>{t.specialist}</b></a>
  </main>;
}
