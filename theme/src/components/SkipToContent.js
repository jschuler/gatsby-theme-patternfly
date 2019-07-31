import React from 'react';
import {
  SkipToContent
} from '@patternfly/react-core';
import PropTypes from 'prop-types';

const PageSkipToContent = ({ mainContainerId }) => {
  return (
    <SkipToContent href={`#${mainContainerId}`}>Skip to Content</SkipToContent>
  );
};

PageSkipToContent.propTypes = {
  mainContainerId: PropTypes.string
};

export default PageSkipToContent;
