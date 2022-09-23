import { CardProdutoStyled } from './CardProduto.styles';

import PropTypes from 'prop-types';
import { Paper, Button } from '../../components';

export const CardProduto = ({ produto, addDevice }) => {
  return (
    <Paper>
      <CardProdutoStyled>
        <img src={produto.photoUrl} alt={produto.name}></img>
        <h5>{produto.name}</h5>
        <Button onClick={addDevice}>Adicionar</Button>
      </CardProdutoStyled>
    </Paper>
  );
};

CardProduto.propTypes = {
  produto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }),
  addDevice: PropTypes.func.isRequired,
};
