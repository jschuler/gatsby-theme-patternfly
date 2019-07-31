import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import defaultComponents from './defaultComponents';
import PropTypes from 'prop-types';

const MDXProvider = ({ children, components = defaultComponents, ...props }) => (
  <Provider components={components} {...props}>{children}</Provider>
);

MDXProvider.propTypes = {
  children: PropTypes.node,
  components: PropTypes.any
};

export default MDXProvider;
