import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authenticate';
import { NavBarStyled } from './NavBar.styles';

export const NavBar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  if (!authenticated) {
    return null;
  }
  return (
    <NavBarStyled>
      <ul>
        <li key={0}>
          <Link to="/">Início</Link>
        </li>
        <li key={1}>
          <Link to="/dispositivos">Dispositivos</Link>
        </li>
        <li key={2}>
          <Link to="/perfil">Perfil</Link>
        </li>
        <li key={3}>
          <Button onClick={handleLogout}>Logout</Button>
        </li>
      </ul>
    </NavBarStyled>
  );
};
