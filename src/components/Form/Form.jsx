import PropTypes from "prop-types";

export const Form = ({ children }) => {
  return <form>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
