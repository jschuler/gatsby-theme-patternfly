import React from "react";
import {
  Avatar
} from "@patternfly/react-core";
import imgAvatar from '../../images/imgAvatar.svg';

const HeaderAvatar = () => {
  return (
    <Avatar src={imgAvatar} alt="Avatar image" />
  );
};

export default HeaderAvatar;
