const STORAGE_KEY = 'buildbee-language';
const SUPPORTED_LANGUAGES = ['es', 'en'];

const MENU_LABELS = {
  es: { open: 'Abrir menú', close: 'Cerrar menú', switcher: 'Seleccionar idioma' },
  en: { open: 'Open menu', close: 'Close menu', switcher: 'Select language' },
};

const PAGE_TRANSLATIONS = {
  index: [
    { selector: 'title', es: 'buildbee — Diseño web, mantenimiento y apps', en: 'buildbee — Web design, maintenance and apps' },
    { selector: 'meta[name="description"]', attr: 'content', es: 'buildbee: diseño páginas web, arreglo y doy mantenimiento a sitios existentes, y creo apps a partir de tu web. Escríbeme y hablamos de tu proyecto.', en: 'buildbee: web design, website fixes and maintenance, and app creation from your current website. Reach out and let’s talk about your project.' },
    { selector: '.logo[aria-label]', all: true, attr: 'aria-label', es: 'buildbee — inicio', en: 'buildbee — home' },
    { selector: '.nav-links a:nth-child(1)', es: 'Servicios', en: 'Services' },
    { selector: '.nav-links a:nth-child(2)', es: 'Proyectos', en: 'Projects' },
    { selector: '.nav-links a:nth-child(3)', es: 'Proceso', en: 'Process' },
    { selector: '.nav-links a:nth-child(4)', es: 'Contacto', en: 'Contact' },
    { selector: '.nav-actions .btn', es: 'Contáctame', en: 'Contact me' },
    { selector: '.badge', es: 'Diseño web · Mantenimiento · Apps', en: 'Web design · Maintenance · Apps' },
    { selector: '.hero-copy h1', es: 'Diseño, arreglo y convierto páginas web en apps que funcionan de verdad.', en: 'I design, fix, and turn websites into apps that truly work.' },
    { selector: '.hero-copy .lead', es: 'Soy diseñador y desarrollador web. Te ayudo a construir tu sitio desde cero, resolver los problemas del que ya tienes, o convertirlo en una app para que tus clientes la lleven en el bolsillo.', en: 'I’m a web designer and developer. I help you build your site from scratch, fix what is not working on your current one, or turn it into an app your customers can carry in their pocket.' },
    { selector: '.hero-actions .btn-primary', es: 'Escríbeme', en: 'Message me' },
    { selector: '.hero-actions .btn-ghost', es: 'Ver servicios', en: 'View services' },
    { selector: '.fine-print', es: 'Respondo en menos de 24 horas', en: 'I reply in under 24 hours' },
    { selector: '.hero-panel-eyebrow', es: 'Mis servicios', en: 'My services' },
    { selector: '.hero-panel-title', es: 'Todo lo que tu web necesita, en un solo lugar.', en: 'Everything your website needs, in one place.' },
    { selector: '.hero-panel-item:nth-of-type(1) .hero-panel-item-title', es: 'Diseño web', en: 'Web design' },
    { selector: '.hero-panel-item:nth-of-type(1) .hero-panel-item-desc', es: 'Sitios rápidos y a tu medida, listos para publicar.', en: 'Fast custom sites, ready to launch.' },
    { selector: '.hero-panel-item:nth-of-type(2) .hero-panel-item-title', es: 'Mantenimiento', en: 'Maintenance' },
    { selector: '.hero-panel-item:nth-of-type(2) .hero-panel-item-desc', es: 'Reviso y arreglo tu web si algo deja de funcionar.', en: 'I review and fix your site if something stops working.' },
    { selector: '.hero-panel-item:nth-of-type(3) .hero-panel-item-title', es: 'Apps', en: 'Apps' },
    { selector: '.hero-panel-item:nth-of-type(3) .hero-panel-item-desc', es: 'Convierto tu sitio en una app para tus clientes.', en: 'I turn your site into an app for your customers.' },
    { selector: '.hero-panel-link', es: 'Ver todos los servicios →', en: 'See all services →' },
    { selector: '#servicios .section-head h2', es: 'En qué puedo ayudarte', en: 'How I can help you' },
    { selector: '#servicios .section-head p', es: 'Tres formas de trabajar juntos, según en qué punto esté tu proyecto.', en: 'Three ways to work together depending on where your project is right now.' },
    { selector: '#servicios .card:nth-of-type(1) h3', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '#servicios .card:nth-of-type(1) p', es: 'Sitios modernos, rápidos y adaptados a cualquier pantalla, diseñados a tu medida desde cero.', en: 'Modern, fast sites adapted to any screen, designed from scratch for your needs.' },
    { selector: '#servicios .card:nth-of-type(2) h3', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '#servicios .card:nth-of-type(2) p', es: '¿Tu web tiene errores, está desactualizada o dejó de funcionar? La reviso, la arreglo y la dejo funcionando como nueva.', en: 'Does your website have errors, feel outdated, or stop working? I review it, fix it, and leave it running like new.' },
    { selector: '#servicios .card:nth-of-type(3) h3', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '#servicios .card:nth-of-type(3) p', es: 'Convierto tu sitio en una app para que tus clientes tengan tus servicios a un toque de distancia, sin perder nada de lo que ya funciona.', en: 'I turn your site into an app so your customers can access your services in one tap, without losing anything that already works.' },
    { selector: '#proyectos .section-head h2', es: 'Un proyecto reciente', en: 'A recent project' },
    { selector: '#proyectos .section-head p', es: 'Así se ve un producto real, construido de principio a fin.', en: 'This is what a real product built end-to-end looks like.' },
    { selector: '.portfolio-media img', attr: 'alt', es: 'Captura de inicio del sitio Pilates con Jime', en: 'Homepage screenshot of the Pilates con Jime website' },
    { selector: '.portfolio-tag', es: 'Sitio web · App · Panel de administración', en: 'Website · App · Admin panel' },
    { selector: '.portfolio-body p', es: 'Sitio y aplicación para una instructora de pilates a domicilio: reserva de clases, calendario y un panel de administración para gestionar horarios y clientes.', en: 'Website and app for an in-home pilates instructor: class booking, calendar, and an admin panel to manage schedules and clients.' },
    { selector: '.portfolio-links .btn-primary', es: 'Ver proyecto', en: 'View project' },
    { selector: '.portfolio-links .btn-ghost', es: 'Ver código', en: 'View code' },
    { selector: '#proceso .section-head h2', es: 'Cómo trabajamos juntos', en: 'How we work together' },
    { selector: '#proceso .section-head p', es: 'Un proceso simple, sin letra pequeña, del primer mensaje a la entrega final.', en: 'A simple process, with no fine print, from first message to final delivery.' },
    { selector: '.steps-grid .step:nth-child(1) h3', es: 'Cuéntame tu proyecto', en: 'Tell me about your project' },
    { selector: '.steps-grid .step:nth-child(1) p', es: 'Escríbeme y hablamos sobre lo que necesitas: una web nueva, un arreglo o una app.', en: 'Send me a message and we’ll discuss what you need: a new site, a fix, or an app.' },
    { selector: '.steps-grid .step:nth-child(2) h3', es: 'Preparo una propuesta', en: 'I prepare a proposal' },
    { selector: '.steps-grid .step:nth-child(2) p', es: 'Te envío un plan claro con alcance y tiempos, sin sorpresas ni letra pequeña.', en: 'I send you a clear plan with scope and timeline, no surprises and no fine print.' },
    { selector: '.steps-grid .step:nth-child(3) h3', es: 'Entrego y doy soporte', en: 'I deliver and support' },
    { selector: '.steps-grid .step:nth-child(3) p', es: 'Recibes tu proyecto terminado, y sigo disponible si necesitas ajustes después.', en: 'You receive your finished project, and I remain available if you need adjustments later.' },
    { selector: '.about .eyebrow', es: 'Sobre mí', en: 'About me' },
    { selector: '.about-inner p', html: true, es: 'Soy diseñador y desarrollador web freelance. Me dedico a construir sitios y aplicaciones que resuelven problemas reales, como <a href="#proyectos">Pilates con Jime</a>, una app que ayuda a gestionar clases y reservas de principio a fin. Trabajo de cerca con cada cliente, desde la primera idea hasta que el proyecto está funcionando.', en: 'I’m a freelance web designer and developer. I build sites and apps that solve real problems, such as <a href="#proyectos">Pilates con Jime</a>, an app that helps manage classes and bookings end-to-end. I work closely with each client, from the first idea until the project is live.' },
    { selector: '#contacto h2', es: 'Hablemos de tu proyecto', en: 'Let’s talk about your project' },
    { selector: '#contacto p', es: 'Cuéntame qué necesitas y te responderé en menos de 24 horas.', en: 'Tell me what you need and I’ll reply in under 24 hours.' },
    { selector: '.contact-label', es: 'Email', en: 'Email' },
    { selector: '.footer-brand p', es: 'Diseño web, mantenimiento y apps para negocios que quieren funcionar sin problemas.', en: 'Web design, maintenance and apps for businesses that want to run without friction.' },
    { selector: '.footer-col:nth-child(1) .footer-col-title', es: 'Servicios', en: 'Services' },
    { selector: '.footer-col:nth-child(1) a:nth-child(2)', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '.footer-col:nth-child(1) a:nth-child(3)', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '.footer-col:nth-child(1) a:nth-child(4)', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '.footer-col:nth-child(2) .footer-col-title', es: 'Contacto', en: 'Contact' },
    { selector: '.footer-col:nth-child(3) .footer-col-title', es: 'Legal', en: 'Legal' },
    { selector: '.footer-col:nth-child(3) a:nth-child(2)', es: 'Privacidad', en: 'Privacy' },
    { selector: '.footer-col:nth-child(3) a:nth-child(3)', es: 'Términos', en: 'Terms' },
    { selector: '.footer-bottom > span', es: '© 2026 buildbee. Todos los derechos reservados.', en: '© 2026 buildbee. All rights reserved.' },
  ],
  privacidad: [
    { selector: 'title', es: 'Política de privacidad — buildbee', en: 'Privacy policy — buildbee' },
    { selector: 'meta[name="description"]', attr: 'content', es: 'Política de privacidad de buildbee: qué datos se recogen a través de este sitio y cómo se usan.', en: 'buildbee privacy policy: what data is collected through this site and how it is used.' },
    { selector: '.logo[aria-label]', all: true, attr: 'aria-label', es: 'buildbee — inicio', en: 'buildbee — home' },
    { selector: '.nav-links a:nth-child(1)', es: 'Servicios', en: 'Services' },
    { selector: '.nav-links a:nth-child(2)', es: 'Proceso', en: 'Process' },
    { selector: '.nav-links a:nth-child(3)', es: 'Contacto', en: 'Contact' },
    { selector: '.nav-actions .btn', es: 'Contáctame', en: 'Contact me' },
    { selector: '.legal-main h1', es: 'Política de privacidad', en: 'Privacy policy' },
    { selector: '.legal-updated', es: 'Última actualización: septiembre de 2026', en: 'Last updated: September 2026' },
    { selector: '.legal-main .container > p:nth-of-type(2)', es: 'buildbee es un estudio unipersonal de diseño y desarrollo web con base en Costa Rica. Esta página explica qué información se recoge a través de este sitio y cómo se utiliza.', en: 'buildbee is a one-person web design and development studio based in Costa Rica. This page explains what information is collected through this website and how it is used.' },
    { selector: '.legal-main h2:nth-of-type(1)', es: 'Qué información se recoge', en: 'What information is collected' },
    { selector: '.legal-main h2:nth-of-type(1) + p', html: true, es: 'Este sitio no tiene formularios ni scripts de seguimiento propios. Los únicos datos personales que se reciben son los que envías voluntariamente al escribir por correo (<a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a>) o por WhatsApp: normalmente tu nombre, datos de contacto y la información del proyecto que quieras compartir.', en: 'This site does not use forms or proprietary tracking scripts. The only personal data received is what you voluntarily share when contacting by email (<a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a>) or WhatsApp: typically your name, contact details, and the project information you choose to share.' },
    { selector: '.legal-main h2:nth-of-type(2)', es: 'Para qué se usa', en: 'What it is used for' },
    { selector: '.legal-main h2:nth-of-type(2) + ul li:nth-child(1)', es: 'Responder tu consulta y preparar una propuesta.', en: 'To answer your inquiry and prepare a proposal.' },
    { selector: '.legal-main h2:nth-of-type(2) + ul li:nth-child(2)', es: 'Dar seguimiento al proyecto si decides contratar el servicio.', en: 'To follow up on the project if you decide to hire the service.' },
    { selector: '.legal-main h2:nth-of-type(2) + ul li:nth-child(3)', es: 'Facturación y coordinación relacionadas con el trabajo acordado.', en: 'Billing and coordination related to the agreed work.' },
    { selector: '.legal-main h2:nth-of-type(3)', es: 'Con quién se comparte', en: 'Who it is shared with' },
    { selector: '.legal-main h2:nth-of-type(3) + p', es: 'Tus datos no se venden ni se comparten con terceros. Solo se usan internamente para gestionar tu proyecto, salvo que la ley exija lo contrario.', en: 'Your data is not sold or shared with third parties. It is only used internally to manage your project, unless the law requires otherwise.' },
    { selector: '.legal-main h2:nth-of-type(4)', es: 'Cuánto tiempo se conservan', en: 'How long it is kept' },
    { selector: '.legal-main h2:nth-of-type(4) + p', es: 'Se conservan mientras dure la relación con el cliente y el tiempo razonable después para fines administrativos o legales (por ejemplo, comprobantes de pago). Puedes solicitar que se eliminen antes, salvo que exista una obligación legal de conservarlos.', en: 'Data is kept during the client relationship and for a reasonable period afterward for administrative or legal purposes (for example, payment records). You may request earlier deletion unless there is a legal obligation to retain it.' },
    { selector: '.legal-main h2:nth-of-type(5)', es: 'Cookies y analítica', en: 'Cookies and analytics' },
    { selector: '.legal-main h2:nth-of-type(5) + p', es: 'Este sitio no usa cookies de seguimiento ni herramientas de analítica de terceros. El proveedor de hosting puede generar registros técnicos básicos (como direcciones IP) con fines de seguridad y funcionamiento del servicio.', en: 'This site does not use tracking cookies or third-party analytics tools. The hosting provider may generate basic technical logs (such as IP addresses) for security and service operation.' },
    { selector: '.legal-main h2:nth-of-type(6)', es: 'Tus derechos', en: 'Your rights' },
    { selector: '.legal-main h2:nth-of-type(6) + p', html: true, es: 'Puedes pedir acceder, corregir o eliminar los datos que tengo sobre ti escribiendo a <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a>.', en: 'You can request access, correction, or deletion of the data I hold about you by writing to <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a>.' },
    { selector: '.legal-main h2:nth-of-type(7)', es: 'Cambios a esta política', en: 'Changes to this policy' },
    { selector: '.legal-main h2:nth-of-type(7) + p', es: 'Esta política puede actualizarse ocasionalmente. La fecha de la última actualización aparece al inicio de esta página.', en: 'This policy may be updated occasionally. The latest update date appears at the top of this page.' },
    { selector: '.legal-main h2:nth-of-type(8)', es: 'Contacto', en: 'Contact' },
    { selector: '.legal-main h2:nth-of-type(8) + p', html: true, es: 'Si tienes preguntas sobre esta política, escríbeme a <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a> o por <a href="https://wa.me/50672018483" target="_blank" rel="noopener">WhatsApp</a>.', en: 'If you have questions about this policy, write to <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a> or contact me via <a href="https://wa.me/50672018483" target="_blank" rel="noopener">WhatsApp</a>.' },
    { selector: '.footer-brand p', es: 'Diseño web, mantenimiento y apps para negocios que quieren funcionar sin problemas.', en: 'Web design, maintenance and apps for businesses that want to run without friction.' },
    { selector: '.footer-col:nth-child(1) .footer-col-title', es: 'Servicios', en: 'Services' },
    { selector: '.footer-col:nth-child(1) a:nth-child(2)', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '.footer-col:nth-child(1) a:nth-child(3)', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '.footer-col:nth-child(1) a:nth-child(4)', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '.footer-col:nth-child(2) .footer-col-title', es: 'Contacto', en: 'Contact' },
    { selector: '.footer-col:nth-child(2) a:nth-child(3)', es: 'WhatsApp: +506 7201 8483', en: 'WhatsApp: +506 7201 8483' },
    { selector: '.footer-col:nth-child(3) .footer-col-title', es: 'Legal', en: 'Legal' },
    { selector: '.footer-col:nth-child(3) a:nth-child(2)', es: 'Privacidad', en: 'Privacy' },
    { selector: '.footer-col:nth-child(3) a:nth-child(3)', es: 'Términos', en: 'Terms' },
    { selector: '.footer-bottom > span', es: '© 2026 buildbee. Todos los derechos reservados.', en: '© 2026 buildbee. All rights reserved.' },
    { selector: '.whatsapp-float', attr: 'aria-label', es: 'Escribir por WhatsApp', en: 'Message on WhatsApp' },
  ],
  terminos: [
    { selector: 'title', es: 'Términos de servicio — buildbee', en: 'Terms of service — buildbee' },
    { selector: 'meta[name="description"]', attr: 'content', es: 'Términos de servicio de buildbee: cómo funcionan los proyectos de diseño web, mantenimiento y apps.', en: 'buildbee terms of service: how web design, maintenance, and app projects work.' },
    { selector: '.logo[aria-label]', all: true, attr: 'aria-label', es: 'buildbee — inicio', en: 'buildbee — home' },
    { selector: '.nav-links a:nth-child(1)', es: 'Servicios', en: 'Services' },
    { selector: '.nav-links a:nth-child(2)', es: 'Proceso', en: 'Process' },
    { selector: '.nav-links a:nth-child(3)', es: 'Contacto', en: 'Contact' },
    { selector: '.nav-actions .btn', es: 'Contáctame', en: 'Contact me' },
    { selector: '.legal-main h1', es: 'Términos de servicio', en: 'Terms of service' },
    { selector: '.legal-updated', es: 'Última actualización: septiembre de 2026', en: 'Last updated: September 2026' },
    { selector: '.legal-main .container > p:nth-of-type(2)', es: 'Estos términos aplican a los servicios de diseño web, mantenimiento de sitios y desarrollo de apps que ofrece buildbee (estudio unipersonal con base en Costa Rica). Al contratar un proyecto, aceptas lo siguiente.', en: 'These terms apply to the web design, site maintenance, and app development services offered by buildbee (a one-person studio based in Costa Rica). By hiring a project, you accept the following.' },
    { selector: '.legal-main h2:nth-of-type(1)', es: 'Cómo funciona un proyecto', en: 'How a project works' },
    { selector: '.legal-main h2:nth-of-type(1) + ul li:nth-child(1)', es: 'Me escribes por correo o WhatsApp contándome qué necesitas.', en: 'You contact me by email or WhatsApp and tell me what you need.' },
    { selector: '.legal-main h2:nth-of-type(1) + ul li:nth-child(2)', es: 'Te envío una propuesta con el alcance del trabajo, tiempo estimado de entrega y precio.', en: 'I send you a proposal with project scope, estimated delivery time, and price.' },
    { selector: '.legal-main h2:nth-of-type(1) + ul li:nth-child(3)', es: 'El proyecto empieza una vez que confirmas la propuesta y se acuerda el pago inicial.', en: 'The project starts once you confirm the proposal and the initial payment is agreed.' },
    { selector: '.legal-main h2:nth-of-type(1) + ul li:nth-child(4)', es: 'Al finalizar, te entrego el sitio o app funcionando y te explico cómo usarlo.', en: 'At the end, I deliver the working site or app and explain how to use it.' },
    { selector: '.legal-main h2:nth-of-type(2)', es: 'Pagos', en: 'Payments' },
    { selector: '.legal-main h2:nth-of-type(2) + p', html: true, es: 'El precio y la forma de pago (anticipo y saldo, o pago único) se acuerdan por escrito en la propuesta antes de iniciar cada proyecto. <em>[Aquí se detallará el porcentaje de anticipo exacto una vez definido.]</em>', en: 'The price and payment method (deposit and remaining balance, or single payment) are agreed in writing in the proposal before each project starts. <em>[The exact deposit percentage will be detailed here once defined.]</em>' },
    { selector: '.legal-main h2:nth-of-type(3)', es: 'Cambios de alcance', en: 'Scope changes' },
    { selector: '.legal-main h2:nth-of-type(3) + p', es: 'Si durante el proyecto pides cambios que no estaban en la propuesta original, te aviso antes de aplicarlos si eso afecta el tiempo de entrega o el precio.', en: 'If you request changes during the project that were not in the original proposal, I will notify you before applying them if they affect delivery time or price.' },
    { selector: '.legal-main h2:nth-of-type(4)', es: 'Soporte después de la entrega', en: 'Post-delivery support' },
    { selector: '.legal-main h2:nth-of-type(4) + p', html: true, es: 'Después de entregar el proyecto, reviso y corrijo sin costo cualquier error relacionado con lo acordado. <em>[Aquí se detallará el período exacto de soporte incluido una vez definido.]</em> Cambios adicionales, nuevas funciones o mantenimiento continuo se cotizan aparte.', en: 'After project delivery, I review and fix at no cost any errors related to what was agreed. <em>[The exact included support period will be detailed here once defined.]</em> Additional changes, new features, or ongoing maintenance are quoted separately.' },
    { selector: '.legal-main h2:nth-of-type(5)', es: 'Propiedad del trabajo', en: 'Ownership of work' },
    { selector: '.legal-main h2:nth-of-type(5) + p', es: 'Una vez pagado el proyecto en su totalidad, el sitio web o app entregado es tuyo. Las herramientas, plantillas o librerías de terceros usadas en el desarrollo mantienen sus propias licencias. Salvo que me pidas lo contrario, puedo mostrar el proyecto como parte de mi portafolio.', en: 'Once the project is fully paid, the delivered website or app is yours. Third-party tools, templates, or libraries used in development keep their own licenses. Unless you request otherwise, I may showcase the project in my portfolio.' },
    { selector: '.legal-main h2:nth-of-type(6)', es: 'Cancelaciones', en: 'Cancellations' },
    { selector: '.legal-main h2:nth-of-type(6) + p', html: true, es: 'Puedes cancelar un proyecto en curso avisando por escrito. El trabajo ya realizado hasta ese momento se cobra según lo avanzado. <em>[Aquí se detallará la política de reembolsos una vez definida.]</em>', en: 'You may cancel an ongoing project by written notice. Work completed up to that point is billed according to progress made. <em>[The refund policy will be detailed here once defined.]</em>' },
    { selector: '.legal-main h2:nth-of-type(7)', es: 'Responsabilidad', en: 'Liability' },
    { selector: '.legal-main h2:nth-of-type(7) + p', es: 'El servicio se presta con la mejor diligencia profesional posible. No se garantizan resultados de negocio (como ventas, tráfico o posicionamiento) que dependen de factores fuera de mi control.', en: 'The service is provided with the best professional diligence possible. Business outcomes (such as sales, traffic, or rankings) that depend on factors outside my control are not guaranteed.' },
    { selector: '.legal-main h2:nth-of-type(8)', es: 'Ley aplicable', en: 'Governing law' },
    { selector: '.legal-main h2:nth-of-type(8) + p', es: 'Estos términos se rigen por las leyes de Costa Rica.', en: 'These terms are governed by the laws of Costa Rica.' },
    { selector: '.legal-main h2:nth-of-type(9)', es: 'Contacto', en: 'Contact' },
    { selector: '.legal-main h2:nth-of-type(9) + p', html: true, es: 'Para cualquier duda sobre estos términos, escríbeme a <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a> o por <a href="https://wa.me/50672018483" target="_blank" rel="noopener">WhatsApp</a>.', en: 'For any questions about these terms, write to <a href="mailto:angelor256@gmail.com">angelor256@gmail.com</a> or contact me via <a href="https://wa.me/50672018483" target="_blank" rel="noopener">WhatsApp</a>.' },
    { selector: '.footer-brand p', es: 'Diseño web, mantenimiento y apps para negocios que quieren funcionar sin problemas.', en: 'Web design, maintenance and apps for businesses that want to run without friction.' },
    { selector: '.footer-col:nth-child(1) .footer-col-title', es: 'Servicios', en: 'Services' },
    { selector: '.footer-col:nth-child(1) a:nth-child(2)', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '.footer-col:nth-child(1) a:nth-child(3)', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '.footer-col:nth-child(1) a:nth-child(4)', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '.footer-col:nth-child(2) .footer-col-title', es: 'Contacto', en: 'Contact' },
    { selector: '.footer-col:nth-child(2) a:nth-child(3)', es: 'WhatsApp: +506 7201 8483', en: 'WhatsApp: +506 7201 8483' },
    { selector: '.footer-col:nth-child(3) .footer-col-title', es: 'Legal', en: 'Legal' },
    { selector: '.footer-col:nth-child(3) a:nth-child(2)', es: 'Privacidad', en: 'Privacy' },
    { selector: '.footer-col:nth-child(3) a:nth-child(3)', es: 'Términos', en: 'Terms' },
    { selector: '.footer-bottom > span', es: '© 2026 buildbee. Todos los derechos reservados.', en: '© 2026 buildbee. All rights reserved.' },
    { selector: '.whatsapp-float', attr: 'aria-label', es: 'Escribir por WhatsApp', en: 'Message on WhatsApp' },
  ],
};

const header = document.querySelector('.site-header');
const navToggle = document.getElementById('nav-toggle');
const languageButtons = document.querySelectorAll('.lang-btn');
const languageSwitcher = document.querySelector('.lang-switcher');
const pageKey = document.body.dataset.page;
let currentLanguage = 'es';

const updateMenuAriaLabel = () => {
  if (!navToggle) {
    return;
  }

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-label', isOpen ? MENU_LABELS[currentLanguage].close : MENU_LABELS[currentLanguage].open);
};

const applyTranslations = (lang) => {
  const entries = PAGE_TRANSLATIONS[pageKey] || [];

  entries.forEach((entry) => {
    const value = entry[lang];
    if (!value) {
      return;
    }

    const elements = entry.all ? document.querySelectorAll(entry.selector) : [document.querySelector(entry.selector)];
    elements.forEach((element) => {
      if (!element) {
        return;
      }

      if (entry.attr) {
        element.setAttribute(entry.attr, value);
        return;
      }

      if (entry.html) {
        element.innerHTML = value;
        return;
      }

      element.textContent = value;
    });
  });
};

const applyLanguage = (lang, persist = true) => {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateMenuAriaLabel();

  if (languageSwitcher) {
    languageSwitcher.setAttribute('aria-label', MENU_LABELS[lang].switcher);
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore write errors in private mode or restricted contexts
    }
  }
};

const getInitialLanguage = () => {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore read errors in private mode or restricted contexts
  }

  const htmlLanguage = (document.documentElement.lang || '').toLowerCase();
  if (SUPPORTED_LANGUAGES.includes(htmlLanguage)) {
    return htmlLanguage;
  }

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
};

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    updateMenuAriaLabel();
  });
}

document.querySelectorAll('#nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    if (!header || !navToggle) {
      return;
    }
    header.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    updateMenuAriaLabel();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.lang;
    if (!SUPPORTED_LANGUAGES.includes(selectedLanguage) || selectedLanguage === currentLanguage) {
      return;
    }
    applyLanguage(selectedLanguage);
  });
});

applyLanguage(getInitialLanguage(), false);
