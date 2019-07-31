import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H3 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h3" size="2xl" {...props}>
    {children}
  </AutolinkHeader>
);

H3.propTypes = {
  children: PropTypes.node
};

export default H3;
