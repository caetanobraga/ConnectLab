import { Button } from '../../components';

import {
  ListaCardDeviceStyled,
  InformacoesDevice,
  DetalhesInformacoesDevice,
} from './ListaCardDevice.styles';
import PropTypes, { object } from 'prop-types';
import { CardUserDevice } from '../CardUserDevice/CardUserDevice';

export const ListaCardDevice = ({ devices, abreModal }) => {
  return (
    <ListaCardDeviceStyled>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            <CardUserDevice device abreModal>
              <img src={device.device.photoUrl} alt={device.device.name}></img>
              <InformacoesDevice>
                <h4>{device.device.name}</h4>
                <DetalhesInformacoesDevice>
                  <h6>{device.local.description}</h6>|<h6>{device.room}</h6>|
                  <h6>{device.is_on ? 'Ligado' : 'Desligado'}</h6>
                </DetalhesInformacoesDevice>
              </InformacoesDevice>
              <Button onClick={() => abreModal(device)}>detalhes...</Button>
            </CardUserDevice>
          </li>
        ))}
      </ul>
    </ListaCardDeviceStyled>
  );
};

ListaCardDevice.propTypes = {
  devices: PropTypes.arrayOf(object).isRequired,
  abreModal: PropTypes.func.isRequired,
};
