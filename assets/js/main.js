const STORAGE_KEY = 'buildbee-language';
const SUPPORTED_LANGUAGES = ['es', 'en'];

const MENU_LABELS = {
  es: { open: 'Abrir menú', close: 'Cerrar menú', switcher: 'Seleccionar idioma' },
  en: { open: 'Open menu', close: 'Close menu', switcher: 'Select language' },
};

const PAGE_TRANSLATIONS = {
  index: [
    {"selector":"title","es":"BuildBeeTech — Desarrollo web, apps y automatización para tu negocio","en":"BuildBeeTech — Web development, apps and automation for your business"},
    {"selector":"meta[name=\"description\"]","attr":"content","es":"BuildBeeTech: diseño páginas web, desarrollo apps a la medida, sitios bilingües y mantenimiento. Cotiza tu proyecto en segundos y recibe respuesta en menos de 24 horas.","en":"BuildBeeTech: website design, custom web apps, bilingual sites and maintenance. Get an instant project estimate and a reply in under 24 hours."},
    {"selector":".logo[aria-label]","all":true,"attr":"aria-label","es":"BuildBeeTech — inicio","en":"BuildBeeTech — home"},
    {"selector":".nav-links a:nth-child(1)","es":"Servicios","en":"Services"},
    {"selector":".nav-links a:nth-child(2)","es":"Cotizador","en":"Estimator"},
    {"selector":".nav-links a:nth-child(3)","es":"Proyectos","en":"Projects"},
    {"selector":".nav-links a:nth-child(4)","es":"Proceso","en":"Process"},
    {"selector":".nav-links a:nth-child(5)","es":"Contacto","en":"Contact"},
    {"selector":".nav-actions .btn","es":"Contáctame","en":"Contact me"},
    {"selector":".badge","es":"⚡ Desarrollo Web, Apps & Automatización","en":"⚡ Web Development, Apps & Automation"},
    {"selector":".hero-copy h1","es":"Convertimos tus ideas en webs y apps que venden.","en":"We turn your ideas into websites and apps that sell."},
    {"selector":".hero-copy .lead","es":"BuildBeeTech diseña y desarrolla sitios web, aplicaciones a la medida y automatizaciones que hacen crecer tu negocio. Rápido, claro y sin sorpresas.","en":"BuildBeeTech designs and develops websites, custom web apps and automations that help your business grow. Fast, clear, no surprises."},
    {"selector":".hero-chips li:nth-child(1)","es":"✓ Entrega en 1–3 semanas","en":"✓ Delivered in 1–3 weeks"},
    {"selector":".hero-chips li:nth-child(2)","es":"✓ 100% responsive","en":"✓ 100% responsive"},
    {"selector":".hero-chips li:nth-child(3)","es":"✓ Soporte incluido","en":"✓ Support included"},
    {"selector":".hero-actions .btn-primary","es":"Cotizar Proyecto","en":"Get a Quote"},
    {"selector":".hero-actions .btn-ghost","es":"Ver Portafolio →","en":"View Portfolio →"},
    {"selector":".fine-print","es":"Respondo en menos de 24 horas","en":"I reply in under 24 hours"},
    {"selector":".hero-panel-eyebrow","es":"Mis servicios","en":"My services"},
    {"selector":".hero-panel-title","es":"Todo lo que tu negocio digital necesita, en un solo lugar.","en":"Everything your digital business needs, in one place."},
    {"selector":".hero-panel-item:nth-of-type(1) .hero-panel-item-title","es":"Diseño web","en":"Web design"},
    {"selector":".hero-panel-item:nth-of-type(1) .hero-panel-item-desc","es":"Sitios rápidos y a tu medida, listos para publicar.","en":"Fast custom sites, ready to launch."},
    {"selector":".hero-panel-item:nth-of-type(2) .hero-panel-item-title","es":"Mantenimiento","en":"Maintenance"},
    {"selector":".hero-panel-item:nth-of-type(2) .hero-panel-item-desc","es":"Reviso y arreglo tu web si algo deja de funcionar.","en":"I review and fix your site if something stops working."},
    {"selector":".hero-panel-item:nth-of-type(3) .hero-panel-item-title","es":"Apps","en":"Apps"},
    {"selector":".hero-panel-item:nth-of-type(3) .hero-panel-item-desc","es":"Convierto tu sitio en una app para tus clientes.","en":"I turn your site into an app for your customers."},
    {"selector":".hero-panel-link","es":"Calcular mi tiempo de entrega →","en":"Calculate my delivery time →"},
    {"selector":"#cotizador .section-head h2","es":"Cotizador instantáneo","en":"Instant project estimator"},
    {"selector":"#cotizador .section-head p","es":"Arma tu proyecto ideal y obtén un estimado del tiempo de entrega en segundos. Sin formularios, sin esperas.","en":"Build your ideal project and get an estimated delivery time in seconds. No forms, no waiting."},
    {"selector":".estimator-fieldset:nth-of-type(1) legend","html":true,"es":"1 · ¿Qué necesitas? <small>(elige uno)</small>","en":"1 · What do you need? <small>(pick one)</small>"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(1) strong","es":"Landing Page","en":"Landing Page"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(1) small","es":"Página de aterrizaje para vender o captar clientes.","en":"A landing page to sell or capture leads."},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(1) .option-meta","es":"~5 días","en":"~5 days"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(2) strong","es":"Sitio Web Completo","en":"Full Website"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(2) small","es":"Varias secciones, blog y presencia de marca.","en":"Multiple sections, blog and brand presence."},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(2) .option-meta","es":"~2 semanas","en":"~2 weeks"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(3) strong","es":"App Web a la Medida","en":"Custom Web App"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(3) small","es":"Reservas, paneles, login y funciones propias.","en":"Bookings, dashboards, logins and custom features."},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(3) .option-meta","es":"~4 semanas","en":"~4 weeks"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(4) strong","es":"Mantenimiento / Arreglo","en":"Maintenance / Fixes"},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(4) small","es":"Actualizaciones, correcciones y soporte mensual.","en":"Updates, bug fixes and monthly support."},
    {"selector":".option-grid:not(.option-grid-extras) .option-card:nth-child(4) .option-meta","es":"~3 días","en":"~3 days"},
    {"selector":".estimator-fieldset:nth-of-type(2) legend","html":true,"es":"2 · Extras <small>(opcional)</small>","en":"2 · Add-ons <small>(optional)</small>"},
    {"selector":".option-grid-extras .option-card:nth-child(1) strong","es":"Sitio bilingüe (ES/EN)","en":"Bilingual site (ES/EN)"},
    {"selector":".option-grid-extras .option-card:nth-child(1) .option-meta","es":"+3 días","en":"+3 days"},
    {"selector":".option-grid-extras .option-card:nth-child(2) strong","es":"SEO básico","en":"Basic SEO"},
    {"selector":".option-grid-extras .option-card:nth-child(2) .option-meta","es":"+2 días","en":"+2 days"},
    {"selector":".option-grid-extras .option-card:nth-child(3) strong","es":"Tienda en línea","en":"Online store"},
    {"selector":".option-grid-extras .option-card:nth-child(3) .option-meta","es":"+1 semana","en":"+1 week"},
    {"selector":".option-grid-extras .option-card:nth-child(4) strong","es":"Reservas en línea","en":"Online bookings"},
    {"selector":".option-grid-extras .option-card:nth-child(4) .option-meta","es":"+4 días","en":"+4 days"},
    {"selector":".estimator-fieldset:nth-of-type(3) legend","es":"3 · Urgencia","en":"3 · Urgency"},
    {"selector":".urgency-grid .urgency-card:nth-child(1) strong","es":"Normal","en":"Standard"},
    {"selector":".urgency-grid .urgency-card:nth-child(1) small","es":"Agendado según disponibilidad","en":"Scheduled based on availability"},
    {"selector":".urgency-grid .urgency-card:nth-child(2) strong","es":"Rápida ⚡","en":"Rush ⚡"},
    {"selector":".urgency-grid .urgency-card:nth-child(2) small","es":"Prioridad esta semana","en":"Priority this week"},
    {"selector":".summary-eyebrow","es":"Tu estimado","en":"Your estimate"},
    {"selector":".summary-note","es":"Estimado referencial. Te enviamos la cotización exacta tras una charla de 15 minutos.","en":"Reference estimate. We send you the exact quote after a 15-minute chat."},
    {"selector":".estimator-summary .summary-cta","es":"Solicitar cotización exacta","en":"Request an exact quote"},
    {"selector":"#servicios .section-head h2","es":"En qué puedo ayudarte","en":"How I can help you"},
    {"selector":"#servicios .section-head p","es":"Tres formas de trabajar juntos, según en qué punto esté tu proyecto.","en":"Three ways to work together depending on where your project is right now."},
    {"selector":"#servicios .card:nth-of-type(1) h3","es":"Diseño de páginas web","en":"Website design"},
    {"selector":"#servicios .card:nth-of-type(1) p","es":"Sitios modernos pensados para convertir, no solo para verse bien.","en":"Modern sites built to convert, not just to look good."},
    {"selector":"#servicios .card:nth-of-type(1) .card-list li:nth-child(1)","es":"Diseño a tu medida desde cero","en":"Custom design from scratch"},
    {"selector":"#servicios .card:nth-of-type(1) .card-list li:nth-child(2)","es":"Carga rápida en cualquier pantalla","en":"Fast loading on any screen"},
    {"selector":"#servicios .card:nth-of-type(1) .card-list li:nth-child(3)","es":"Listos para publicar y compartir","en":"Ready to publish and share"},
    {"selector":"#servicios .card:nth-of-type(2) h3","es":"Arreglo y mantenimiento","en":"Fixes and maintenance"},
    {"selector":"#servicios .card:nth-of-type(2) p","es":"¿Tu web se rompió o quedó desactualizada? La dejo como nueva.","en":"Is your website broken or outdated? I bring it back to life."},
    {"selector":"#servicios .card:nth-of-type(2) .card-list li:nth-child(1)","es":"Diagnóstico rápido de errores","en":"Quick error diagnosis"},
    {"selector":"#servicios .card:nth-of-type(2) .card-list li:nth-child(2)","es":"Actualizaciones de contenido y diseño","en":"Content and design updates"},
    {"selector":"#servicios .card:nth-of-type(2) .card-list li:nth-child(3)","es":"Planes mensuales de soporte","en":"Monthly support plans"},
    {"selector":"#servicios .card:nth-of-type(3) h3","es":"Apps a partir de tu web","en":"Apps from your website"},
    {"selector":"#servicios .card:nth-of-type(3) p","es":"Convierto tu sitio en una app que tus clientes llevan en el bolsillo.","en":"I turn your site into an app your customers carry in their pocket."},
    {"selector":"#servicios .card:nth-of-type(3) .card-list li:nth-child(1)","es":"Funciona en iOS y Android","en":"Works on iOS and Android"},
    {"selector":"#servicios .card:nth-of-type(3) .card-list li:nth-child(2)","es":"Paneles de administración incluidos","en":"Admin panels included"},
    {"selector":"#servicios .card:nth-of-type(3) .card-list li:nth-child(3)","es":"Aprovecha lo que ya tienes","en":"Makes the most of what you already have"},
    {"selector":"#proyectos .section-head h2","es":"Casos de éxito","en":"Success stories"},
    {"selector":"#proyectos .section-head p","es":"Proyectos reales, construidos de principio a fin. Así se ve trabajar con BuildBeeTech.","en":"Real projects, built end-to-end. This is what working with BuildBeeTech looks like."},
    {"selector":".portfolio-tile:nth-child(1) img","attr":"alt","es":"Captura de inicio del sitio Pilates con Jime","en":"Homepage screenshot of the Pilates con Jime website"},
    {"selector":".portfolio-tile:nth-child(1) .portfolio-tag","es":"Sitio web · App · Panel de administración","en":"Website · App · Admin panel"},
    {"selector":".portfolio-tile:nth-child(1) p","es":"Reserva de clases, calendario y gestión de clientes para una instructora de pilates a domicilio.","en":"Class booking, calendar and client management for an in-home pilates instructor."},
    {"selector":".portfolio-tile:nth-child(1) .portfolio-links .btn-primary","es":"Ver proyecto","en":"View project"},
    {"selector":".portfolio-tile:nth-child(1) .portfolio-links .btn-ghost","es":"Ver código","en":"View code"},
    {"selector":".portfolio-tile:nth-child(2) .portfolio-tag","es":"Próximamente","en":"Coming soon"},
    {"selector":".portfolio-tile:nth-child(2) h3","es":"Tu proyecto aquí","en":"Your project here"},
    {"selector":".portfolio-tile:nth-child(2) p","es":"Soy el siguiente caso de éxito: cuéntame tu idea y la construimos juntos esta misma semana.","en":"I am the next success story: tell me your idea and we build it together this week."},
    {"selector":".portfolio-tile:nth-child(2) .portfolio-links .btn-primary","es":"Cotizar mi proyecto","en":"Quote my project"},
    {"selector":"#proceso .section-head h2","es":"Cómo trabajamos juntos","en":"How we work together"},
    {"selector":"#proceso .section-head p","es":"Un proceso simple, sin letra pequeña, del primer mensaje a la entrega final.","en":"A simple process, with no fine print, from first message to final delivery."},
    {"selector":".steps-grid .step:nth-child(1) h3","es":"Cuéntame tu proyecto","en":"Tell me about your project"},
    {"selector":".steps-grid .step:nth-child(1) p","es":"Escríbeme y hablamos sobre lo que necesitas: una web nueva, un arreglo o una app.","en":"Send me a message and we’ll discuss what you need: a new site, a fix, or an app."},
    {"selector":".steps-grid .step:nth-child(2) h3","es":"Preparo una propuesta","en":"I prepare a proposal"},
    {"selector":".steps-grid .step:nth-child(2) p","es":"Te envío un plan claro con alcance y tiempos, sin sorpresas ni letra pequeña.","en":"I send you a clear plan with scope and timeline, no surprises and no fine print."},
    {"selector":".steps-grid .step:nth-child(3) h3","es":"Entrego y doy soporte","en":"I deliver and support"},
    {"selector":".steps-grid .step:nth-child(3) p","es":"Recibes tu proyecto terminado, y sigo disponible si necesitas ajustes después.","en":"You receive your finished project, and I remain available if you need adjustments later."},
    {"selector":".about .eyebrow","es":"Sobre mí","en":"About me"},
    {"selector":".about-inner p","html":true,"es":"Fundador de BuildBeeTech. Soy diseñador y desarrollador web freelance. Me dedico a construir sitios y aplicaciones que resuelven problemas reales, como <a href=\"#proyectos\">Pilates con Jime</a>, una app que ayuda a gestionar clases y reservas de principio a fin. Trabajo de cerca con cada cliente, desde la primera idea hasta que el proyecto está funcionando.","en":"Founder of BuildBeeTech. I’m a freelance web designer and developer. I build sites and apps that solve real problems, such as <a href=\"#proyectos\">Pilates con Jime</a>, an app that helps manage classes and bookings end-to-end. I work closely with each client, from the first idea until the project is live."},
    {"selector":"#contacto h2","es":"Hablemos de tu proyecto","en":"Let’s talk about your project"},
    {"selector":".contact-inner > p","es":"Cuéntame qué necesitas y te responderé en menos de 24 horas.","en":"Tell me what you need and I’ll reply in under 24 hours."},
    {"selector":".contact-label","es":"Email","en":"Email"},
    {"selector":".footer-brand p","es":"Desarrollo web, apps a la medida y soluciones digitales para negocios que quieren funcionar sin problemas.","en":"Web development, custom apps and digital solutions for businesses that want to run without friction."},
    {"selector":".footer-col:nth-child(1) .footer-col-title","es":"Servicios","en":"Services"},
    {"selector":".footer-col:nth-child(1) a:nth-child(2)","es":"Diseño de páginas web","en":"Website design"},
    {"selector":".footer-col:nth-child(1) a:nth-child(3)","es":"Arreglo y mantenimiento","en":"Fixes and maintenance"},
    {"selector":".footer-col:nth-child(1) a:nth-child(4)","es":"Apps a partir de tu web","en":"Apps from your website"},
    {"selector":".footer-col:nth-child(2) .footer-col-title","es":"Contacto","en":"Contact"},
    {"selector":".footer-col:nth-child(3) .footer-col-title","es":"Legal","en":"Legal"},
    {"selector":".footer-col:nth-child(3) a:nth-child(2)","es":"Privacidad","en":"Privacy"},
    {"selector":".footer-col:nth-child(3) a:nth-child(3)","es":"Términos","en":"Terms"},
    {"selector":".footer-bottom > span","es":"© 2026 BuildBeeTech. Todos los derechos reservados.","en":"© 2026 BuildBeeTech. All rights reserved."},
  ],
  privacidad: [
    { selector: 'title', es: 'Política de privacidad — BuildBeeTech', en: 'Privacy policy — BuildBeeTech' },
    { selector: 'meta[name="description"]', attr: 'content', es: 'Política de privacidad de BuildBeeTech: qué datos se recogen a través de este sitio y cómo se usan.', en: 'BuildBeeTech privacy policy: what data is collected through this site and how it is used.' },
    { selector: '.logo[aria-label]', all: true, attr: 'aria-label', es: 'BuildBeeTech — inicio', en: 'BuildBeeTech — home' },
    { selector: '.nav-links a:nth-child(1)', es: 'Servicios', en: 'Services' },
    { selector: '.nav-links a:nth-child(2)', es: 'Proceso', en: 'Process' },
    { selector: '.nav-links a:nth-child(3)', es: 'Contacto', en: 'Contact' },
    { selector: '.nav-actions .btn', es: 'Contáctame', en: 'Contact me' },
    { selector: '.legal-main h1', es: 'Política de privacidad', en: 'Privacy policy' },
    { selector: '.legal-updated', es: 'Última actualización: septiembre de 2026', en: 'Last updated: September 2026' },
    { selector: '.legal-main .container > p:nth-of-type(2)', es: 'BuildBeeTech es un estudio de desarrollo web y soluciones digitales con base en Costa Rica. Esta página explica qué información se recoge a través de este sitio y cómo se utiliza.', en: 'BuildBeeTech is a web development and digital solutions studio based in Costa Rica. This page explains what information is collected through this website and how it is used.' },
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
    { selector: '.footer-brand p', es: 'Desarrollo web, apps a la medida y soluciones digitales para negocios que quieren funcionar sin problemas.', en: 'Web development, custom apps and digital solutions for businesses that want to run without friction.' },
    { selector: '.footer-col:nth-child(1) .footer-col-title', es: 'Servicios', en: 'Services' },
    { selector: '.footer-col:nth-child(1) a:nth-child(2)', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '.footer-col:nth-child(1) a:nth-child(3)', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '.footer-col:nth-child(1) a:nth-child(4)', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '.footer-col:nth-child(2) .footer-col-title', es: 'Contacto', en: 'Contact' },
    { selector: '.footer-col:nth-child(2) a:nth-child(3)', es: 'WhatsApp: +506 7201 8483', en: 'WhatsApp: +506 7201 8483' },
    { selector: '.footer-col:nth-child(3) .footer-col-title', es: 'Legal', en: 'Legal' },
    { selector: '.footer-col:nth-child(3) a:nth-child(2)', es: 'Privacidad', en: 'Privacy' },
    { selector: '.footer-col:nth-child(3) a:nth-child(3)', es: 'Términos', en: 'Terms' },
    { selector: '.footer-bottom > span', es: '© 2026 BuildBeeTech. Todos los derechos reservados.', en: '© 2026 BuildBeeTech. All rights reserved.' },
    { selector: '.whatsapp-float', attr: 'aria-label', es: 'Escribir por WhatsApp', en: 'Message on WhatsApp' },
  ],
  terminos: [
    { selector: 'title', es: 'Términos de servicio — BuildBeeTech', en: 'Terms of service — BuildBeeTech' },
    { selector: 'meta[name="description"]', attr: 'content', es: 'Términos de servicio de BuildBeeTech: cómo funcionan los proyectos de diseño web, mantenimiento y apps.', en: 'BuildBeeTech terms of service: how web design, maintenance, and app projects work.' },
    { selector: '.logo[aria-label]', all: true, attr: 'aria-label', es: 'BuildBeeTech — inicio', en: 'BuildBeeTech — home' },
    { selector: '.nav-links a:nth-child(1)', es: 'Servicios', en: 'Services' },
    { selector: '.nav-links a:nth-child(2)', es: 'Proceso', en: 'Process' },
    { selector: '.nav-links a:nth-child(3)', es: 'Contacto', en: 'Contact' },
    { selector: '.nav-actions .btn', es: 'Contáctame', en: 'Contact me' },
    { selector: '.legal-main h1', es: 'Términos de servicio', en: 'Terms of service' },
    { selector: '.legal-updated', es: 'Última actualización: septiembre de 2026', en: 'Last updated: September 2026' },
    { selector: '.legal-main .container > p:nth-of-type(2)', es: 'Estos términos aplican a los servicios de diseño web, mantenimiento de sitios y desarrollo de apps que ofrece BuildBeeTech (estudio de desarrollo web con base en Costa Rica). Al contratar un proyecto, aceptas lo siguiente.', en: 'These terms apply to the web design, site maintenance, and app development services offered by BuildBeeTech (a web development studio based in Costa Rica). By hiring a project, you accept the following.' },
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
    { selector: '.footer-brand p', es: 'Desarrollo web, apps a la medida y soluciones digitales para negocios que quieren funcionar sin problemas.', en: 'Web development, custom apps and digital solutions for businesses that want to run without friction.' },
    { selector: '.footer-col:nth-child(1) .footer-col-title', es: 'Servicios', en: 'Services' },
    { selector: '.footer-col:nth-child(1) a:nth-child(2)', es: 'Diseño de páginas web', en: 'Website design' },
    { selector: '.footer-col:nth-child(1) a:nth-child(3)', es: 'Arreglo y mantenimiento', en: 'Fixes and maintenance' },
    { selector: '.footer-col:nth-child(1) a:nth-child(4)', es: 'Apps a partir de tu web', en: 'Apps from your website' },
    { selector: '.footer-col:nth-child(2) .footer-col-title', es: 'Contacto', en: 'Contact' },
    { selector: '.footer-col:nth-child(2) a:nth-child(3)', es: 'WhatsApp: +506 7201 8483', en: 'WhatsApp: +506 7201 8483' },
    { selector: '.footer-col:nth-child(3) .footer-col-title', es: 'Legal', en: 'Legal' },
    { selector: '.footer-col:nth-child(3) a:nth-child(2)', es: 'Privacidad', en: 'Privacy' },
    { selector: '.footer-col:nth-child(3) a:nth-child(3)', es: 'Términos', en: 'Terms' },
    { selector: '.footer-bottom > span', es: '© 2026 BuildBeeTech. Todos los derechos reservados.', en: '© 2026 BuildBeeTech. All rights reserved.' },
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
    if (typeof window.refreshEstimator === 'function') {
      window.refreshEstimator();
    }
  });
});

applyLanguage(getInitialLanguage(), false);

/* ============================================================
   Cotizador interactivo (estimator) — cálculo en tiempo real
   ============================================================ */
const ESTIMATOR_CATALOG = {
  types: {
    landing: { es: 'Landing Page', en: 'Landing Page', days: 5 },
    sitio: { es: 'Sitio Web Completo', en: 'Full Website', days: 10 },
    app: { es: 'App Web a la Medida', en: 'Custom Web App', days: 20 },
    mantenimiento: { es: 'Mantenimiento / Arreglo', en: 'Maintenance / Fixes', days: 3 },
  },
  extras: {
    bilingue: { es: 'Sitio bilingüe (ES/EN)', en: 'Bilingual site (ES/EN)', days: 3 },
    seo: { es: 'SEO básico', en: 'Basic SEO', days: 2 },
    ecommerce: { es: 'Tienda en línea', en: 'Online store', days: 5 },
    reservas: { es: 'Reservas en línea', en: 'Online bookings', days: 4 },
  },
  urgency: {
    normal: { es: 'Normal', en: 'Standard', speedFactor: 1 },
    rapida: { es: 'Rápida ⚡', en: 'Rush ⚡', speedFactor: 0.75 },
  },
  ui: {
    businessDaysEs: 'días hábiles',
    businessDaysEn: 'business days',
    approx: '≈',
  },
};

const computeEstimate = () => {
  const typeInput = document.querySelector('input[name="est-type"]:checked');
  if (!typeInput) {
    return null;
  }

  const base = ESTIMATOR_CATALOG.types[typeInput.value];
  let days = base.days;
  const breakdown = [{ key: typeInput.value, item: base }];

  document.querySelectorAll('input[name="est-extra"]:checked').forEach((extraInput) => {
    const extra = ESTIMATOR_CATALOG.extras[extraInput.value];
    if (!extra) {
      return;
    }
    days += extra.days;
    breakdown.push({ key: extraInput.value, item: extra });
  });

  const urgencyInput = document.querySelector('input[name="est-urgency"]:checked');
  const urgency = urgencyInput ? ESTIMATOR_CATALOG.urgency[urgencyInput.value] : ESTIMATOR_CATALOG.urgency.normal;

  days = Math.max(2, Math.ceil(days * urgency.speedFactor));

  return { days, breakdown, urgency };
};

const renderEstimator = () => {
  const daysEl = document.getElementById('est-days');
  const breakdownEl = document.getElementById('est-breakdown');
  const ctaEl = document.getElementById('est-cta');
  if (!daysEl || !breakdownEl) {
    return;
  }

  const result = computeEstimate();
  if (!result) {
    return;
  }

  const lang = currentLanguage;
  const businessDays = lang === 'en' ? ESTIMATOR_CATALOG.ui.businessDaysEn : ESTIMATOR_CATALOG.ui.businessDaysEs;

  daysEl.textContent = '⏱ ' + ESTIMATOR_CATALOG.ui.approx + ' ' + result.days + ' ' + businessDays;

  breakdownEl.innerHTML = '';
  result.breakdown.forEach(({ item }) => {
    const li = document.createElement('li');
    li.textContent = item[lang] + ' · +' + item.days + ' d';
    breakdownEl.appendChild(li);
  });

  if (ctaEl) {
    const summaryText = encodeURIComponent(
      (lang === 'en' ? 'Hi BuildBeeTech! From your estimator: ' : '¡Hola BuildBeeTech! Desde tu cotizador: ')
      + result.breakdown.map(({ item }) => item[lang]).join(' + ')
      + (lang === 'en'
        ? ' (Rush: ' + (result.urgency === ESTIMATOR_CATALOG.urgency.rapida ? 'yes' : 'no') + '). Estimated delivery: ' + result.days + ' days. I would like an exact quote.'
        : ' (Urgencia rápida: ' + (result.urgency === ESTIMATOR_CATALOG.urgency.rapida ? 'sí' : 'no') + '). Entrega estimada: ' + result.days + ' días. Quiero una cotización exacta.')
    );
    ctaEl.href = 'mailto:buildbeetech@gmail.com?subject=' + encodeURIComponent(lang === 'en' ? 'Project quote request' : 'Solicitud de cotización') + '&body=' + summaryText;
  }

  daysEl.classList.remove('is-updated');
  void daysEl.offsetWidth; // reinicia la animación
  daysEl.classList.add('is-updated');
};

window.refreshEstimator = renderEstimator;

document.querySelectorAll('#cotizador input[type="radio"], #cotizador input[type="checkbox"]').forEach((input) => {
  input.addEventListener('change', renderEstimator);
});

renderEstimator();
