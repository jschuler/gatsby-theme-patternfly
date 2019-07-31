const path = require('path');
const remarkSlug = require('remark-slug');

module.exports = () => ({
  siteMetadata: {
    title: 'Gatsby Theme Jam Example Submission'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      name: 'nav',
      options: {
        path: path.resolve(`./src/data`)
      }
    },
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
