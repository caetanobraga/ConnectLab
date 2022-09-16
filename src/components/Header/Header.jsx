import { HeaderStyled } from "./Header.styles";
import PropTypes from "prop-types";

export const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
