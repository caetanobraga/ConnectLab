import { LabelStyled } from "./Label.styles";
import PropTypes from "prop-types";

export const Label = ({ children }) => {
  return <LabelStyled>{children} </LabelStyled>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
