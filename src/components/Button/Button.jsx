import { ButtonStyled, ButtonStyledOutline } from "./Button.styled";

import PropTypes from "prop-types";

export const Button = ({ children, primary = true, outline = false }) => {
  if (outline) {
    return (
      <ButtonStyledOutline primary={primary} outline={outline}>
        {children}
      </ButtonStyledOutline>
    );
  }
  return (
    <ButtonStyled primary={primary} outline={outline}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
};
