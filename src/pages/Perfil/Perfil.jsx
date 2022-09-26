import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '../../components';
import { getUsers } from '../../utils/api';
import {
  InformacaoSecundariaPerfilStyled,
  InformacoesPerfilStyled,
  PerfilStyled,
} from './Perfil.styles';

export const Perfil = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    (async () => {
      const response = await getUsers(userId.id);
      setUser(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <PerfilStyled>
      <Paper>
        <InformacaoSecundariaPerfilStyled>
          <h3>Meu Perfil</h3>
          <hr></hr>
        </InformacaoSecundariaPerfilStyled>
        <InformacoesPerfilStyled>
          {user.photoUrl ? (
            <img src="user.photoUrl" alt="user.fullName" />
          ) : (
            <img src="/generic_avatar.png" alt="generic_avatar" />
          )}
          <InformacaoSecundariaPerfilStyled>
            <h3>{user.fullName}</h3>
            <h5>
              {user.email} - {user.phone}
            </h5>
          </InformacaoSecundariaPerfilStyled>
        </InformacoesPerfilStyled>
        <InformacaoSecundariaPerfilStyled>
          <h4>endereco completo</h4>
          <h4>{user.userAddress.zipCode}</h4>
          <h5>
            {user.userAddress.street} - {user.number}
          </h5>
          <Link to="/cadastrar">Editar ...</Link>
          <Link to="/">Sair</Link>
        </InformacaoSecundariaPerfilStyled>
      </Paper>
    </PerfilStyled>
  );
};
