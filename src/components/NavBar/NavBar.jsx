import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authenticate';
import { NavBarStyled } from './NavBar.styles';

export const NavBar = () => {
  const { authenticated } = useContext(AuthContext);

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
      </ul>
    </NavBarStyled>
  );
};
