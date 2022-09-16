import { ContainerStyled } from "./Container.styles";

import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
