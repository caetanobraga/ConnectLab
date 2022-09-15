import { TituloStyled } from "./Titulo.styles";

import PropTypes from "prop-types";

export const Titulo = ({ children }) => {
  return <TituloStyled>{children}</TituloStyled>;
};

Titulo.propTypes = {
  children: PropTypes.node.isRequired,
};
