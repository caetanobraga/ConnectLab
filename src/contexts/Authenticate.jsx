import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { api, createLogin } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUSer = localStorage.getItem('user');
    if (recoveredUSer) {
      setUser(JSON.parse(recoveredUSer));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createLogin(email, password);

    const loggedUser = {
      email: response.data.user.email,
      id: response.data.user._id,
    };
    const token = response.data.token;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    console.log(api);
    setUser(loggedUser);
    navigate('/');
  };

  const logout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
