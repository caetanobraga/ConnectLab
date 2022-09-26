import { CardProdutoStyled } from './CardProduto.styles';

import PropTypes from 'prop-types';
import { Paper } from '../../components';

export const CardProduto = ({ produto, children }) => {
  return (
    <Paper>
      <CardProdutoStyled>
        <img src={produto.photoUrl} alt={produto.name}></img>
        <h5>{produto.name}</h5>
        {children}
      </CardProdutoStyled>
    </Paper>
  );
};

CardProduto.propTypes = {
  produto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};
