import React from 'react';
import ShadowedLayout from 'gatsby-theme-patternfly/src/components/Layout';

const Layout = ({ ...props }) => (
  <ShadowedLayout useTopNav={true} useSideNav={true} {...props} />
);

export default Layout;
