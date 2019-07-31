import React from 'react';
import Layout from '../components/Layout';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import Info from '../components/Info';

const Page404 = () => (
  <Layout>
    <PageSection variant={PageSectionVariants.light}>
      <Info>404: This page was not found.</Info>
    </PageSection>
  </Layout>
);

export default Page404;
