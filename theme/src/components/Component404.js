import React from 'react';
import Layout from './Layout';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import Info from './Info';

const Component404 = ({ children }) => (
  <Layout>
    <PageSection variant={PageSectionVariants.light}>
      <Info>404: This page was not found.</Info>
      {children}
    </PageSection>
  </Layout>
);

Component404.propTypes = {
  children: PropTypes.node
};

export default Component404;
