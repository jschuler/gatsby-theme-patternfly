import React from 'react';
import { TextContent } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const Text = ({ children, ...props }) => (
  <TextContent {...props}>
    {children}
  </TextContent>
);

Text.propTypes = {
  children: PropTypes.node
};

export default Text;
