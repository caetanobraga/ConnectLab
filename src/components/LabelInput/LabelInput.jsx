import PropTypes from "prop-types";

import { LabelInputStyled } from "./LabelInput.styles";

export const LabelInput = ({ children }) => {
  return <LabelInputStyled>{children}</LabelInputStyled>;
};

LabelInput.propTypes = {
  children: PropTypes.node.isRequired,
};
