import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H4 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h4" size="xl" {...props}>
    {children}
  </AutolinkHeader>
);

H4.propTypes = {
  children: PropTypes.node
};

export default H4;
