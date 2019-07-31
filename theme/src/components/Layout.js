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

const Layout = ({ children, useTopNav, useSideNav, mainContainerId = 'main-content' }) => {
  return (
    <Page
      isManagedSidebar
      header={<Header useTopNav={useTopNav} />}
      sidebar={useSideNav ? <SideNav useTopNav={useTopNav} /> : null}
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
  children: PropTypes.node,
  useTopNav: PropTypes.bool,
  useSideNav: PropTypes.bool,
  mainContainerId: PropTypes.string
};

export default Layout;
