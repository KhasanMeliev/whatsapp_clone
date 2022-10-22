import React from "react";
import { ButtonWithIconWrapper } from "./styles";

const ButtonWithIcon = ({ Icon, title }) => {
  return (
    <ButtonWithIconWrapper>
      <Icon />
      {title}
    </ButtonWithIconWrapper>
  );
};

export default ButtonWithIcon;
