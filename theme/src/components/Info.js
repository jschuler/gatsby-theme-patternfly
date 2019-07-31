import React from 'react';
import { Alert } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const Info = ({ children, ...props }) => <Alert variant="info" title={children} {...props} />;

Info.propTypes = {
  children: PropTypes.node
};

export default Info;
