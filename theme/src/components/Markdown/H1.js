import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import PropTypes from 'prop-types';

const H1 = ({ children, ...props }) => (
  <AutolinkHeader headingLevel="h1" size="4xl" {...props}>
    {children}
  </AutolinkHeader>
);

H1.propTypes = {
  children: PropTypes.node
};

export default H1;
