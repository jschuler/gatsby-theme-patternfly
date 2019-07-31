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
  module.exports = {
    // add plugin gatsby-theme-patternfly
    plugins: ["gatsby-theme-patternfly"],
  }
  ```

1. **Add navigation yaml files**
  ```
  cd src/data # create the data directory if not already there
  ```
  - Create a side-nav.yml file under `src/data`. Example contents:
  ```
    - rootPath: /
      nav:
      - title: About
        path: /about
      - title: Components
        path: /components
        pages:
        - title: Body
          path: /components/body
        - title: Headings
          path: /components/headings

    - rootPath: /contributions
      nav:
      - title: How to contribute
        path: /contributions/how-to-contribute
      - title: Community
        path: /contributions/community
  ```
  The rootPath ensures that the side nav only appears on the relevant page

  - Create a top-nav.yml file under `src/data`. Example contents:
  ```
    - title: Contributions
      path: /contributions/how-to-contribute
  ```
  This creates a new top nav entry for Contributions

1. **Create corresponding mdx files that match the path given in the yaml files**

  For example, for the path `/components/body` in the yaml file, create the file `src/pages/components/body.mdx`.

1. **Start developing** – navigate into your directory with `cd my-patternfly-site`.

  Start it up with `gatsby develop`

1. **Make some changes!** – open [localhost:8000](//localhost:8000) in your browser to see your site running.

   Each of the Items in your side bar correlates to a MDX file in your `src/pages/` directory. Navigate to a site and try editing the corresponding markdown file. You'll be able to see it update live!

## Pages and navigation items

- Navigation items are added by modifying the yaml files under `/src/data`. If you don't want a side nav or a top nav, you can modify the corresponding props at `/src/gatsby-theme-patternfly/components/Layout.js`.
- You can have page specific side navs by editing the `rootPath` values in `/src/data/side-nav.yml`.
- Pages are created from `*.mdx` files. Add pages to the `/src/pages` directory. If you have a side nav item path of `/docs/api/button`, then you need a corresponding page under `/src/pages/docs/api/button.mdx`.

## Overriding the theme

The main configuration for the site (`/gatsby-config.js`) is provided by and inherited from the theme. You can override the config through your own config. Similarly, you can override the theme components by creating components of the same name under `/src/gatsby-theme-patternfly/components`.
