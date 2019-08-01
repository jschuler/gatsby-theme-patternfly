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

const SideNav = ({ sideNav }) => (
  <Location>
    {({ location }) => {
      const normalizePath = path => {
        let normalizedPath = path.endsWith('/') ? path : `${path}/`;
        normalizedPath = normalizedPath.startsWith('/') ? normalizedPath : `/${path}`;
        return normalizedPath;
      };
      const currentPath = normalizePath(location.pathname);
      const allNavs = sideNav;
      const matchingNav = allNavs.filter(navContainer => {
        // search the container if it includes the current path
        // if it does then this side nav is a match for the current page
        if (currentPath.startsWith(navContainer.rootPath)) {
          return true;
        }
        for (let nav of navContainer.nav) {
          if (nav.path && normalizePath(nav.path) === currentPath) {
            return true;
          }
          if (nav.pages) {
            for (let page of nav.pages) {
              if (normalizePath(page.path) === currentPath) {
                return true;
              }
            }
          }
        }
        return false;
      });
      if (matchingNav.length === 0) {
        return;
      }

      const navItems = matchingNav[0].nav;

      const isActiveTest = path => {
        const pathWithSlash = normalizePath(path);
        const currentPathWithSlash = normalizePath(currentPath);
        return currentPathWithSlash.endsWith(pathWithSlash);
      };

      const isActiveTestGroup = pages => {
        for (let page of pages) {
          if (isActiveTest(page.path)) {
            return true;
          }
        }
        return false;
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
              isActive={isActiveTestGroup(item.pages)}
              isExpanded={isActiveTestGroup(item.pages)}
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

SideNav.propTypes = {
  sideNav: PropTypes.any
};

// const SideNav = () => (
//   <StaticQuery
//     query={graphql`
//       query SideNavQuery {
//         allSideNavYaml {
//           edges {
//             node {
              // rootPath
              // nav {
              //   title
              //   path
              //   pages {
              //     path
              //     title
              //   }
              // }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <SideNavWithData data={data} />
//     )}
//   />
// );

export default SideNav;