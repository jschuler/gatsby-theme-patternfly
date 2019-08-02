import React from 'react';
import { Link } from 'gatsby';
import {
  PageHeader
} from '@patternfly/react-core';
import Toolbar from './Toolbar';
import Avatar from './Avatar';
import TopNav from './TopNav';
import Logo from './Logo';
import PropTypes from 'prop-types';

const Header = ({ useTopNav, topNav, showNavToggle = false }) => {
  return (
    <PageHeader
      topNav={useTopNav ? <TopNav topNav={topNav} /> : null}
      logo={<Link to="/"><Logo /></Link>}
      logoComponent='div'
      toolbar={<Toolbar />}
      avatar={<Avatar />}
      showNavToggle={showNavToggle}
    />
  );
};

Header.propTypes = {
  useTopNav: PropTypes.bool,
  topNav: PropTypes.any,
  showNavToggle: PropTypes.bool
};

export default Header;
