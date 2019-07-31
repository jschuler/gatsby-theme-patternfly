import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem
} from '@patternfly/react-core';

const PageBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Section Home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section Landing
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
