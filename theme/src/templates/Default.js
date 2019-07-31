import React from 'react';
import Layout from '../components/Layout';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import PropTypes from 'prop-types';

const Default = ({ children }) => (
  <Layout>
    <PageSection variant={PageSectionVariants.light}>
      {children}
    </PageSection>
  </Layout>
);

Default.propTypes = {
  children: PropTypes.node
};

export default Default;
