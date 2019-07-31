import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H2 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h2" size="3xl" {...props}>
    {children}
  </AutolinkHeader>
);

H2.propTypes = {
  children: PropTypes.node
};

export default H2;
