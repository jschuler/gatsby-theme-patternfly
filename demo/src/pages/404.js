import React from 'react';
import Component404 from 'gatsby-theme-patternfly/src/components/Component404';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Page404 = () => (
  <Component404>
    <Link to="/">Return to homepage</Link>
  </Component404>
);

Page404.propTypes = {
  children: PropTypes.node
};

export default Page404;
