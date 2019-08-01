import React from 'react';
import {
  Page
} from '@patternfly/react-core';
import SideNav from './SideNav';
import Header from './Header';
// import Breadcrumb from './Breadcrumb';
import SkipToContent from './SkipToContent';
import MDXProvider from './MDXProvider';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          useTopNav
          useSideNav
          mainContainerId
          sideNav {
            rootPath
            nav {
              title
              path
              pages {
                path
                title
              }
            }
          }
          topNav {
            title
            path
          }
        }
      }
    }
  `);
  const { useTopNav, useSideNav, mainContainerId, topNav, sideNav } = data.site.siteMetadata;

  return (
    <Page
      isManagedSidebar
      header={<Header useTopNav={useTopNav} topNav={topNav} />}
      sidebar={useSideNav ? <SideNav sideNav={sideNav} /> : null}
      skipToContent={<SkipToContent mainContainerId={mainContainerId} />}
      mainContainerId={mainContainerId}
      // breadcrumb={<Breadcrumb />}
      style={{ height: '100vh' }}
    >
      <MDXProvider>{children}</MDXProvider>
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
