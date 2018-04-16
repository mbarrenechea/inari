export default {
  items: [
    {
      id: 'about',
      label: 'About the PSA',
      route: 'about',
      params: { id: 'introduction' },
      pathnames: [
        '/about/intro',
        '/about/what-is-psa',
        '/about/background-and-research',
        '/about/sites',
        '/about/get-started',
        '/about/faqs'
      ],
      children: [
        { label: 'Introduction', route: 'about-intro' },
        { label: 'What is the PSA', route: 'about-what-is-psa' },
        { label: 'Background and Research', route: 'about-background-and-research' },
        { label: 'Map: PSA sites', route: 'about-sites' },
        { label: 'Get started', route: 'about-get-started' },
        { label: 'FAQs', route: 'about-faqs' }
      ]
    },
    {
      id: 'implementation',
      label: 'Implementation',
      route: 'implementation',
      params: { id: 'introduction' },
      pathnames: [
        '/implementation/implementation-intro',
        '/implementation/implementation-am-i-ready',
        '/implementation/implementation-paths',
        '/implementation/implementation-contact',
        '/implementation/implementation-login',
        '/implementation/implementation-logout',
        '/implementation/implementation-user'
      ],
      children: [
        { label: 'Introduction', route: 'implementation-intro' },
        { label: 'Am I ready?', route: 'implementation-am-i-ready' },
        { label: 'PSA Implementation Guides', route: 'implementation-paths' },
        { label: 'Contact', route: 'implementation-contact' },
        { label: 'Login', route: 'login' },
        { label: 'Logout', route: 'logout' },
        { label: 'User', route: 'user' }
      ]
    }
  ]
};
