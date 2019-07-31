import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const style = css`
  display: inline-block;
  font-size: 16px !important;
  background-color: #fff;
  padding-top: 1px;
  padding-right: 8px;
  padding-bottom: 1px;
  padding-left: 8px;
  border: 1px solid #ededed;
  white-space: normal;
  word-break: break-all;
`;

const InlineCode = ({ children, ...props }) => (
  <code css={style} {...props}>
    {children}
  </code>
);

InlineCode.propTypes = {
  children: PropTypes.node
};

export default InlineCode;
