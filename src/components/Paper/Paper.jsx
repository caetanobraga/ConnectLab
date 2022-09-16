import { PaperStyled } from "./Paper.styles";

import PropTypes from "prop-types";

export const Paper = ({ children }) => {
  return <PaperStyled>{children}</PaperStyled>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};
