import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Authenticate";
import PropTypes from "prop-types";

export const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
