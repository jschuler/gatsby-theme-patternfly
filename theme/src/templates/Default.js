import React from 'react';
import Layout from '../components/Layout';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import Text from '../components/Markdown/Text';

const Default = ({ children }) => (
  <Layout>
    <PageSection variant={PageSectionVariants.light}>
      <Text>
        {children}
      </Text>
    </PageSection>
  </Layout>
);

Default.propTypes = {
  children: PropTypes.node
};

export default Default;
