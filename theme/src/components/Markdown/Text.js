import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content.css';

const Text = ({ children, ...props }) => (
  <div className="theme-pf-c-content" {...props}>
    {children}
  </div>
);

Text.propTypes = {
  children: PropTypes.node
};

export default Text;
