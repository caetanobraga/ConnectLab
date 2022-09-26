import { CardUserDeviceStyled } from './CardUserDevice.styles';

import PropTypes from 'prop-types';
import { Paper } from '../../components';

export const CardUserDevice = ({ children }) => {
  return (
    <Paper>
      <CardUserDeviceStyled>{children}</CardUserDeviceStyled>
    </Paper>
  );
};

CardUserDevice.propTypes = {
  children: PropTypes.node.isRequired,
};
