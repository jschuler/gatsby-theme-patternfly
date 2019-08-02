import React from 'react';
import { GoLink } from 'react-icons/go';
import { Title } from '@patternfly/react-core';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const hoverAnchor = css`
  & .anchor {
    color: black;
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  & .anchor svg {
    visibility: hidden;
  }
  &:hover,&:focus {
    & .anchor svg {
      visibility: visible;
    }
  }
`;

const slugger = value => {
  const whitespace = /\s/g;
  const specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  return value
    .toLowerCase()
    .trim()
    .replace(specials, '')
    .replace(whitespace, '-');
};

const Anchor = ({ id, string }) => (
  <a className="anchor" href={`#${id}`} aria-label={`${string} permalink`}>
    <GoLink size="16" style={{ verticalAlign: 'middle' }} />
  </a>
);

Anchor.propTypes = {
  id: PropTypes.string,
  string: PropTypes.string
};

const AutolinkHeader = ({ children, headingLevel, size, ...props }) => {
  const string = React.Children.map(
    children,
    child => (child.props ? child.props.children : child)
  ).join('');

  const slug = slugger(string);

  return (
    <Title id={slug} headingLevel={headingLevel} size={size} css={hoverAnchor} data-pf-content {...props}>
      <Anchor id={slug} string={string} />
      {children}
    </Title>
  );
};

AutolinkHeader.propTypes = {
  children: PropTypes.node.isRequired,
  headingLevel: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

AutolinkHeader.defaultProps = { 
  headingLevel: 'h2', 
  size: '3xl' 
};

export default AutolinkHeader;
