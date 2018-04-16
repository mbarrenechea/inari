// https://github.com/fridays/next-route
const nextRoutes = require('next-routes');

const routes = nextRoutes();

// ========================= APP ROUTES =====================
routes.add('home', '/', 'home');

// ========================= About ROUTES =====================
routes.add('about', '/about', 'about');
routes.add('about-intro', '/about/intro', 'about/intro');
routes.add('about-what-is-psa', '/about/what-is-psa', 'about/what-is-psa');
routes.add('about-background-and-research', '/about/background-and-research', 'about/background-and-research');
routes.add('about-sites', '/about/sites', 'about/sites');
routes.add('about-get-started', '/about/get-started', 'about/get-started');
routes.add('about-faqs', '/about/faqs', 'about/faqs');

// ========================= Implementation ROUTES =====================
routes.add('implementation', '/implementation', 'implementation');
routes.add('implementation-intro', '/implementation/intro', 'implementation/intro');
routes.add('implementation-am-i-ready', '/implementation/am-i-ready', 'implementation/am-i-ready');
routes.add('implementation-paths', '/implementation/guides', 'implementation/guides');
routes.add('implementation-guides', '/implementation/guides/:pathId', 'implementation/guides');
routes.add('implementation-guide', '/implementation/guides/:pathId/:guideId', 'implementation/guides');
routes.add('implementation-contact', '/implementation/contact', 'implementation/contact');
routes.add('implementation-login', '/implementation/login', 'implementation/login');
routes.add('implementation-logout', '/implementation/logout', 'implementation/logout');
routes.add('implementation-user', '/implementation/user', 'implementation/user');

module.exports = routes;
