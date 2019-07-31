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

const Header = ({ useTopNav }) => {
  return (
    <PageHeader
      topNav={useTopNav ? <TopNav /> : null}
      logo={<Link to="/"><Logo /></Link>}
      logoComponent='div'
      toolbar={<Toolbar />}
      avatar={<Avatar />}
      showNavToggle={false}
    />
  );
};

Header.propTypes = {
  useTopNav: PropTypes.bool
};

export default Header;
