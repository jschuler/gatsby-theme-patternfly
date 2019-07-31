import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H6 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h6" size="md" {...props}>
    {children}
  </AutolinkHeader>
);

H6.propTypes = {
  children: PropTypes.node
};

export default H6;
