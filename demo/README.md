# Getting started

This project is a [Gatsby theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) that incorporates the [PatternFly](https://www.patternfly.org/v4/) design system. Using the theme makes it easy to create a gatsby site that is responsive and accessible.

## First steps

1. **Create your site** – use the gatsby CLI to bootstrap your site

  ```sh
  gatsby new my-patternfly-site
  ```

1. **Add the PatternFly theme**
  ```
  yarn add gatsby-theme-patternfly
  ```
  or
  ```
  npm install gatsby-theme-patternfly
  ```

1. **Edit gatsby-config.js**
  ```
  const topNav = [
    {
      // The text displayed on the item
      title: 'Documentation',
      // The root path that enables/activates the item
      rootPath: '/documentation',
      // The page that is actually linked to when the item is clicked
      path: '/documentation/about'
    }
  ];
  
  const sideNav = [
    {
      // shows this side nav on the home page
      rootPath: '/',
      nav: [
        {
          // The text displayed on the item
          title: 'Direct link',
          // The page that is linked to
          path: '/direct/link'
        },
        {
          title: 'Expandable link',
          pages: [
            {
              title: 'Expandable link',
              path: '/expandable/link'
            }
          ]
        }
      ]
    }
  ];

  module.exports = {
    // add plugin gatsby-theme-patternfly
    plugins: [
      {
        resolve: 'gatsby-theme-patternfly',
        options: {
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
  }
  ```

1. **Create corresponding mdx files that match the path given in the gatsby-config**

  For example, for the path `/direct/link` in the config, create the file `src/pages/direct/link.mdx`.

1. **Start developing** – navigate into your directory with `cd my-patternfly-site`.

  Start it up with `gatsby develop`

1. **Make some changes!** – open [localhost:8000](//localhost:8000) in your browser to see your site running.

   Each of the Items in your side bar correlates to a MDX file in your `src/pages/` directory. Navigate to a site and try editing the corresponding markdown file. You'll be able to see it update live!

## Pages and navigation items

- Navigation items are added by modifying the gatsby-theme-patternfly plugin in the gatsby-config.js file. **Restart the development server after modifications to see the changes.** If you don't want side navs or a top nav, you can modify the `useTopNav` and `useSideNav` configuration for the plugin .
- You can have page specific side navs by editing the `rootPath` values in the plugin config.
- Pages are created from `*.mdx` files. Add pages to the `/src/pages` directory. If you have a side nav item path of `/docs/api/button`, then you need a corresponding page under `/src/pages/docs/api/button.mdx`.

## Overriding the theme

The main configuration for the site (`/gatsby-config.js`) is provided by and inherited from the theme. You can override the config through your own config. Similarly, you can override the theme components by creating components of the same name under `/src/gatsby-theme-patternfly/components`.
