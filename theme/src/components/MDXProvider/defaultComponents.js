/* eslint-disable */
import React from 'react';
import { H1, H2, H3, H4, H5, H6, Text } from '../Markdown';
import Info from '../Info';
import CodeBlock from '../CodeBlock';
import InlineCode from '../InlineCode';
import patternFlyComponents from './patternFlyComponents';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: props => <p data-pf-content {...props} />,
  blockquote: props => <blockquote data-pf-content {...props} />,
  ul: props => <ul data-pf-content {...props} />,
  ol: props => <ol data-pf-content {...props} />,
  li: props => <li data-pf-content {...props} />,
  table: props => <table data-pf-content {...props} />,
  hr: props => <hr data-pf-content {...props} />,
  a: props => <a data-pf-content {...props} />,
  Text: Text,
  code: CodeBlock,
  inlineCode: InlineCode,
  Info: Info,
  ...patternFlyComponents
};

export default components;
