const path = require('path');
const remarkSlug = require('remark-slug');

const defaultSideNav = [
  {
    // shows this side bar on the home page
    rootPath: '/',
    nav: [
      {
        title: 'Direct link',
        path: '/direct/link'
      },
      {
        title: 'Expandable link',
        pages: [
          {
            title: 'Expandable one',
            path: '/expandable/one'
          },
          {
            title: 'Expandable two',
            path: '/expandable/two'
          }
        ]
      }
    ]
  },
  {
    // shows this side bar on the /api page
    rootPath: '/api',
    nav: [
      {
        title: 'Direct link',
        path: '/direct/link'
      }
    ]
  }
];

const defaultTopNav = [
  {
    title: 'Documentation',
    path: '/documentation/about'
  },
  {
    title: 'Community',
    path: '/community/about'
  }
];

module.exports = ({ 
  useTopNav = true, 
  useSideNav = true, 
  mainContainerId = 'main-content', 
  sideNav = defaultSideNav, 
  topNav = defaultTopNav 
}) => ({
  siteMetadata: {
    useTopNav,
    useSideNav,
    mainContainerId,
    sideNav,
    topNav
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      name: 'images',
      options: {
        path: path.resolve(`./src/images`)
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-unwrap-images` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              quality: 75
            }
          },
          { resolve: `gatsby-remark-responsive-iframe` },
          { resolve: `gatsby-remark-copy-linked-files` }
        ],
        plugins: ['gatsby-remark-images'],
        remarkPlugins: [remarkSlug],
        defaultLayouts: {
          default: require.resolve('./src/templates/Default.js')
        }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass'
  ]
});
