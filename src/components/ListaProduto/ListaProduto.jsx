import { CardProduto } from '../index';
import { Button } from '../../components';

import { ListaProdutoStyled } from './ListaProduto.styles';
import PropTypes, { object } from 'prop-types';

export const ListaProduto = ({ devices, abreModal }) => {
  return (
    <ListaProdutoStyled>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            <CardProduto produto={device} abreModal={abreModal}>
              <Button onClick={() => abreModal(device)}>Adicionar</Button>
            </CardProduto>
          </li>
        ))}
      </ul>
    </ListaProdutoStyled>
  );
};

ListaProduto.propTypes = {
  devices: PropTypes.arrayOf(object).isRequired,
  abreModal: PropTypes.func.isRequired,
};
