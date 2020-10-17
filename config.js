module.exports = {
  siteTitle: 'Personal Portfolio', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Sara Kowalski',
  subHeading: 'Full Stack Web Developer',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/skowalski08',
    },
    {
      style: 'brands',
      icon: 'fa-linkedin',
      name: 'Twitter',
      url: 'https://www.linkedin.com/in/sara-k08/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'sarakowalski08@gmail.com',
    },
  ],
};
