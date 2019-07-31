import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  PageSidebar,
  Nav,
  NavList,
  NavExpandable,
  NavItem
} from '@patternfly/react-core';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';

const SideNavWithData = ({ data }) => (
  <Location>
    {({ location }) => {
      const currentPath = location.pathname;
      const allNavs = data.allSideNavYaml.edges.map(({ node }) => node);
      const matchingNav = allNavs.filter(nav => currentPath.startsWith(nav.rootPath));

      if (matchingNav.length === 0) {
        return;
      }

      const navItems = matchingNav[0].nav;

      const normalizePath = path => {
        let normalizedPath = path.endsWith('/') ? path : `${path}/`;
        normalizedPath = normalizedPath.startsWith('/') ? normalizedPath : `/${path}`;
        return normalizedPath;
      };

      const isActiveTest = path => {
        const pathWithSlash = normalizePath(path);
        const currentPathWithSlash = normalizePath(currentPath);
        return currentPathWithSlash.endsWith(pathWithSlash);
      };

      const isActiveTestGroup = path => {
        const pathWithSlash = normalizePath(path);
        return currentPath.indexOf(pathWithSlash) > -1;
      };

      // expandable nav groups
      const renderNavGroups = () =>
        navItems.map(item => {
          if (!item.pages) {
            return (
              <NavItem itemId={item.path} key={item.path} isActive={isActiveTest(item.path)}>
                <Link to={item.path}>{item.title}</Link>
              </NavItem>
            );
          }
          return (
            <NavExpandable
              title={item.title}
              groupId={item.title}
              key={item.title}
              isActive={isActiveTestGroup(item.path)}
              isExpanded={isActiveTestGroup(item.path)}
            >
              {renderNavItems(item.title, item.pages)}
            </NavExpandable>
          );
        });

      const renderNavItems = (group, pages) =>
        pages.map(page => (
          <NavItem groupId={group} itemId={page.path} key={page.path} isActive={isActiveTest(page.path)}>
            <Link to={page.path}>{page.title}</Link>
          </NavItem>
        ));

      const PageNav = (
        <Nav aria-label="Side Nav">
          <NavList>
            {renderNavGroups()}
          </NavList>
        </Nav>
      );

      return (
        <PageSidebar nav={PageNav} />
      );
    }}
  </Location>
);

SideNavWithData.propTypes = {
  data: PropTypes.any
};

const SideNav = () => (
  <StaticQuery
    query={graphql`
      query SideNavQuery {
        allSideNavYaml {
          edges {
            node {
              rootPath
              nav {
                title
                path
                pages {
                  path
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SideNavWithData data={data} />
    )}
  />
);

export default SideNav;