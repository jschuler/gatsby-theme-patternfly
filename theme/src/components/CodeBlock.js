import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const codeBlockStyle = css`
  margin: 15px 0;
  padding: 20px;
`;

const liveCodeBlockStyle = css`
  margin: 15px 0;
  padding: 20px;
  background-color: black;
`;

const CodeBlock = ({ children, className = '', live }) => {
  const language = className.replace(/language-/, '');
  const removeTrailingEmptyLine = lines => {
    const [lastLine] = lines.splice(-1);
    if (lastLine[0].empty) {
      return lines;
    }
    return [...lines, lastLine];
  };
  if (live === 'true') {
    return (
      <div css={liveCodeBlockStyle}>
        <LiveProvider code={children}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} css={codeBlockStyle} style={{ ...style }}>
          {removeTrailingEmptyLine(tokens).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  live: PropTypes.string
};

export default CodeBlock;