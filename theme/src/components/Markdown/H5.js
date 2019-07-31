import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H5 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h5" size="lg" {...props}>
    {children}
  </AutolinkHeader>
);

H5.propTypes = {
  children: PropTypes.node
};

export default H5;
