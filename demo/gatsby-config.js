/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const topNav = [
  {
    title: 'Documentation',
    rootPath: '/documentation',
    path: '/documentation/about'
  }
];

const sideNav = [
  {
    rootPath: '/documentation',
    nav: [
      {
        title: 'About',
        path: '/documentation/about'
      },
      {
        title: 'Components',
        path: '/documentation/components',
        pages: [
          {
            title: 'PatternFly',
            path: '/documentation/components/patternfly'
          },
          {
            title: 'Headings',
            path: '/documentation/components/headings'
          },
          {
            title: 'Body text',
            path: '/documentation/components/body'
          },
          {
            title: 'Code',
            path: '/documentation/components/code'
          },
          {
            title: 'Images',
            path: '/documentation/components/images'
          },
          {
            title: 'iFrames',
            path: '/documentation/components/iframes'
          }
        ]
      }
    ]
  }
];

module.exports = {
  pathPrefix: `/test`,
  plugins: [
    {
      resolve: 'gatsby-theme-patternfly',
      options: {
        // id of the main content container
        mainContainerId: 'main-content',
        // enable or disable the top nav (default true)
        useTopNav: true,
        // enable or disable the side navs (default true)
        useSideNav: true,
        // one or more top navigation definitions
        topNav: topNav,
        // one or more side navigation definitions
        sideNav: sideNav
      }
    }
  ]
};
