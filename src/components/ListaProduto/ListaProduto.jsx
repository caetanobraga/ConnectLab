import { useEffect, useState } from 'react';
import { CardProduto } from '../index';
import { getDevices } from '../../utils/api';
import { ListaProdutoStyled } from './ListaProduto.styles';

export const ListaProdutos = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const addDevice = () => {
    console.log('adicionou');
  };

  useEffect(() => {
    (async () => {
      const response = await getDevices();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ListaProdutoStyled>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            <CardProduto produto={device} addDevice={addDevice}></CardProduto>
          </li>
        ))}
      </ul>
    </ListaProdutoStyled>
  );
};
